import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Container } from 'react-bootstrap';
import { getUserDigitalAssets } from '../api/digitalAssets';
import MyProductCards from '../components/MyProductCards';
import { useAuth } from '../utils/context/authContext';
import Footer from '../components/Footer';

export default function ManageProducts() {
  const [uidproducts, setUidproducts] = useState([]);
  const { user } = useAuth();

  const displayUIDProducts = () => {
    getUserDigitalAssets(user.uid).then(setUidproducts);
  };

  useEffect(() => {
    displayUIDProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link href="/Manageproducts/new" passHref>
          <Button style={{ backgroundColor: '#35CEB3', borderColor: '#35CEB3' }}> Add a Product </Button>
        </Link>
      </Container>
      <Container style={{ width: '80%' }}>
        <div style={{ color: 'white', marginTop: '30px', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '30px' }}> Manage Products </h1>
        </div>
      </Container>
      <Container style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {uidproducts?.map((uidProduct) => <MyProductCards key={uidProduct.firebaseKey} uidproductObj={uidProduct} onUpdate={displayUIDProducts} />)}
        </div>
      </Container>
      <Footer />
    </>
  );
}
