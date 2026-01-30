"use client";

import { useState } from "react";
import TherapistCard from "@/components/TherapistCard";

export default function Therapists() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const therapists = [
    { name: "Aarav Sharma", role: "Deep Tissue Specialist", exp: "5 Years Experience" },
    { name: "Neha Verma", role: "Aromatherapy Expert", exp: "4 Years Experience" },
    { name: "Rohan Patel", role: "Sports Massage", exp: "6 Years Experience" },
  ];

  return (
    <main className="py-20 bg-[#f6f1eb]">

      <h1 className="text-4xl font-serif text-center mb-12">
        Our Therapists
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {therapists.map((t, i) => (
          <TherapistCard
            key={i}
            name={t.name}
            role={t.role}
            exp={t.exp}
            onBook={(name) => {
              setSelected(name);
              setOpen(true);
            }}
          />
        ))}

      </div>

      {/* BOOK POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

          <div className="bg-white p-8 rounded-3xl w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-serif mb-4 text-center">
              Booking with {selected}
            </h2>

            <button
  onClick={() => {
    const therapist = selected;
    const message = encodeURIComponent(
      `Hi, I want to book an appointment with ${therapist}. Please guide me for payment.`
    );

    window.location.href = `https://t.me/midnightmuse12am?text=${message}`;
  }}
  className="w-full bg-[#8b6f4e] text-white py-3 rounded-full"
>
  Proceed to Payment
</button>

          </div>
        </div>
      )}

    </main>
  );
}
