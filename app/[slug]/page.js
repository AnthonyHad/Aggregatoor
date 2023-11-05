import NewsCard from "@/components/news/newsCard";

//'Blockworks: News and insights about digital assets.'

const FilteredNews = async ({ params }) => {
  const response = await fetch("http://localhost:3000/api/news", {
    next: { revalidate: 3600 },
  });
  const feeds = await response.json();

  // let capitalParams =
  //   params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  if (params.slug === "Blockworks") {
    params.slug = "Blockworks: News and insights about digital assets.";
  }
  console.log(params);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-6 gap-x-4 sm:overflow-x-clip">
      {feeds
        .filter((item) => item.source === params.slug)
        .map((item) => (
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
    </div>
  );
};

export default FilteredNews;
