import { Router } from "express";
import { addProduct } from "../controllers/productController.js";

const router = Router();

router.route("/").get(addProduct);

export default router;
