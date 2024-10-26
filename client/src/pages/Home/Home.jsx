// src/pages/Home.js
import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import NavigationBar from '../../components/Navbar/Navbar'; // Import the Navbar component
import Banner from '../../components/Banner/Banner'; // Import the Banner component
import ProductCard from '../../components/ProductCard/ProductCard'; // Import the ProductCard component
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import axios from 'axios'; // Import axios for making HTTP requests
import './Home.css'; // Import the custom CSS for Home page
import Footer from '../../components/Footer/Footer'; // Import the Footer component

function Home() {
  const [products, setProducts] = useState([]); // State to store products

  useEffect(() => { // Fetch products when the component mounts
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data)) // Set the products state with the fetched data
      .catch(error => console.error('Error fetching products:', error)); // Log any errors
  }, []);

  return (
    <>
      <NavigationBar /> {/* Navigation bar component */}
      <Banner /> {/* Banner component */}
      <Container id="products" className="my-5">
        <h2 className="text-center mb-4">Our Products</h2> {/* Section title */}
        <Row>
          {products.map(product => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4"> {/* Responsive columns */}
              <div className="product-card">
                <ProductCard product={product} /> {/* Product card component */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer /> {/* Footer component */}
    </>
  );
}

export default Home; // Export the Home component
