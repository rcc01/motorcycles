import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const MenuNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Nav className="me-auto">
          <Link to="/new" className="nav-link">
            Request
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
