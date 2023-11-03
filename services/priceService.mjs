export const fetchPrices = async () => {
  const data = await fetch(
    " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=24h&locale=en"
  );
  const coinGeckoPrices = await data.json();

  const prices = coinGeckoPrices.map((price) => ({
    ticker: price.symbol,
    currentPrice: price.current_price,
    percentChange: price.price_change_percentage_24h,
    image: price.image,
  }));

  return prices;
};
