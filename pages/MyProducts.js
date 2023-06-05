import Link from 'next/link';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function ManageProducts() {
  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link href="/Manageproducts/new" passHref>
          <Button style={{ backgroundColor: '#35CEB3', borderColor: '#35CEB3' }}> Add a Product </Button>
        </Link>
      </Container>
      <Container>
        <div>
          <h1> hi </h1>
        </div>
      </Container>
    </>
  );
}
