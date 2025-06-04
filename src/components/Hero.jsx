import '../App.css'
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import person from '../images/image.png'
import logo from '../images/logo.png'
import gitlab from '../images/gitlab.png'
import slack from '../images/Slack_.png'
import netflix from '../images/net.jpg'


export default function HeroSection() {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-primary py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-white">
            <img src={logo} alt="Lookscout" height="24" className="me-2" />
           Lookscout
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-white">Home</Nav.Link>
              <Nav.Link href="#" className="text-white">Our Products</Nav.Link>
              <NavDropdown title="Resources" id="resources-dropdown" className="text-white">
                {/* <NavDropdown.Item href="#">Blog</NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#">Docs</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#" className="text-white">Contacts</Nav.Link>
              <Nav.Link href="#" className="text-white">Log in</Nav.Link>
              <Button variant="blue"  size="sm" className="btn ms-2 text-white fs-md fw-bold">Sign up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section text-white d-flex align-items-center">
        <Container>
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="fw-bold display-5">Your Supercharged<br />Design Workflow.</h1>
              <p className="text-light mt-3 mb-4">
                We’ve been told it is not possible to overachieve our customers’ expectations.
                We have not reinvented the wheel, we decided to build upon it.
              </p>
              <Button variant="" className="text-white fw-semibold ">
                Send Notification
              </Button>

              <div className="mt-5">
                <small className="text-light">Who supports us</small>
                <div className="d-flex gap-4 mt-2">
                  <img src={gitlab} alt="GitLab" height="24" />
                  <img src={slack} alt="Slack" height="24" />
                  <img src={netflix} alt="Netflix" height="24" />
                  {/* <img src='' alt="PayPal" height="24" /> */}
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-md-6 text-center">
              
                <img src={person} alt="Person" className='h-100%'/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
