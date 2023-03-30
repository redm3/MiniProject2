import { useEffect, useState } from "react";
import axios from 'axios';
import CryptoCard from './CryptoCard';
import Button from '@mui/material/Button';

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const symbols = ['BTCUSD', 'ETHUSD', 'LTCUSD', 'XRPUSD'];
    const fetchData = async () => {
      try {
        const requests = symbols.map(symbol => axios.get('https://api.api-ninjas.com/v1/cryptoprice', {
          headers: { 'X-Api-Key': 'NRUzbwyuB6MxQMEr4UaOiw==uhWpRQlh9L8ERKoQ' },
          params: {
            symbol,
          },
        }));
        const responses = await Promise.all(requests);
        const data = responses.map(response => response.data);
        setCryptoData(data);
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    };
    fetchData();
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setCryptoData(prevData => prevData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }));
  }

  return (
    <div>
      <h1>Crypto Prices</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {cryptoData.map(crypto => (
          <div style={{ marginLeft: '16px', marginRight: '16px' }}>
            <CryptoCard symbol={crypto.symbol} price={crypto.price} buttonHandler={() => {}} />
          </div>
        ))}
      </div>
      <br></br>
      <Button variant="contained" onClick={handleSort}>Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})</Button>
    </div>
  );
};

export default CryptoPrice;
