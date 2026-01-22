import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  date: String,
  service: String,
  time: String,
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
