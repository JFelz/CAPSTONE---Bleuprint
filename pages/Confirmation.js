import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getUserCartOrders, getUserLibraryOrders } from '../api/digitalAssets';
import { useAuth } from '../utils/context/authContext';
import ConfirmProducts from '../components/ConfirmCards';

export default function Confirmation() {
  const [reviewcart, setReviewcart] = useState();
  const { user } = useAuth();

  const getMyOrders = () => {
    getUserLibraryOrders(user.uid).then(setReviewcart);
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
            <h4 className="digiProdTitle">Total Purchased Products</h4>
            <div className="productContainer" style={{ color: 'aqua', alignItems: 'center' }}>
              {reviewcart?.map((obj) => <ConfirmProducts key={obj.firebaseKey} expense={obj} onUpdate={getUserCartOrders} />)}

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
              <Link href="/" passHref>
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
                >
                  Continue Shopping
                </Button>
              </Link>
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
