import React, { useEffect, useState } from 'react';
import { getRevenueOrders, getSellerExpenses } from '../../api/digitalAssets';
import { useAuth } from '../../utils/context/authContext';
import Expenses from '../../components/Expenses';
import FinTechCard from '../../components/FinTechCard';
import Footer from '../../components/Footer';

const FinancialAnalytics = () => {
  const [amount, setAmount] = useState();
  const [expense, setExpense] = useState();
  const { user } = useAuth();

  const getData = () => {
    getRevenueOrders(user.uid).then(setAmount);

    getSellerExpenses().then(setExpense);
  };

  // Revenue Accumulator
  const toTal = amount?.reduce((final, obj) => final + obj.price, 0);
  const totalPrice = toTal?.toFixed(2);

  // Expense Accumulator
  const expenseAmount = expense?.reduce((total, obj) => total + obj.amount, 0);
  const expenseTotal = expenseAmount?.toFixed(2);

  // ProfitMargin (Revenue - C.O.G.S)
  const netProfit = totalPrice - expenseTotal;
  const totalNetProfit = netProfit?.toFixed(2);

  const taxOfEachProduct = totalPrice * (8.06 / 100);
  const taxPercentage = taxOfEachProduct?.toFixed(2);
  const finalTax = (Number(expenseTotal) + Number(taxPercentage)).toFixed(2);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="OverviewTitle">
        <h1>Overview</h1>
      </div>
      <div className="FinOverviewSection">
        <div className="NetProfit">
          <h4 style={{
            justifyContent: 'start',
            alignItems: 'start',
            width: '90%',
            marginLeft: '20px',
          }}
          >
            Net Sales
          </h4>
          <h1>${totalPrice}</h1>
        </div>
        <div className="NetProfit">
          <h4 style={{
            justifyContent: 'start',
            alignItems: 'start',
            width: '90%',
            marginLeft: '20px',
          }}
          >
            Net Profit
          </h4>
          <h1>${totalNetProfit}</h1>
        </div>
      </div>
      <div className="OrderAndExpenses">

        <div className="ExpenseSection">
          <div className="ExpenseTracker">
            <p style={{ margin: '0px', paddingLeft: '25px' }}> Subscriptions </p>
            <div className="qtyAmount">
              <p style={{ margin: '0px' }}>Amount</p>
            </div>
          </div>
          <div>
            {expense?.map((obj) => <Expenses key={obj.firebaseKey} expense={obj} />)}
          </div>
          <div>
            <div className="SubTotalExp">
              <p style={{ margin: '0px', color: '#979797' }}> TOTAL EXPENSE </p>
              <p>-${finalTax} </p>
            </div>
            <div className="SubTotalExp">
              <p style={{ margin: '0px', color: '#979797' }}> Total Percentage (accumulated per product) </p>
              <p>-${(taxOfEachProduct).toFixed(2)} </p>
            </div>
          </div>
        </div>

        <div className="PurchasedOrders">
          <h3>
            Customer Orders
          </h3>
          <div className="OrderTracker">
            {amount?.map((obj) => <FinTechCard key={obj.firebaseKey} uidproductObj={obj} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialAnalytics;
