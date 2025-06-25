import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config();

//URI for connecting to database
const mongoUri = process.env.MONGO_URI;

//Server starting process
if (mongoUri != undefined) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log(`connection to MongoDB successful`);

      //Starting listening to server after connecting to db
      app.listen(process.env.PORT, () =>
        console.log(`listening to port ${process.env.PORT}`)
      );
    })
    .catch((error) => {
      console.log(`connection to MongoDB failed`);
      console.log(error.message);
    });
}
