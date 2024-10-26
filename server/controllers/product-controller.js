const Product = require("../models/product-model.js"); // Import the Product model
const Review = require("../models/review-model.js"); // Import the Review model

// Controller function to get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().select('name shortDescription price images'); // Fetch products with selected fields
    res.json(products); // Respond with the products in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors by responding with a 500 status and error message
  }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews'); // Fetch the product by ID and populate its reviews
    if (!product) return res.status(404).json({ message: 'Product not found' }); // If product not found, respond with a 404 status and message
    res.json(product); // Respond with the product in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors by responding with a 500 status and error message
  }
};

// Controller function to add a review to a product
const getReview = async (req, res) => {
  try {
    const { username, rating, comment } = req.body; // Destructure the review data from the request body
    const product = await Product.findById(req.params.id); // Fetch the product by ID
    if (!product) return res.status(404).json({ message: 'Product not found' }); // If product not found, respond with a 404 status and message
    const review = new Review({
      product: product._id,
      username,
      rating,
      comment
    });
    await review.save(); // Save the review to the database
    product.reviews.push(review); // Add the review to the product's reviews array
    await product.save(); // Save the updated product to the database
    res.status(201).json(review); // Respond with the created review and a 201 status
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle errors by responding with a 400 status and error message
  }
};

module.exports = { getProducts, getProductById, getReview }; // Export the controller functions
