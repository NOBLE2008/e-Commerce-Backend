import Products from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    category,
    brand,
    price,
    coupons,
    reviews,
    features,
    currency,
    quantity,
  } = req.body;
  const newProduct = await Products.create({
    name,
    description,
    category,
    brand,
    price,
    features,
    coupons,
    currency,
    quantity,
    images: [],
    reviews,
    createdAt: new Date(),
    updatedAt: new Date(),
    // ...jsonData.products[0], // If you want to load data from a JSON file
  });
  const modifiedData = await Products.findById(newProduct._id);
  res.status(201).json(modifiedData);
};

export const getProducts = async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).json(product);
};
