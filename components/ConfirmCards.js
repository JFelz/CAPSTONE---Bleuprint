import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ConfirmProducts({ expense }) {
  return (
    <>
      <Card style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '105px',
        width: '100%',
        color: 'white',
        fontSize: '13px',
        cursor: 'pointer',
        borderTopWidth: '5px',
        borderTopColor: '#383838',
        boxSizing: 'content-box',
        backgroundColor: '#18181C',
        borderRadius: '0px',
      }}
      >
        <Card.Img
          variant="top"
          src={expense?.imageUrl}
          alt="Image Failure"
          style={{
            justifyContent: 'start',
            alignItems: 'center',
            height: '95px',
            width: '120px',
            objectFit: 'cover',
          }}
        />
        <Card.Body style={{ marginTop: '5px' }}>
          <Card.Subtitle style={{ fontSize: '12px', fontFamily: 'Poppins', marginBottom: '2px' }}>{expense.category}</Card.Subtitle>
          <Card.Title
            style={{
              minHeight: '15px',
              fontFamily: 'Poppins',
              fontWeight: 'Bold',
              fontSize: '16px',
            }}
          >{expense.name}
          </Card.Title>
          <Card.Subtitle>by { expense.userName } </Card.Subtitle>

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
            justifyContent: 'center',
          }}
          >
            <Card.Text style={{ marginBottom: '5px', width: '50px', fontFamily: 'Poppins' }}><b>Price</b></Card.Text>
            <Card.Text style={{ width: '80px', color: '#7BD45C' }}>USD ${expense.price}</Card.Text>
          </Card.Body>
        </Card.Body>
        <Card.Footer
          className="text-muted"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '5px',
            paddingLeft: '1px',
          }}
        >
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
            INVOICE
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

ConfirmProducts.propTypes = {
  expense: PropTypes.shape({
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
