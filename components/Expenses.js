import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function Expenses({ expense }) {
  return (
    (expense.id === 1)
      ? (
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
            />
            <Card.Subtitle style={{
              fontFamily: 'Poppins',
              fontWeight: 'normal',
              color: '#979797',
              fontSize: '13px',
            }}
            > {expense.name}
            </Card.Subtitle>

          </Card.Body>

          <Card.Body style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            width: '20px',
          }}
          >
            <Card.Body style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px',
              alignItems: 'end',
              width: '0px',
            }}
            >
              <Card.Text style={{
                width: '50px',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                {expense.amount}%
              </Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>
      )
      : (
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
            />
            <Card.Subtitle style={{
              fontFamily: 'Poppins',
              fontWeight: 'normal',
              color: '#979797',
              fontSize: '13px',
            }}
            > {expense.name}
            </Card.Subtitle>

          </Card.Body>

          <Card.Body style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            width: '20px',
          }}
          >
            <Card.Body style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px',
              alignItems: 'end',
              width: '0px',
            }}
            >
              <Card.Text style={{ width: '50px', color: 'white' }}>USD ${expense.amount}</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>
      )
  );
}

Expenses.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    amount: PropTypes.number,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
