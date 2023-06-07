import React from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteDigitalAssets, getUserDigitalAssets } from '../api/digitalAssets';

export default function MyProductCards({ uidproductObj, onUpdate }) {
  const deleteThisUIDproductCard = () => {
    if (window.confirm(`Delete ${uidproductObj.name}?`)) {
      deleteDigitalAssets(uidproductObj.firebaseKey).then(() => onUpdate(getUserDigitalAssets));
    }
  };
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
          src={uidproductObj.imageUrl}
          alt="Image Failure"
          style={{
            height: '200px',
            imageSize: 'cover',
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

        <Card.Footer className="text-muted">
          <Card.Text style={{ marginLeft: '85px' }}>${uidproductObj.price}</Card.Text>
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
  onUpdate: PropTypes.func.isRequired,
};

/* This is where I create the My Product Cards and then I will be able to create an API call in the MyProducts page that will get all the OBJ's that has the user UID and display it on the page in the form of the MyProductCards. */
