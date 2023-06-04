import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ productObj }) {
  return (
    <>
      <Link href={`/index/${productObj}`} passHref>
        <Card style={{
          height: '400px',
          width: '250px',
          margin: '10px',
          cursor: 'pointer',
        }}
        >
          <Card.Img variant="top" src={productObj.imageUrl} alt="Image Failure" style={{ height: '200px' }} />
          <Card.Body style={{ marginTop: '5px' }}>
            <Card.Subtitle style={{ fontSize: '12px', fontFamily: 'Poppins', marginBottom: '2px' }}>{productObj.category}</Card.Subtitle>
            <Card.Title style={{
              minHeight: '15px',
              fontFamily: 'Poppins',
              fontWeight: 'Bold',
              fontSize: '16px',
            }}
            >{productObj.name}
            </Card.Title>
            <Card.Subtitle>by {productObj.seller}</Card.Subtitle>

          </Card.Body>
          <Card.Footer className="text-muted">
            <Card.Text style={{ marginLeft: '85px' }}>${productObj.price}</Card.Text>
            {/* <Link href={`/Listings/edit/${productObj}`} passHref>
              <Button variant="info" style={{ background: '#35CEB3', color: 'white', border: 'black' }}>EDIT</Button>
            </Link>
            <Button variant="danger" style={{ background: 'black', color: 'white', border: 'black' }} onClick={onUpdate} className="m-2">
              DELETE
            </Button> */}
            {/* </Link>
            {/* <Link href="/ " passHref> */}
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
