import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import {
  createMyLibraryProducts,
  deleteMyCartAssets,
  getUserCartOrders,
} from '../api/digitalAssets';
import CartProducts from '../components/CartProducts';
import { useAuth } from '../utils/context/authContext';

export default function Confirmation() {
  const [reviewcart, setReviewcart] = useState();
  const { user } = useAuth();

  const getMyOrders = () => {
    getUserCartOrders(user.uid).then(setReviewcart);
  };

  const passToMyLibrary = () => {
    reviewcart.map((obj) => createMyLibraryProducts(obj).then(() => getMyOrders(deleteMyCartAssets(obj.firebaseKey))));
  };

  useEffect(() => {
    getMyOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (reviewcart?.userName === user.userName) ? (
      <div className="flexBox">
        <div className="ReturnButton" />
        <div className="cartBox">
          <div className="shell">
            <div className="ConfirmationTitle">
              <h2><b>Confirmed!</b></h2>
              <h5> Thank you for your order! </h5>
            </div>
            <h4 className="digiProdTitle">Digital Products</h4>
            <div className="productContainer" style={{ color: 'aqua', alignItems: 'center' }}>
              {reviewcart?.map((obj) => <CartProducts key={obj.firebaseKey} currentProduct={obj} onUpdate={getUserCartOrders} />)}

              <Link href="/MyLibrary" passHref>
                <Button
                  type="button"
                  variant="outline-secondary"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    borderWidth: '2px',
                    borderRadius: '100px',
                    height: '55px',
                    fontSize: '1.5em',
                    marginTop: '20px',
                  }}
                >
                  View in my Library
                </Button>
              </Link>
              <Button
                type="button"
                className="btn btn-success"
                style={{
                  backgroundColor: '#35CEB3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  borderWidth: '0px',
                  borderRadius: '100px',
                  height: '50px',
                  fontSize: '1.5em',
                  marginTop: '20px',
                }}
                onClick={passToMyLibrary}
              >
                Continue Shopping
              </Button>
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
