import React from 'react'; // Import React
import { Card } from 'react-bootstrap'; // Import Bootstrap's Card component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for navigation
import './ProductCard.css'; // Import the custom CSS for ProductCard

function ProductCard({ product }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate(`/products/${product._id}`); // Navigate to the product detail page using the product ID
  };

  return (
    <div className="product-card-container"> {/* Container for product card */}
      <Card className="product-card" onClick={handleClick}> {/* Card component with click handler */}
        <Card.Img variant="top" src={product.images[0]} alt={product.name} /> {/* Product image */}
        <Card.Body> {/* Card body containing product details */}
          <Card.Title>{product.name}</Card.Title> {/* Product name */}
          <Card.Text>{product.shortDescription}</Card.Text> {/* Short description of product */}
          <Card.Text><strong>${product.price.toFixed(2)}</strong></Card.Text> {/* Product price */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard; // Export the ProductCard component
