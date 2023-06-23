import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  imageUrl_2: '',
  imageUrl_3: '',
  price: 0,
  category: '',
};

const expenseState = {
  name: '',
  amount: 0,
};

export default function TotalRevenue({ totalPrice, expenseTotal }) {
  const profitMargin = totalPrice - expenseTotal;
  const totalProfitMargin = profitMargin?.toFixed(2);
  return (
    <div>
      <div className="TotalRevenue">
        <h1>Total Revenue: ${totalPrice}</h1>
      </div>
      <div className="ProfitMargin">
        <h1>Profit Margin ${totalProfitMargin}</h1>
      </div>
    </div>
  );
}

TotalRevenue.propTypes = {
  totalPrice: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
      imageUrl_2: PropTypes.string,
      imageUrl_3: PropTypes.string,
      firebaseKey: PropTypes.string,
      uid: PropTypes.string,
    }),
  ),
};

TotalRevenue.propTypes = {
  expenseTotal: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ),
};

TotalRevenue.defaultProps = {
  totalPrice: initialState,
  expenseTotal: expenseState,
};

// Set this component to be the Profit Margin and Total Revenue boxes
