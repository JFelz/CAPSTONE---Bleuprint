import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { getUserCartOrders } from '../api/digitalAssets';
import CartProducts from '../components/CartProducts';
import { useAuth } from '../utils/context/authContext';

export default function MyCart() {
  const [cart, setCart] = useState();
  const { user } = useAuth();

  const getMyOrders = () => {
    getUserCartOrders(user.uid).then(setCart);
  };

  useEffect(() => {
    getMyOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (cart?.userName === user.userName) ? (
      <div className="flexBox">
        <div className="cartBox">
          <div className="shell">
            <div className="myCartTitle">
              <h2> My Cart </h2>
            </div>
            <h4 className="digiProdTitle">Digital Products</h4>
            <div className="productContainer" style={{ color: 'aqua', alignItems: 'center' }}>
              {cart?.map((obj) => <CartProducts key={obj.firebaseKey} currentProduct={obj} />)}
              <p>it works, its reading the data</p>
            </div>
          </div>
          <div className="Apple">
            <div className="OrderSummaryTitle">
              <h2> Order Summary </h2>
            </div>
            <div className="checkoutBox">
              <div className="OrderSummary">
                <h1 style={{ fontSize: '15px', margin: '0px', padding: '10px' }}>USERNAME</h1>
                <div className="userDetails">
                  <Image style={{ width: '40px', height: '40px', borderRadius: '100px' }} src={user.photoURL} alt="What" />
                  <h1 style={{ fontSize: '15px', margin: '0px' }}> {user.displayName} </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div style={{ color: 'red' }}>
        <h1> Something is not working, try again! </h1>
      </div>
    )
  );
}
