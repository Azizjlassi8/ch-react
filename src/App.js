import React from 'react';
import './App.css';
import { Navbar, NavDropdown, Nav, Form, Button, Container} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
    <div className="App">
      {/* nav bar section */}
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <h1>Welcome in our heavenly place</h1>
      { /* formulaire part*/}
      <form>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    E.MAIL:
    <input type="text" e-mail="adresse electronic" />
  </label>
  <br/>
  <input type="submit" value="Envoyer" />
</form>
      {/* carousel section */}
      <Carousel className='carous'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/c8/94/5a/c8945a3b2fc96dd036a066eb2304f9b3.jpg"
          alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>La maison d'hôtes COULEUR MEDITERRANEE, entièrement tournée vers la mer, est conçue en demi-niveaux permettant à chacun de s'isoler s'il le désire. Au rez-de-chaussée et au centre de la maison, une cour fermée de style arabe ou patio vous accueille. Vous pourrez siroter un thé, confortablement installé sur un divan, au doux murmure de la fontaine tellement rafraîchissante ou y prendre votre petit déjeuner, copieux, avec des produits faits maison et vous prélasser au soleil ou sous un parasol en y écoutant la mer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/e4/d9/c6/e4d9c6f5462291792e19e8e5930657ea.jpg"
          alt="Second slide"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Le Shangri-La Villingili Maldives : le luxe et l’expérience</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/ed/69/83/ed6983eed9be040334de2714fc7fd03c.jpg"
          alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     {/* footer  */}
     <footer>
        <div className='footer'>
        <h2>feel free to contact us for any further information</h2>
        <br/>
        <p>Phone Number: 0084524962258</p>
        <br/>
        <p>2023-2024 all right reserved</p>
        </div>


      </footer>

    </div>
  );
}

export default App;
