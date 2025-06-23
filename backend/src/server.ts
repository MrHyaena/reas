import dotenv from "dotenv";
import app from "./app.js";
import mongoose, { mongo } from "mongoose";

dotenv.config();

//Connecting to database

const mongoUri = process.env.MONGO_URI;
if (mongoUri != undefined) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      //Starting listening to server after connecting to db
      app.listen(process.env.PORT, () =>
        console.log(`listening to port ${process.env.PORT}`)
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
