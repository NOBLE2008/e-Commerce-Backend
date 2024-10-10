import mongoose from "mongoose";

export default async function dbConnect(connectionString) {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connection Successfull");
    })
    .catch((err) => {
      console.log(err);
      console.log(connectionString);
    });
}
