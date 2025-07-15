export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import namespaceIndex from "@/lib/db/pinecone";
import { openai } from "@ai-sdk/openai";
import { getEmbedding } from "@/lib/openai";
import { streamText } from "ai";


import { waitUntil } from '@vercel/functions';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new ratelimiter
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  prefix: "@upstash/ratelimit",
  analytics: true
});
export const maxDuration = 30;




export async function POST(req: Request) {
  try {
    const identifier = "api";
    const { success, limit, remaining, pending } = await ratelimit.limit(identifier);
    const response = {
      success: success,
      limit: limit, 
      remaining: remaining
    }
    waitUntil(pending)
    
    if (!success) {
      return new Response(JSON.stringify(response), { status: 429 });
    }
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
