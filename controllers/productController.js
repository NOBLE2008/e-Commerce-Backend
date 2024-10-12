import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { readFile } from "fs/promises";
import Products from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "../data/dummyProducts.json");
  const jsonData = await readFile(filePath, "utf-8");
  const newProduct = await Products.create(JSON.parse(jsonData));
  res.status(201).json(newProduct);
};

export const getProducts = async () => {};
