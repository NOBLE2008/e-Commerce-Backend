import Products from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const { name, description, category, brand, price, coupons, currency } =
    req.body;
  const newProduct = await Products.create({
    name,
    description,
    category,
    brand,
    price,
    coupons,
    currency,
  });
  res.status(201).json(newProduct);
};

export const getProducts = async () => {};
