const express = require("express"); // Import the Express framework
const { getProducts, getProductById, getReview } = require("../controllers/product-controller"); // Import controller functions for handling product-related requests

const router = express.Router(); // Create a new router object from Express

router.get("/", getProducts); // Define a route to get all products, handled by the getProducts function
router.get("/:id", getProductById); // Define a route to get a product by ID, handled by the getProductById function
router.post("/:id/reviews", getReview); // Define a route to post a review for a product by ID, handled by the getReview function

module.exports = router; // Export the router object for use in other parts of the application