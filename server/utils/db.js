const mongoose = require("mongoose"); // Import the mongoose library for MongoDB

const URI = process.env.MONGODB_URI; // Get the MongoDB URI from environment variables

const connectDB = async () => { // Define an asynchronous function to connect to the database
  try {
    await mongoose.connect(URI); // Attempt to connect to the MongoDB database using the URI
    console.log("DB Connected Successfully"); // Log success message if connection is successful
  } catch (error) { // Catch any errors that occur during connection
    console.log("DB Connection Failed"); // Log failure message if connection fails
    process.exit(0); // Exit the process with a status code of 0 (indicating failure)
  }
};

module.exports = connectDB; // Export the connectDB function for use in other parts of the application
