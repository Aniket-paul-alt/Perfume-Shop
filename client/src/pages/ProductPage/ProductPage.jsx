import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import { useNavigate, useParams } from 'react-router-dom'; // Import hooks from react-router-dom for navigation and getting URL parameters
import NavigationBar from '../../components/Navbar/Navbar'; // Import NavigationBar component
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Import Bootstrap components
import axios from 'axios'; // Import axios for making HTTP requests
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection'; // Import ReviewsSection component
import ImageGallery from '../../components/ImageGallery/ImageGallery'; // Import ImageGallery component
import './ProductPage.css'; // Import the new CSS file for styling
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Import Bootstrap Icons
import ShareButton from '../../components/ShareButton/ShareButton'; // Import ShareButton component
import Footer from '../../components/Footer/Footer'; // Import Footer component

function ProductPage() {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null); // State to store product details
  const [selectedSize, setSelectedSize] = useState(''); // State to store selected size
  const navigation = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch product details when component mounts
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data); // Set the product details in state
        if (response.data.availableSizes.length > 0) {
          setSelectedSize(response.data.availableSizes[0]); // Set the initial selected size
        }
      })
      .catch(error => console.error('Error fetching product:', error)); // Log any errors
  }, [id]); // Re-run the effect when the ID changes

  if (!product) return <div>Loading...</div>; // Show loading message if product details are not yet loaded

  return (
    <>
      <NavigationBar /> {/* Navigation bar component */}
      <Container className="product-page my-5"> {/* Apply product-page class */}
        <Row>
          <Col md={6}>
            <ImageGallery images={product.images} /> {/* Image gallery component */}
          </Col>
          <Col md={6}>
            <h2 className="product-title">{product.name}</h2> {/* Use the new class */}
            <p className="product-description">{product.fullDescription}</p> {/* Use the new class */}
            <h4 className="product-price">${product.price.toFixed(2)}</h4> {/* Use the new class */}
            <Form.Group className="mb-3">
              <Form.Label className="size-label">Available Sizes</Form.Label> {/* Use the new class */}
              <Form.Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {product.availableSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="button-container"> {/* Button container for alignment */}
              <Button variant="primary">Add to Cart</Button>
              <Button onClick={() => navigation(-1)} variant="warning">Back</Button>
              <ShareButton product={product} className="share-btn" /> {/* Added class for styling */}
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="reviews-section"> {/* Wrap reviews section */}
              <ReviewsSection productId={product._id} reviews={product.reviews} /> {/* Reviews section component */}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Footer component */}
    </>
  );
}

export default ProductPage; // Export the ProductPage component
