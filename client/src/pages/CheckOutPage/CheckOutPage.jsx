import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/Navbar/Navbar';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/Footer';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [orderStatus, setOrderStatus] = useState(null); // State to manage the order status
  const [orderMessage, setOrderMessage] = useState(''); // State to manage the order message

  const navigation = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zip || !formData.cardNumber || !formData.expiry || !formData.cvv) {
        toast.error("Each and every field must be filled before placing order!!")
        return
    }else{
        console.log("submitted");
    }


    // Simulate order processing with a random outcome
    const success = Math.random() > 0.5;
    console.log(success);
    
    if (success) {
      setOrderStatus('success');
      setOrderMessage('Your order has been placed successfully!');
      toast.success("Your order has been placed successfully!")
      setTimeout(() => {
        navigation("/")
      }, 3005);
    } else {
      setOrderStatus('failure');
      setOrderMessage('There was an issue placing your order. Please try again.');
      toast.error("There was an issue placing your order. Please try again.")
      setTimeout(() => {
        navigation(-1)
      }, 3005);
    }

    setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      })
  };

  return (
    <>

    <NavigationBar />
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">Checkout</h2>
          {orderStatus && (
            <Alert variant={orderStatus === 'success' ? 'success' : 'danger'}>
              {orderMessage}
            </Alert>
          )}
          <Form >
            <Card className="mb-4">
              <Card.Header>Billing Information</Card.Header>
              <Card.Body>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAddress" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCity" className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formState" className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formZip" className="mb-3">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>Payment Information</Card.Header>
              <Card.Body>
                <Form.Group controlId="formCardNumber" className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formExpiry" className="mb-3">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formCvv" className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Col>
        <Col md={4}>
          <h4 className="mb-3">Order Summary</h4>
          <Card>
            <Card.Body>
              <p>Items: $100.00</p>
              <p>Shipping: $10.00</p>
              <p>Tax: $8.00</p>
              <hr />
              <h5>Total: $118.00</h5>
            </Card.Body>
          </Card>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Place Order
            </Button>
            <Button variant="danger" type="submit" onClick={()=> navigation(-1)}>
              Go Back
            </Button>
        </Col>
      </Row>
    </Container>
    <Footer /> {/* Footer component */}
    </>
  );
};

export default CheckoutPage;
