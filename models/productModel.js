import mongoose from "mongoose";

//Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    max: [50, "Product name cannot exceed 50 characters"],
  },
  description: {
    type: String,
    max: [300, "Product description cannot exceed 200 characters"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Categories",
  },
  brand: {
    type: mongoose.Schema.ObjectId,
    ref: "Brands",
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Product price must be greater than or equal to 0"],
  },
  coupons: {
    type: mongoose.Schema.ObjectId,
    ref: "Coupons",
    select: false,
  },
  currency: {
    type: String,
    default: "usd",
  },
});

export default mongoose.model("Products", productSchema);
