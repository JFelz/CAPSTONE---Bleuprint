// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState, useEffect } from 'react';
import getDigitalAssets from '../api/digitalAssets';
import ProductCard from '../components/ProductCard';
// import ProductCard from '../components/ProductCard';
// import { Card } from 'react-bootstrap';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [products, setProducts] = useState();

  const displayProducts = () => {
    getDigitalAssets().then(setProducts);
  };

  useEffect(() => {
    displayProducts();
  }, []);
  return (
    <div>
      {products?.map((product) => <ProductCard key={product.firebaseKey} productObj={product} onUpdate={displayProducts} />)}
      <h1> this will be the array loop and the display of each card. Card is developed in a Component</h1>
    </div>
  );
}

export default Home;
