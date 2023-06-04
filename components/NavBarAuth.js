/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
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
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/financeoverview">
              <Nav.Link>Analytics</Nav.Link>
            </Link>
            <Link passHref href="/Manageproducts">
              <Nav.Link>My Products</Nav.Link>
            </Link>
            <Container style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '30em',
            }}
            />

            <Container style={{
              display: 'flex',
              justifyContent: 'end',
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
