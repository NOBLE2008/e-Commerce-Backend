import express from "express";
import productRouter from "./routes/productRoute.js";

const app = express();
app.use(express.json());

app.use("/products", productRouter);
export default app;
