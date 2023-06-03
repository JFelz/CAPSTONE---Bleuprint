/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import BleuprintLogo from '../public/CapTitle.png';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#242424" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand style={{ color: '#35CEB3', fontFamily: 'Poppins', fontWeight: 'Bold' }}><Image src={BleuprintLogo} alt="Title Error" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link>Analytics</Nav.Link>
            </Link>
            <Link passHref href="/">
              <Nav.Link>My Products</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
