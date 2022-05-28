import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
