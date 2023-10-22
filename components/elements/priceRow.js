import { ChevronDown, ChevronUp } from "lucide-react";

const PriceRow = () => {
  return (
    <div className="flex mx-2 space-x-4 sticky top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm">
      <div className="flex space-x-1 items-center">
        <div>BTC</div>
        <p>24653$</p>
        <div className="text-sm flex items-center">
          <ChevronUp size={12} />
          120%
        </div>
      </div>
      <div className="flex space-x-1 items-center">
        <div>ETH</div>
        <p>2000$</p>
        <div className="text-sm flex items-center">
          <ChevronDown size={12} />
          20%
        </div>
      </div>
    </div>
  );
};

export default PriceRow;
