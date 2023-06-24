import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteMyLibraryAssets } from '../api/digitalAssets';

export default function FinTechCard({ uidproductObj }) {
  const deleteThisOrderproductCard = () => {
    if (window.confirm(`Refund ${uidproductObj.name}?`)) {
      deleteMyLibraryAssets(uidproductObj.firebaseKey);
    }
  };
  return (
    <>
      <Card style={{
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        margin: '10px',
        cursor: 'pointer',
        objectFit: 'cover',
      }}
      >
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card.Title style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            minHeight: '15px',
            fontFamily: 'Poppins',
            fontWeight: 'Bold',
            fontSize: '13px',
            width: '100px',
          }}
          >{uidproductObj.name}
          </Card.Title>
        </Card.Body>

        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Card.Subtitle style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '15px',
            fontFamily: 'Poppins',
            fontSize: '13px',
            width: '100px',
          }}
          >
            { uidproductObj.customerName }
          </Card.Subtitle>
        </Card.Body>

        <Card.Body style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          width: '100px',
        }}
        >
          <Card.Body style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
            alignItems: 'end',
          }}
          >
            <Card.Text style={{ marginBottom: '5px', width: '50px', fontFamily: 'Poppins' }}><b>Price</b></Card.Text>
            <Card.Text style={{ width: '50px' }}>${uidproductObj.price}</Card.Text>
          </Card.Body>
        </Card.Body>

        <Card.Footer className="text-muted" style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="danger" style={{ background: 'black', color: 'white', border: 'black' }} onClick={deleteThisOrderproductCard} className="m-2">
            Refund
          </Button>
        </Card.Footer>

      </Card>
    </>
  );
}

FinTechCard.propTypes = {
  uidproductObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    category: PropTypes.string,
    uid: PropTypes.string,
    userName: PropTypes.string,
    customerName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

/* This is where I create the My Product Cards and then I will be able to create an API call in the MyProducts page that will get all the OBJ's that has the user UID and display it on the page in the form of the MyProductCards. */
