/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarCustomer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#242424" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand style={{ color: '#35CEB3', fontFamily: 'Poppins', fontWeight: 'Bold' }}>
            <Image
              src="/captitle.png"
              width={135}
              height={40}
              alt="Bleuprint"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Store</Nav.Link>
            </Link>
            <Link passHref href="/MyLibrary">
              <Nav.Link>My Library</Nav.Link>
            </Link>
            <Link passHref href="/MyCart">
              <Nav.Link>My Cart</Nav.Link>
            </Link>
            <Container style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '30em',
            }}
            />
            <Container style={{
              display: 'flex',
              width: 'auto',
            }}
            >
              <Link passHref href="/">
                <Button style={{ backgroundColor: '#2EB79E', borderWidth: '0px' }}>Become a Seller</Button>
              </Link>
            </Container>
            <Container style={{
              display: 'flex',
              justifyContent: 'center',
              width: 'auto',
            }}
            >
              <Button variant="danger" onClick={signOut}>Sign Out</Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
