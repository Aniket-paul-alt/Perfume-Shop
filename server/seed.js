require("dotenv").config()
const Product = require("./models/product-model")
const connectDB = require("./utils/db")

const productJson = require("./utils/data.json")

const start = async () => {
    try {
        await connectDB()
        await Product.deleteMany()
        await Product.create(productJson)
        console.log("success");
    } catch (error) {
        console.error(error);
    }
}

start()