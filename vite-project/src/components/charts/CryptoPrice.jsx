import { useEffect, useState } from "react";
import axios from 'axios';
import CryptoCard from './CryptoCard';
import CryptoSymbols from './CryptoSymbols';

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/cryptoprice', {
          headers: { 'X-Api-Key': 'NRUzbwyuB6MxQMEr4UaOiw==uhWpRQlh9L8ERKoQ' },
          params: {
            symbol:'BTCUSD',
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    };
    fetchData();
  }, []);
  console.log(cryptoData)
  return (
    <div>
      <CryptoCard symbol={cryptoData.symbol} price={cryptoData.price} buttonHandler={() => {}} />
    </div>
  );
};;

export default CryptoPrice;