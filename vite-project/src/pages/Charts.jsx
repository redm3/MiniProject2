import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const CryptoChart = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
          {
            headers: { "X-Api-Key": "YOUR_API_KEY" },
          }
        );
        setPriceData(response.data.prices);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPriceData();
  }, []);

  const chartData = {
    labels: priceData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        label: "Price",
        data: priceData.map((dataPoint) => dataPoint.price),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoChart;