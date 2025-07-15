import { getEmbedding } from "./openai";

export const getEmbeddingForPortfolio = async (category: string, content: string = "") => {
  return getEmbedding(category + "\n\n" + content);
}
