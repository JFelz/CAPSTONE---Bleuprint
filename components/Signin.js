import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button
        type="button"
        size="lg"
        className="copy-btn"
        toggleBool={toggle}
        onClick={() => {
          setToggle(true);
          signIn();
        }}
      >
        Sign In
      </Button>

      <Button
        type="button"
        size="lg"
        className="copy-btn"
        toggleBool={toggle}
        onClick={() => {
          signIn();
          setToggle(false);
        }}
      >
        Sign In as Business
      </Button>
      {/* <Button type="button" size="lg" className="copy-btn" onClick={signInBusiness}>
         Business Login
      </Button> */}
    </div>
  );
}

export default Signin;
