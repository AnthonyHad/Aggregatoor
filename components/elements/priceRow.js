const PriceRow = () => {
  return (
    <div className="flex mx-4 space-x-4">
      <div className="flex space-x-1">
        <div>BTC</div>
        <p>24653$</p>
        <div>^ 20%</div>
      </div>
      <div className="flex space-x-1">
        <div>ETH</div>
        <p>2000$</p>
        <div>% change</div>
      </div>
    </div>
  );
};

export default PriceRow;
