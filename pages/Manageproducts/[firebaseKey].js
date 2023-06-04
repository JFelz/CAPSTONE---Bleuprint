import React, { useEffect, useState } from 'react';
import { getDigitalAssets } from '../../api/digitalAssets';

export default function ManageMyProducts() {
  const [count, setCount] = useState();

  const displayMyProducts = () => {
    getDigitalAssets().then(setCount);
  };

  useEffect(() => {
    displayMyProducts();
  }, []);

  return (
    <h1>{count}</h1>
  );
}
