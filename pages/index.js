// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
// import { useState, useEffect } from 'react';
// import getDigitalAssets from '../api/digitalAssets';
import CategoryBar from '../components/FilterBar';
// import ProductCard from '../components/ProductCard';
// import ProductCard from '../components/ProductCard';
// import { Card } from 'react-bootstrap';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  // const [products, setProducts] = useState();

  // const displayProducts = () => {
  //   getDigitalAssets().then(setProducts);
  // };

  // useEffect(() => {
  //   displayProducts();
  // }, []);
  return (
    <CategoryBar />
  // {/* <CategoryBar /> */}
  // {/* <div className='d-flex flex-wrap'>
  // {/* {products?.map((product) => <ProductCard key={product.firebaseKey} productObj={product} onUpdate={displayProducts} />)} */}
  // {/* </div> */}

  );
}

export default Home;
