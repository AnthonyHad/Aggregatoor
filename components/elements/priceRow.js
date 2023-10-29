import { fetchPrices } from "@/services/priceService.mjs";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const PriceRow = async () => {
  const prices = await fetchPrices();

  return (
    <div className="flex mx-2 space-x-4 sticky top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm">
      {prices.map((price) => (
        <div key={price.ticker} className="flex space-x-1.5 items-center">
          <Image src={price.image} width={15} height={10} alt={price.ticker} />
          <div>{price.ticker}</div>
          <p>{price.currentPrice}</p>
          <div className="text-sm flex items-center">
            <ChevronUp size={12} />
            {price.percentChange}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceRow;
