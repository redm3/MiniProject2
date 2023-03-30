import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const CryptoDashboard = () => {
  const [data, setData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=30&interval=daily"
      );
      setData(result.data.prices);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const ctx = document.getElementById("bitcoin-price-chart");
      if (chartInstance) {
        chartInstance.destroy();
      }
      setChartInstance(new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((priceData) => new Date(priceData[0]).toLocaleDateString()),
          datasets: [
            {
              label: "Price",
              data: data.map((priceData) => priceData[1]),
              borderColor: "rgba(255, 99, 132, 1)",
              fill: false
            }
          ]
        },
        options: {
            scales: {
              xAxes: [
                {
                  type: "time",
                  distribution: "linear",
                  time: {
                    unit: "day"
                  }
                }
              ],
              yAxis: {
                ticks: {
                  callback: function (value, index, values) {
                    return "$" + value;
                  }
                }
              }
            }
          }
      }));
    }
  }, [data, chartInstance]);

  return <canvas id="bitcoin-price-chart" width="400" height="400"></canvas>;
};

export default CryptoDashboard;
