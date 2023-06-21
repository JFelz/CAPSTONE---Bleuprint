import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export default function LibraryCard({ productObj }) {
  return (
    <>
      <Card style={{
        height: '400px',
        width: '250px',
        margin: '10px',
        cursor: 'pointer',
      }}
      >
        <Card.Img
          variant="top"
          src={productObj?.imageUrl}
          alt="Image Failure"
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <Card.Body style={{ marginTop: '5px' }}>
          <Card.Subtitle style={{ fontSize: '12px', fontFamily: 'Poppins', marginBottom: '2px' }}>{productObj?.category}</Card.Subtitle>
          <Card.Title style={{
            minHeight: '15px',
            fontFamily: 'Poppins',
            fontWeight: 'Bold',
            fontSize: '16px',
          }}
          >{productObj?.name}
          </Card.Title>
          <Card.Subtitle>by { productObj?.userName } </Card.Subtitle>
        </Card.Body>
        <Button
          variant="danger"
          style={{
            background: 'black',
            color: 'white',
            border: 'black',
            height: '50px',
          }}
          className="m-2"
        >
          DOWNLOAD
        </Button>
      </Card>
    </>
  );
}

LibraryCard.propTypes = {
  productObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    category: PropTypes.string,
    uid: PropTypes.string,
    userName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
