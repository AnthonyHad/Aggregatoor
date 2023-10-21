import NewsCard from "@/components/news/newsCard";

export default function Home() {
  return (
    <main className="grid grid-cols-3 items-center gap-y-10 gap-x-2">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </main>
  );
}
