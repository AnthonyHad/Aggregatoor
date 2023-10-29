import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const CryptoPrice = ({ ticker, currentPrice, image, percentChange }) => {
  const formattedTicker = ticker.toUpperCase();
  const formattedPercentChange = `${percentChange.toFixed(2)}%`;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(currentPrice);

  return (
    <div className="flex space-x-1 items-center p-2">
      <Image src={image} width={20} height={20} alt={ticker} />
      <div className="font-bold">{formattedTicker}</div>
      <p className="text-sm">{formattedPrice}</p>
      <div className="text-sm flex items-center">
        {percentChange >= 0 ? (
          <ChevronUp size={12} color="#14532d" />
        ) : (
          <ChevronDown size={12} color="#7f1d1d" />
        )}
        {formattedPercentChange}
      </div>
    </div>
  );
};

export default CryptoPrice;
