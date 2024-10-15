import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("error connecting database", err);
    });
};
