import React, { useEffect, useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  createMyLibraryProducts,
  deleteMyCartAssets,
  getUserCartOrders,
  updateMyLibraryOrders,
} from '../api/digitalAssets';
import CartProducts from '../components/CartProducts';
import OrderSummCard from '../components/OrderSummCard';
import { useAuth } from '../utils/context/authContext';
import Footer from '../components/Footer';

export default function MyCart() {
  const [cart, setCart] = useState();
  const router = useRouter();
  const { user } = useAuth();

  const getMyOrders = () => {
    getUserCartOrders(user.uid).then(setCart);
  };

  const passToMyLibrary = () => {
    cart?.map((obj) => createMyLibraryProducts(obj).then(({ name }) => {
      const patchPayload = {
        firebaseKey: name,
        isPurchased: true,
        customerName: user.displayName,
      };
      updateMyLibraryOrders(patchPayload).then(() => deleteMyCartAssets(obj.firebaseKey)).then(router.push('/Confirmation'));
    }));
  };

  const toTal = cart?.reduce((final, obj) => final + obj.price, 0);
  const totalPrice = toTal?.toFixed(2);

  useEffect(() => {
    getMyOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (cart?.userName === user.userName) ? (
      <>
        <div className="flexBox">
          <div className="ReturnButton">
            <Link href="/" passHref>
              <Button
                type="button"
                className="btn btn-success"
                style={{
                  backgroundColor: '#6A6A6A', width: '10%', borderWidth: '0px', height: '30px', fontSize: '1em', boxSizing: 'content-box',
                }}
              >
                Return To Store
              </Button>
            </Link>
          </div>
          <div className="cartBox">
            <div className="shell">
              <div className="myCartTitle">
                <h2> My Cart </h2>
              </div>
              <h4 className="digiProdTitle">Digital Products</h4>
              <div className="productContainer" style={{ color: 'aqua', alignItems: 'center' }}>
                {cart?.map((obj) => <CartProducts key={obj.firebaseKey} productObj={obj} onUpdate={getMyOrders} />)}
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
              <div className="OrderSection">
                <div className="OrderSubTitles">
                  <p style={{ margin: '0px', paddingLeft: '25px' }}> ITEMS </p>
                  <div className="qtyPRICE">
                    <p style={{ margin: '0px' }}>QTY</p>
                    <p style={{ margin: '0px' }}>PRICE</p>
                  </div>
                </div>
                <div>
                  {cart?.map((obj) => <OrderSummCard key={obj.firebaseKey} orderCard={obj} />)}
                </div>
                <div className="SubTotal">
                  <p style={{ margin: '0px', color: '#979797' }}> SUBTOTAL </p>
                  ${totalPrice}
                </div>
                <div className="Taxes">
                  <p style={{ margin: '0px', color: '#979797' }}>TAXES</p>
                </div>
                <div className="Total">
                  <p><b>TOTAL</b> before taxes</p>
                  ${totalPrice}
                </div>
                <div className="OrderButton">
                  <Button
                    type="button"
                    className="btn btn-success"
                    style={{
                      backgroundColor: '#35CEB3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      borderWidth: '0px',
                      height: '50px',
                      fontSize: '1.5em',
                    }}
                    onClick={passToMyLibrary}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <div style={{ color: 'red' }}>
        <h1> Something is not working, try again! </h1>
      </div>
    )
  );
}
