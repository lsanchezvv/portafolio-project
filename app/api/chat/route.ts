import namespaceIndex from "@/lib/db/pinecone";
import { openai } from "@ai-sdk/openai";
import { getEmbedding } from "@/lib/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const messagesTruncated = messages.slice(-6);

    // Get embedding from the full recent message history
    const embedding = await getEmbedding(
      messagesTruncated.map((message: { content: string }) => message.content).join("\n"),
    );

    // Query Pinecone
    const vectorQueryResponse = await namespaceIndex.query({
      vector: embedding,
      topK: 30,
      includeMetadata: true,
    });

    // Get context strings from metadata or stored values
    const contextChunks = vectorQueryResponse.matches
    ?.map((match) => match.metadata?.content || "")
    .filter(Boolean)
    .join("\n\n");

    // Add context as a system message
    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      system: `You are an assistant that answers questions about Luis's work experience.

Here is some relevant background information retrieved from the knowledge base:
${contextChunks}

Only answer based on this context unless the user's question is general.`,
      messages: messagesTruncated,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
