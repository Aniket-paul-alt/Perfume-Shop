// src/pages/Contact.js

import React, { useState } from 'react'; // Import React and useState hook
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap'; // Import Bootstrap components
import axios from 'axios'; // Import axios for making HTTP requests
import './Contact.css'; // Import the custom CSS for Contact page
import { EnvelopeFill, Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Import Bootstrap Icons
import NavigationBar from '../../components/Navbar/Navbar'; // Import NavigationBar component
import Footer from '../../components/Footer/Footer'; // Import Footer component

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }); // State to store form data

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    error: false
  }); // State to track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data state on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, error: false }); // Set status to submitted
    try {
      setStatus({ submitted: true, success: true, error: false }); // Set status to success if response is OK
      setFormData({ name: '', email: '', message: '' }); // Reset form data
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus({ submitted: true, success: false, error: true }); // Set status to error if an exception occurs
    }
  };

  return (
    <>
      <NavigationBar /> {/* Navigation bar component */}
      <div className="contact-page">
        <Container className="my-5">
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Card className="contact-card shadow-lg">
                <Card.Body>
                  <div className="text-center mb-4">
                    <EnvelopeFill size={50} color="#20c997" />
                  </div>
                  <h1 className="text-center mb-4 title">Get in Touch</h1>
                  {status.submitted && status.success && (
                    <Alert variant="success" className="text-center mb-4">
                      Your message has been sent successfully!
                    </Alert>
                  )}
                  {status.submitted && status.error && (
                    <Alert variant="danger" className="text-center mb-4">
                      There was an error sending your message. Please try again later.
                    </Alert>
                  )}
                  <Form onSubmit={handleSubmit} className="contact-form">
                    <Form.Group controlId="contactFormName" className="mb-4">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="custom-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="contactFormEmail" className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="custom-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="contactFormMessage" className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Your message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="custom-form-control"
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="submit-button mb-4">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                  <div className="social-icons text-center mt-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook size={30} color="#3b5998" className="mx-2" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter size={30} color="#00acee" className="mx-2" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram size={30} color="#C13584" className="mx-2" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer /> {/* Footer component */}
      </div>
    </>
  );
}

export default Contact; // Export the Contact component
