
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { MdAlternateEmail} from "react-icons/md";
import { FaFacebook, FaInstagram,FaTiktok, FaYoutube,
          FaTwitter,FaLocationArrow, FaPhoneAlt} from 'react-icons/fa';




const Footer = () => {
  return (
    <>
    <Container  className="social-bar">
    <Row>
      <Col className="social-icons" >
      <ul>
      <li> <a href="https://www.facebook.com"><FaFacebook/></a></li>
      <li> <a href="https://www.twitter.com"><FaTwitter/></a></li>
      <li> <a href="https://www.instagram.com"><FaInstagram/></a></li>
      <li> <a href="https://www.tiktok.com"><FaTiktok/></a></li>
      <li> <a href="https://www.youtube.com"><FaYoutube/></a></li>
      </ul>
      </Col>
    </Row>
  </Container>

    <Container fluid className="footer ">
    <Row>
      <Col  className="list-menu" >
      <ul>
      <li>  <h5>Menu</h5></li>
      <li> <a href="/">About us</a></li>
      <li> <a href="/">Suport</a></li>
      <li> <a href="/">Contact Us</a></li>
      <li> <a href="/">Blog</a></li>
      </ul>
      </Col>
      <Col  className="list-contact">
      <ul>
      <li> <h5>Contact</h5></li>
      <li> <FaLocationArrow/> Indiana, 500 Main St,Evanston</li>
      <li> <FaPhoneAlt/>  889-5959595</li>
      <li> <MdAlternateEmail/> support@moviz.com</li>
      </ul>
      </Col>
      <Col  className="newsletter">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:"350px"}}>
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width:"350px"}}>
      join our newsletter
      </Button>
    </Form>
      </Col> 
    </Row>
  </Container>
  </>
  );
}

export default Footer;
