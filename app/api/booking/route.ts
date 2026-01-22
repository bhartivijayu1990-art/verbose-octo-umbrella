import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/innerbloom";

const BookingSchema = new mongoose.Schema({
  date: String,
  service: String,
  time: String,
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URL);
  }
}

/* SAVE BOOKING */
export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  await Booking.create(body);

  return NextResponse.json({ success: true });
}

/* FETCH BOOKINGS */
export async function GET() {
  await connectDB();
  const data = await Booking.find().sort({ _id: -1 });
  return NextResponse.json(data);
}
