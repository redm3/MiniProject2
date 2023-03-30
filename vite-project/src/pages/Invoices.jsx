import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'quantity', headerName: 'Quantity', width: 200 },
  { field: 'price', headerName: 'Price', width: 200 },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 400 },
];

const rows = [
  { id: 1, description: 'Invoice #001', quantity: 2, price: 500, amount: 1000 },
  { id: 2, description: 'Invoice #002', quantity: 1, price: 700, amount: 700 },
  { id: 3, description: 'Invoice #003', quantity: 5, price: 200, amount: 1000 },
];

export default function Invoices() {
  const handlePayClick = () => {
    alert('Payment processed successfully!');
  };

  return (
    <div style={{ paddingLeft: '50px' }}>
      <h1 style={{ color: 'black', fontSize: '40px' }}>QuickerPay Invoices</h1>
      <br></br>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <br></br>
      <Button onClick={handlePayClick} variant="contained" size="large">Pay</Button>
    </div>
  );
}
