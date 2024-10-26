import React, { useState } from 'react'; // Import React and useState hook
import { Form, Button, ListGroup, Alert } from 'react-bootstrap'; // Import Bootstrap components
import axios from 'axios'; // Import axios for making HTTP requests
import './ReviewsSection.css'; // Import the CSS file

function ReviewsSection({ productId, reviews }) {
  const [username, setUsername] = useState(''); // State for username input
  const [rating, setRating] = useState(5); // State for rating input
  const [comment, setComment] = useState(''); // State for comment input
  const [localReviews, setLocalReviews] = useState(reviews || []); // State for storing reviews
  const [message, setMessage] = useState(null); // State for displaying success/error messages

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    axios.post(`http://localhost:5000/api/products/${productId}/reviews`, { // Make POST request to add review
      username,
      rating,
      comment
    })
    .then(response => {
      setLocalReviews([...localReviews, response.data]); // Update local reviews with the new review
      setUsername(''); // Clear the username input
      setRating(5); // Reset the rating input to default
      setComment(''); // Clear the comment input
      setMessage({ type: 'success', text: 'Review added successfully!' }); // Set success message
    })
    .catch(error => {
      console.error('Error adding review:', error); // Log any error
      setMessage({ type: 'danger', text: 'Failed to add review.' }); // Set error message
    });
  };

  return (
    <div>
      <h3>Reviews</h3>
      {message && <Alert variant={message.type}>{message.text}</Alert>} {/* Display success/error messages */}
      <ListGroup className="mb-4">
        {localReviews.map(review => (
          <ListGroup.Item key={review._id}>
            <strong>{review.username}</strong> - {review.rating} / 5
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>Add a Review</h4>
      <Form onSubmit={handleSubmit}> {/* Form to submit a new review */}
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[5, 4, 3, 2, 1].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">Submit Review</Button>
      </Form>
    </div>
  );
}

export default ReviewsSection; // Export the ReviewsSection component
