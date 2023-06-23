import React, { useEffect, useState } from 'react';
import { getRevenueOrders, getSellerExpenses } from '../../api/digitalAssets';
import TotalRevenue from '../../components/TotalRevenue';
import { useAuth } from '../../utils/context/authContext';
import Expenses from '../../components/Expenses';

const FinancialAnalytics = () => {
  const [amount, setAmount] = useState();
  const [expense, setExpense] = useState();
  const { user } = useAuth();

  const getData = () => {
    getRevenueOrders(user.uid).then(setAmount);
    console.log(amount);
    getSellerExpenses().then(setExpense);
    console.log(expense);
  };

  // Revenue Accumulator
  const toTal = amount?.reduce((final, obj) => final + obj.price, 0);
  const totalPrice = toTal?.toFixed(2);

  // Expense Accumulator
  const expenseAmount = expense?.reduce((total, obj) => total + obj.amount, 0);
  const expenseTotal = expenseAmount?.toFixed(2);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <TotalRevenue expenseTotal={expenseTotal} totalPrice={totalPrice} />
      </div>
      <div className="ExpenseSection">
        <div className="ExpenseTracker">
          <p style={{ margin: '0px', paddingLeft: '25px' }}> Subscriptions </p>
          <div className="qtyAmount">
            <p style={{ margin: '0px' }}>Amount</p>
          </div>
        </div>
        <div>
          {expense?.map((obj) => <Expenses key={obj} expense={obj} />)}
        </div>
        <div className="SubTotalExp">
          <p style={{ margin: '0px', color: '#979797' }}> TOTAL EXPENSE </p>
          <p>-${expenseTotal} </p>
        </div>
      </div>
    </>
  );
};

export default FinancialAnalytics;

// This will be the whole Financial Anyltics page layout
