import mongoose from "mongoose";

//Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [200, "Product name cannot exceed 50 characters"],
  },
  description: {
    type: String,
    maxLength: [1200, "Product description cannot exceed 1200 characters"],
  },
  quantity: {
    type: Number,
    default: 1,
    min: [1, "Product quantity must be greater than or equal to 1"],
  },
  reviews: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews",
      },
    ],
    default: [],
  },
  images: {
    type: [
      {
        type: String,
        maxLength: [200, "Image URL cannot exceed 200 characters"],
      },
    ],
    default: ["https://via.placeholder.com/150"],
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
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Coupons",
      },
    ],
    select: false,
  },
  features: {
    type: [
      {
        name: String,
        image: String,
      },
    ],
    default: [],
  },
});

productSchema.pre("save", function (next) {
  if (!this.images.length) {
    this.images = ["https://via.placeholder.com/150"];
  }
  next();
});

export default mongoose.model("Products", productSchema);
