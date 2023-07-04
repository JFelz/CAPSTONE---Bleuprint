import React from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteDigitalAssets } from '../api/digitalAssets';

export default function MyProductCards({ uidproductObj }) {
  const deleteThisUIDproductCard = () => {
    if (window.confirm(`Delete ${uidproductObj.name}?`)) {
      deleteDigitalAssets(uidproductObj.firebaseKey);
    }
  };
  return (
    <>
      <Card style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100px',
        width: '1000px',
        margin: '10px',
        cursor: 'pointer',
        objectFit: 'cover',
      }}
      >
        <Card.Img
          variant="top"
          src={uidproductObj.imageUrl}
          alt="Image Failure"
          style={{
            justifyContent: 'start',
            alignItems: 'center',
            height: '95px',
            width: '120px',
          }}
        />
        <Card.Body style={{ marginTop: '5px' }}>
          <Card.Subtitle style={{ fontSize: '12px', fontFamily: 'Poppins', marginBottom: '2px' }}>{uidproductObj.category}</Card.Subtitle>
          <Card.Title style={{
            minHeight: '15px',
            fontFamily: 'Poppins',
            fontWeight: 'Bold',
            fontSize: '16px',
          }}
          >{uidproductObj.name}
          </Card.Title>
          <Card.Subtitle>by { uidproductObj.userName } </Card.Subtitle>

        </Card.Body>

        <Card.Body style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          width: '15px',
        }}
        >
          <Card.Body style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
            alignItems: 'end',
          }}
          >
            <Card.Text style={{ marginBottom: '5px', width: '60px', fontFamily: 'Poppins' }}><b>Price</b></Card.Text>
            <Card.Text style={{ width: '60px' }}>${uidproductObj.price}</Card.Text>
          </Card.Body>
        </Card.Body>

        <Card.Footer className="text-muted" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href={`/Manageproducts/edit/${uidproductObj.firebaseKey}`} passHref>
            <Button variant="info" style={{ background: '#35CEB3', color: 'white', border: 'black' }}>EDIT</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="danger" style={{ background: 'black', color: 'white', border: 'black' }} onClick={deleteThisUIDproductCard} className="m-2">
              DELETE
            </Button>
          </Link>
        </Card.Footer>

      </Card>
    </>
  );
}

MyProductCards.propTypes = {
  uidproductObj: PropTypes.shape({
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

/* This is where I create the My Product Cards and then I will be able to create an API call in the MyProducts page that will get all the OBJ's that has the user UID and display it on the page in the form of the MyProductCards. */
