import { fetchNewsFromFeeds } from "@/services/newsService.mjs";

export async function GET() {
  const feeds = await fetchNewsFromFeeds();
  return Response.json(feeds);
}
