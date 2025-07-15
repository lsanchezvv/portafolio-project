import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;
const indexHostUrl = process.env.PINECONE_INDEX_HOST_URL;
const indexName = process.env.PINECONE_INDEX_NAME;

if (!apiKey) {
  throw new Error("PINECONE_API_KEY is not set");
}

if (!indexHostUrl) {
  throw new Error("PINECONE_INDEX_HOST_URL is not set");
}

if (!indexName) {
  throw new Error("PINECONE_INDEX_NAME is not set");
}

const portfolioIndex = new Pinecone({
  apiKey,
});

await portfolioIndex.Index(indexName, indexHostUrl);
const namespaceIndex = portfolioIndex.index(indexName);
export default namespaceIndex;
