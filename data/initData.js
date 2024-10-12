import dotenv from "dotenv";
import { readFile } from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dbConnect from "../config/dbConnect.js";
import Products from "../models/productModel.js";

dotenv.config();

dbConnect(
  process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD
  ).replace("<username>", process.env.MONGODB_USERNAME)
);

async function deleteAllProducts() {
  console.log("Deleting all products...");

  await Products.deleteMany({});
  console.log("All products deleted successfully!");
}

async function addDummyProducts() {
  console.log("Adding dummy products...");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "../data/dummyProducts.json");
  const jsonData = await readFile(filePath, "utf-8");

  await Products.create(JSON.parse(jsonData));
  console.log("Dummy products added successfully!");
}

deleteAllProducts();
const performActions = async () => {
    await deleteAllProducts();
    await addDummyProducts()
}

performActions()
