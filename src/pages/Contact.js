import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Contact() {
  return (
   <>
   <div>
   <Header/>
   <div className="contact-us-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><strong>Phone:</strong> +94 762466803</p>
        <p><strong>Email:</strong> <a href="mailto:tharushikanavodi28@gmail.com">tharushikanavodi28@gmail.com</a></p>
        <p><strong>Address:</strong> Matara, Sri Lanka</p>
      </div>
      <Form className="contact-form">
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="yourname@example.com" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select defaultValue="Male">
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
        </Form.Group>

       

        <Button variant="custom" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
    <Footer/>
    </div>
   </>
  )
}
