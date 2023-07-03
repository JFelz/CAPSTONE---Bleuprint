/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Navbar, Image,
} from 'react-bootstrap';

function NoAuth() {
  return (
    <>
      <div className="NoAuthNavBar">
        <Navbar.Brand style={{ color: '#35CEB3', fontFamily: 'Poppins', fontWeight: 'Bold' }}>
          <Image
            src="/captitle.png"
            width={135}
            height={40}
            alt="Bleuprint"
          />
        </Navbar.Brand>
      </div>
    </>
  );
}

export default NoAuth;
