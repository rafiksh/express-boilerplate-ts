import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_URL, MONGO_PORT, MONGO_DB } = process.env;

mongoose
  .connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => {
    console.log(`Connected to ${MONGO_URL}:${MONGO_PORT} DB:${MONGO_DB}`);
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
  });
