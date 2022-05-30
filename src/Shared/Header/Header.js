import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarStyle" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/mH7N9Jc/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="React Bootstrap logo"
          />
          Great-Fruity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#inventory">Inventory</Nav.Link>
            <Nav.Link href="home#favorites">Favorites</Nav.Link>
            <Nav.Link href="home#contact">Contact us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/inventories">
              Inventories
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/add">
                  Add item
                </Nav.Link>
                <Nav.Link as={Link} to="/manage">
                  Manage items
                </Nav.Link>
                <Nav.Link as={Link} to="/myitems">
                  My items
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleLogOut}>Log out</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
