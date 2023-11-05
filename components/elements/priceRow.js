import { fetchPrices } from "@/services/priceService.mjs";
import CryptoPrice from "./cryptoPrice";

const PriceRow = async () => {
  const prices = await fetchPrices();

  return (
    <div className="flex sticky top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm">
      <div className="flex mx-2 space-x-4 items-center animate-infinite">
        {prices.map((price) => (
          <CryptoPrice
            key={price.ticker}
            ticker={price.ticker}
            image={price.image}
            currentPrice={price.currentPrice}
            percentChange={price.percentChange}
          />
        ))}
      </div>
      <div className="flex mx-2 items-center space-x-4 animate-infinite">
        {prices.map((price) => (
          <CryptoPrice
            key={price.ticker}
            ticker={price.ticker}
            image={price.image}
            currentPrice={price.currentPrice}
            percentChange={price.percentChange}
          />
        ))}
      </div>
      <div className="flex mx-2 items-center space-x-4 animate-infinite">
        {prices.map((price) => (
          <CryptoPrice
            key={price.ticker}
            ticker={price.ticker}
            image={price.image}
            currentPrice={price.currentPrice}
            percentChange={price.percentChange}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceRow;
