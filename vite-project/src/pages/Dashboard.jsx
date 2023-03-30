import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from '../components/DashTracker/Budget';
import Remaining from '../components/DashTracker/Remaining';
import ExpenseTotal from '../components/DashTracker/ExpenseTotal';
import ExpenseList from '../components/DashTracker/ExpenseList';
import AddExpenseForm from '../components/DashTracker/AddExpenseForm';
import { AppProvider } from '../context/AppContext';

const Dashboard = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>My QuickerPay Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Dashboard;
