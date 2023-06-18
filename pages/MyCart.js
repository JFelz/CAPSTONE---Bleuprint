import React, { useEffect, useState } from 'react';
import { getUserCartOrders } from '../api/digitalAssets';
import { useAuth } from '../utils/context/authContext';

export default function MyCart() {
  const [cart, setCart] = useState();
  const { user } = useAuth();

  const getMyOrders = () => {
    getUserCartOrders().then(setCart);
  };

  useEffect(() => {
    getMyOrders();
  });

  return (
    (cart?.cartUser === user.uid) ? (
      <div>
        <h1> It works! </h1>
      </div>
    ) : (
      <div>
        <h1> TRY A NEW PLAN </h1>
      </div>
    )
  );
}
