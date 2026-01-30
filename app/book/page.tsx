"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Book() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  // 🔐 Membership check
  useEffect(() => {
    const isMember = localStorage.getItem("member");
    if (!isMember) {
      router.push("/membership");
    }
  }, [router]);

  const submit = async () => {

    if (!date || !time || !service) {
      alert("Please fill all fields");
      return;
    }
  
    await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        time,
        service,
      }),
    });
  
    alert("Booking confirmed!");
  
  };
  

  return (
    <main className="py-20 bg-[#f6f1eb]">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-md">

        <h1 className="text-3xl font-serif mb-8 text-center">
          Book Appointment
        </h1>

        <div className="space-y-5">

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="w-full border p-3 rounded-lg"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option>Swedish Massage</option>
            <option>Deep Tissue Therapy</option>
            <option>Aromatherapy</option>
          </select>

          <select
            className="w-full border p-3 rounded-lg"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select Time</option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>4:00 PM</option>
          </select>

          <button
  onClick={() => {

    const msg = encodeURIComponent(
      `Hi, I want to book a massage.\nService: ${service}\nDate: ${date}\nTime: ${time}`
    );
    <a
  href="https://t.me/midnightmuse12am"
  target="_blank"
>
Pay on Telegram
</a>
    window.location.href = 
      `https://t.me/midnightmuse12am?text=${msg}`;

  }}
  className="w-full bg-[#8b6f4e] text-white py-3 rounded-full"
>
  Confirm Booking
</button>




        </div>
      </div>
    </main>
  );
}
