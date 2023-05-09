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
      <h1>Welcome in our shop </h1>
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
          src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
          alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Imaginée par Peter Moore, la Air Jordan 1 est le premier modèle signature du prodigieux Michael Jordan. Selon la légende orchestrée par Jordan Brand, le coloris OG Black/Red introduit en 1985 au prix de 65$ a suscité la polémique au sein de la NBA puisqu'il ne respectait pas le code vestimentaire de la ligue.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1652711257"
          alt="Second slide"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>La Air Jordan 4 se révèle toutefois plus légère et profilée. Parmi les détails de conception emblématiques, on retrouve le filet en maille sur les parties latérales et la languette, avec le système de support de laçage et les ailes emblématiques de la chaussure.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-11-retro-playoffs-2012_pqquyy.jpg"
          alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          Designed by Tinker Hatfield, the Jordan 11 was the first Air Jordan to feature patent leather and carbon fiber in addition to cordura nylon. The original Jordan 11 was released from 1995-1996 in both mid cut and low cut IE colorways
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     {/* footer  */}
     <footer>
        <div className='footer'>
        <h2>If you need anything make this shop your home</h2>
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
