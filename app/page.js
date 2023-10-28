import NewsCard from "@/components/news/newsCard";
import { fetchNewsFromFeeds } from "@/services/newsService.mjs";

export default async function News() {
  const feeds = await fetchNewsFromFeeds();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-6 gap-x-4 sm:overflow-x-clip">
      {feeds.map((item) => (
        <NewsCard
          key={item.id}
          title={item.title}
          link={item.link}
          pubDate={item.pubDate}
          contentSnippet={item.contentSnippet}
          source={item.source}
          logo={item.logo}
        />
      ))}
    </main>
  );
}
