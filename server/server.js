require("dotenv").config(); // Load environment variables from a .env file

const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application instance

const cors = require('cors'); // Import the CORS middleware for handling Cross-Origin Resource Sharing
const router = require("./routers/product-router.js"); // Import the product router
const connectDB = require("./utils/db.js"); // Import the database connection function

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cors()); // Middleware to enable CORS

app.use("/api/products", router); // Use the product router for API routes under /api/products

app.get("/", (req, res) => { // Define a route for the root URL
  res.status(200).send("Welcome"); // Send a welcome message
});

const PORT = 5000; // Define the port number

connectDB().then(() => { // Connect to the database and then start the server
  app.listen(PORT, () => { // Start the Express server
    console.log(`Server is running at http://localhost:${PORT}`); // Log a message when the server starts
  });
});
