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

export default function TotalRevenue({ currentRevenue }) {
  return (
    <div>
      <div className="TotalRevenue">
        <h1>Total Revenue: ${currentRevenue.price}</h1>
      </div>
      <div className="ProfitMargin">
        <h1>Profit Margin</h1>
      </div>
    </div>
  );
}

TotalRevenue.propTypes = {
  currentRevenue: PropTypes.shape({
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
};

TotalRevenue.defaultProps = {
  currentRevenue: initialState,
};

// Set this component to be the Profit Margin and Total Revenue boxes
