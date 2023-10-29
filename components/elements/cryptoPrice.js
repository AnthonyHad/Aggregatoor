import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const CryptoPrice = ({ key, ticker, currentPrice, image, percentChange }) => {
  return (
    <div key={key} className="flex space-x-1.5 items-center">
      <Image src={image} width={15} height={10} alt={ticker} />
      <div>{ticker}</div>
      <p>{currentPrice}</p>
      <div className="text-sm flex items-center">
        {percentChange >= 0 ? (
          <ChevronUp size={12} />
        ) : (
          <ChevronDown size={12} />
        )}
        {percentChange}
      </div>
    </div>
  );
};

export default CryptoPrice;
