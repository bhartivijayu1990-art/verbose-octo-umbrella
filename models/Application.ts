import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  name: String,
  age: String,
  phone: String,
  city: String,
  experience: String,
  message: String,
});

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
