import { Router } from "express";
import { createProduct } from "../controllers/productController.js";

const router = Router();

router.route("/").get(createProduct);

export default router;
