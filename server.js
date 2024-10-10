import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import app from "./index.js";

dotenv.config();

dbConnect(
  `mongodb+srv://noblebj2008:${process.env.MONGODB_PASSWORD}@cluster0.1zq1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
