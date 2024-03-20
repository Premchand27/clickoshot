import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

function BasicExample() {
  return (
    <div className='bg'>
    <section className='contact' id="contact">
        <h2>Contact Me</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Feedback</Form.Label>
        <Form.Control type="textarea" placeholder="Your Feedback" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </section> 
    </div>
  );
}

export default BasicExample;