import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
        className="Navbar sticky-nav md"
        sticky="top"
      >
        <Container className="container-nav">
          <Navbar.Brand href="#">
            THE <span className="text-danger span-movies">MOVIES</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#trending">TRENDING</Nav.Link>
              <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
              <Nav.Link href="#romantic">ROMANTIC</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
