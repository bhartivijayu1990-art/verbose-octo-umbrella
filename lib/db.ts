import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/Jacydodobot";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGO_URI);
  console.log("MongoDB Connected");
};
