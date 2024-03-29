import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2023/09/18/13/12/camera-8260573_1280.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{borderRadius:"50%"}}
            />{' '}
            Clickoshot
          </Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero"><b>Home</b></Nav.Link>
            <Nav.Link href="#about"><b>About</b></Nav.Link>

            
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#clicks">
            <b>Pics Collection</b>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              <b>Contact</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;