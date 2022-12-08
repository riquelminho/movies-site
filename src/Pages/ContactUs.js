import { Button, Container, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="contact-page">
   <h4 >Contact us today, and get reply with in 24 hours!</h4>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Your email adress" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your text here"
          />
        </Form.Group>
      </Form>
      <div className="d-grid gap-1">
        <Button variant="primary" size="lg">
          Submit
          </Button>
       
      </div>
    </Container>
  );
};

export default ContactUs;
