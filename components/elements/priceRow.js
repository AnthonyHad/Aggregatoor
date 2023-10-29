import { fetchPrices } from "@/services/priceService.mjs";
import CryptoPrice from "./cryptoPrice";

const PriceRow = async () => {
  const prices = await fetchPrices();

  return (
    <div className="flex mx-2 space-x-4 sticky top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm">
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
  );
};

export default PriceRow;
