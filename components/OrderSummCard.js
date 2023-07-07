import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function OrderSummCard({ orderCard }) {
  return (
    <>
      <Card style={{
        display: 'flex',
        flexDirection: 'row',
        height: '85px',
        width: '99.8%',
        color: 'white',
        fontSize: '12px',
        cursor: 'pointer',
        borderTopWidth: '5px',
        borderRightWidth: '0px',
        borderLeftWidth: '0px',
        borderBottomWidth: '0px',
        borderTopColor: '#383838',
        boxSizing: 'content-box',
        backgroundColor: '#18181C',
        borderRadius: '0px',
      }}
      >
        <Card.Body style={{ marginTop: '5px' }}>
          <Card.Title
            style={{
              minHeight: '15px',
              fontFamily: 'Poppins',
              fontWeight: 'Bold',
              fontSize: '16px',
            }}
          >{orderCard.name}
          </Card.Title>
          <Card.Subtitle style={{
            fontFamily: 'Poppins',
            fontWeight: 'normal',
            color: '#979797',
            fontSize: '13px',
          }}
          > Standard License
          </Card.Subtitle>

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
            <Card.Text style={{ marginBottom: '5px', width: '50px', fontFamily: 'Poppins' }}><b>Price</b></Card.Text>
            <Card.Text style={{ width: '70px', color: '#7BD45C' }}>USD ${orderCard.price}</Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  );
}

OrderSummCard.propTypes = {
  orderCard: PropTypes.shape({
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
