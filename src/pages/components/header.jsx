import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header=()=>{
  return (
    <Navbar fixed='top' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">K Local</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-9 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About KLocal</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Popular Places</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
            
          </Nav>
          
            <Button variant="outline-success">Add Listing</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

