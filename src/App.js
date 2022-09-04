import './App.css';
import { Nav, Button, Navbar, Card } from 'react-bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import TopBar from './TopBar';

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button className='signup' variant="success">Sign Up</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

const MainCard = () => {
  return (
    <Card className="mainTop bg-dark text-white">
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          <h2>Delivery <br /> Your favorite stores at your door</h2> <p>Get your groceries while saving time</p>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

const LayoutSection = () => {
  return (
    <div>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
          <Row>
            <Col xs=".5" >
              <Image src="[IMG SRC]" roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row >
            <Col xs=".5">
              <Image src="[IMG SRC]" roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row >
            <Col xs=".5" >
              <Image src="[IMG SRC]" roundedCircle />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>

    </div>


  )
}




function App() {
  return (
    <div className="App">
      <TopBar />
      <MainCard />
      <LayoutSection />
    </div>
  );
}

export default App;
