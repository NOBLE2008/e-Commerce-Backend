import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import app from "./index.js";

dotenv.config();

dbConnect(
  process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD
  ).replace("<username>", process.env.MONGODB_USERNAME)
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
