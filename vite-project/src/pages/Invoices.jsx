import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const columns = [
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 400 },
];

const initialRows = [
    { id: 1, description: 'Invoice #001', quantity: 2, price: 500, amount: 1000 },
    { id: 2, description: 'Invoice #002', quantity: 1, price: 700, amount: 700 },
    { id: 3, description: 'Invoice #003', quantity: 5, price: 200, amount: 1000 },
];

export default function Invoices() {
    const [rows, setRows] = React.useState(initialRows);
    const [newItem, setNewItem] = React.useState({
        description: '',
        quantity: '',
        price: '',
        amount: '',
    });

    const handlePayClick = () => {
        alert('Payment processed successfully!');
    };

    const handleAddClick = () => {
        const newRow = {
            id: rows.length + 1,
            ...newItem,
            amount: Number(newItem.quantity) * Number(newItem.price),
        };
        setRows([...rows, newRow]);
        setNewItem({
            description: '',
            quantity: '',
            price: '',
            amount: '',
        });
    };

    const handleItemChange = (event) => {
        const { name, value } = event.target;
        setNewItem((prevNewItem) => ({
            ...prevNewItem,
            [name]: value,
        }));
    };

    return (
        <div className='invoices ComponentBox'>
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
                <div>
                    <TextField
                        name="description"
                        label="Description"
                        value={newItem.description}
                        onChange={handleItemChange}
                    />
                    <TextField
                        name="quantity"
                        label="Quantity"
                        value={newItem.quantity}
                        onChange={handleItemChange}
                    />
                    <TextField
                        name="price"
                        label="Price"
                        value={newItem.price}
                        onChange={handleItemChange}
                    />
                    <Button onClick={handleAddClick} variant="contained" size="large">
                        Add Item
                    </Button>
                </div>
                <br></br>
                <Button onClick={handlePayClick} variant="contained" size="large">
                    Pay
                </Button>
            </div>
        </div>
    );
}
