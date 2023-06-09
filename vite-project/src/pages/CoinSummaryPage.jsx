import React from "react";
import AddCoin from "../components/coin/AddCoin";
import CoinList from "../components/coin/CoinList";

const CoinSummaryPage = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
