import NewsCard from "@/components/news/newsCard";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-6 gap-x-4 sm:overflow-x-clip">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </main>
  );
}
