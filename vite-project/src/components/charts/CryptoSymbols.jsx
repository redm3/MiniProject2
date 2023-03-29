import { useEffect, useState } from "react";
import axios from 'axios';

const CryptoSymbols = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/cryptosymbols', {
          headers: { 'X-Api-Key': 'NRUzbwyuB6MxQMEr4UaOiw==uhWpRQlh9L8ERKoQ' },
        });
        setSymbols(Array.isArray(response.data.symbols) ? response.data.symbols : []);
        console.log(response.data.symbols);

      } catch (error) {
        console.error('Error:', error.response.data);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h2>Crypto Symbols:</h2>
      <ul>
        {symbols.map((symbol) => (
          <li key={symbol}>{symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoSymbols;
