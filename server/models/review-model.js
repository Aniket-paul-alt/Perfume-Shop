const mongoose = require('mongoose'); // Import mongoose library

// Define the schema for reviews
const ReviewSchema = new mongoose.Schema(
    {
        product: { // Reference to the associated product
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        username: { // Username of the reviewer
            type: String,
            required: true
        },
        rating: { // Rating given by the reviewer
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: { // Optional comment by the reviewer
            type: String
        }
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt timestamps
    }
);

// Define the model or the collection name
const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review; // Export the Review model
