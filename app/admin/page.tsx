"use client";

import { useEffect, useState } from "react";

export default function Admin() {

  const [bookings, setBookings] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("/api/booking")
      .then(res => res.json())
      .then(data => setBookings(data));

    fetch("/api/apply")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* BOOKINGS */}
      <h2 className="text-xl font-semibold mb-4">Bookings</h2>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b:any, i) => (
        <div key={i} className="border p-4 mb-3 rounded">
          <p><b>Date:</b> {b.date}</p>
          <p><b>Service:</b> {b.service}</p>
          <p><b>Time:</b> {b.time}</p>
        </div>
      ))}

      <hr className="my-10" />

      {/* APPLICATIONS */}
      <h2 className="text-xl font-semibold mb-4">Applications</h2>

      {applications.length === 0 && <p>No applications yet</p>}

      {applications.map((a:any, i) => (
        <div key={i} className="border p-4 mb-3 rounded">
          <p><b>Name:</b> {a.name}</p>
          <p><b>Phone:</b> +91 {a.phone}</p>
          <p><b>City:</b> {a.city}</p>
        </div>
      ))}

    </main>
  );
}
