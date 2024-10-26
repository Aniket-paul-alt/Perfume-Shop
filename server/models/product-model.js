const mongoose = require('mongoose'); // Import mongoose

// Define the schema for products
const ProductSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    shortDescription: { 
        type: String, 
        required: true 
    },
    fullDescription: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    availableSizes: [ 
        { 
            type: String 
        }
    ],
    images: [ 
        { 
            type: String 
        }
    ],
    reviews: [ 
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Review' 
        }
    ]
});

// Define the model or the collection name
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product; // Export the Product model
