import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    setBalance(balance + amount);
    setAmount(0);
  };

  const handleSubtract = () => {
    setBalance(balance - amount);
    setAmount(0);
  };

  return (
    <div style={{ paddingLeft: '400px', paddingTop:'200px' }}>
        

    <div style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
      <h1 style={{ margin: '0px 0px 20px 0px', fontSize: '36px' }}>Wallet Balance: ${balance.toFixed(2)}</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <label style={{ fontSize: '24px', marginRight: '10px' }}>Amount:</label>
        <TextField type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '24px', width: '200px' }} />
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleAdd} variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 24px', fontSize: '24px', marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Deposit</Button>
        <Button onClick={handleSubtract} variant="contained" style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 24px', fontSize: '24px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Withdrawl</Button>
      </div>
    </div>
    </div>
  );
};

export default Wallet;
