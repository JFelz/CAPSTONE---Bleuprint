import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { getUserDigitalAssets } from '../api/digitalAssets';
import MyProductCards from '../components/MyProductCards';
import { useAuth } from '../utils/context/authContext';

export default function ManageProducts() {
  const [uidproducts, setUidproducts] = useState();
  const { user } = useAuth();

  const displayUIDProducts = () => {
    getUserDigitalAssets(user.uid).then(setUidproducts);
  };

  useEffect(() => {
    displayUIDProducts();
  }, []);

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link href="/Manageproducts/new" passHref>
          <Button style={{ backgroundColor: '#35CEB3', borderColor: '#35CEB3' }}> Add a Product </Button>
        </Link>
      </Container>
      <Container>
        <div style={{ color: 'white', marginTop: '30px' }}>
          <h1 style={{ fontSize: '30px' }}> Manage Products </h1>
        </div>
      </Container>
      <Container>
        <h1> My UID Products displayed here </h1>
        <div>
          {uidproducts?.map((uidProduct) => <MyProductCards key={uidProduct.firebaseKey} uidproductObj={uidProduct} onUpdate={displayUIDProducts} />)}
        </div>
      </Container>
    </>
  );
}
