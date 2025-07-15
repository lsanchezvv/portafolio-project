import { NextRequest, NextResponse } from 'next/server';
import { getEmbeddingForPortfolio } from '../../../lib/embeddings';
import portfolioIndex from '../../../lib/db/pinecone';

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string"
  );
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get('x-api-key');
    const validApiKey = process.env.PORTFOLIO_API_KEY;
    if (!apiKey || apiKey !== validApiKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const entries = await req.json(); // expect an array of entries

    if (!Array.isArray(entries) || entries.length === 0) {
      return NextResponse.json({ error: 'Request body must be a non-empty array' }, { status: 400 });
    }

    const allUpserts = [];

    for (const entry of entries) {
      const { category, content, company, role, year, tech_stack } = entry;
      if (!category || typeof category !== 'string' || !content || typeof content !== 'string') {
        return NextResponse.json({ error: 'Each entry must have valid category and content' }, { status: 400 });
      }

      const chunks = chunkText(content, 200);

      const upserts = await Promise.all(chunks.map(async (chunk) => {
        const embedding = await getEmbeddingForPortfolio(category, chunk);
        return {
          id: crypto.randomUUID(),
          values: embedding,
          metadata: {
            category,
            company,
            role,
            year,
            tech_stack,
            content: chunk,
          },
        };
      }));

      allUpserts.push(...upserts);
    }

    // Batch upsert in chunks of 100 or so (Pinecone limits batch size)
    const batchSize = 100;
    for (let i = 0; i < allUpserts.length; i += batchSize) {
      const batch = allUpserts.slice(i, i + batchSize);
      await portfolioIndex.upsert(batch);
    }

    return NextResponse.json({ message: `Upserted ${allUpserts.length} chunks in total.` });
  } catch (error: unknown) {
    const errorMessage = isErrorWithMessage(error)
      ? error.message
      : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}


function chunkText(text: string, maxWords = 200): string[] {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).split(" ").length > maxWords) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += " " + sentence;
    }
  }
  if (current) chunks.push(current.trim());

  return chunks;
}
