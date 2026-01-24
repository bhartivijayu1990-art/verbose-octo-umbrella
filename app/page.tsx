"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

  // ✅ Hooks INSIDE component
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-screen bg-[#f6f1eb] py-24">
      <div className="w-full sm:max-w-6xl sm:mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">


          <div>
          <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">
              Discover Inner Balance
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Experience premium massage and wellness therapies designed to
              relax your body, calm your mind, and restore your energy.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#8b6f4e] text-white px-8 py-4 rounded-full hover:bg-[#6e573d] transition"
            >
              Book Now
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl w-full aspect-[4/3]">
            <video
              src="/videos/spavdo1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* BOOKING POPUP */}
{open && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="bg-white p-8 rounded-3xl w-full max-w-md relative">

      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-4 text-xl"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-serif mb-6 text-center">
        Book Now
      </h2>

      <div className="space-y-4">

        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />

        {/* PHONE */}
        <div className="flex border rounded-lg overflow-hidden">
          <span className="bg-gray-200 px-4 py-3">+91</span>
          <input
            type="tel"
            placeholder="Enter 10 digit number"
            className="w-full p-3 outline-none"
          />
        </div>

        {/* DATE */}
        <input
          type="date"
          className="w-full border p-3 rounded-lg"
        />

        {/* SERVICE */}
        <select className="w-full border p-3 rounded-lg">
          <option>Select Service</option>
          <option>Swedish Massage</option>
          <option>Deep Tissue</option>
          <option>Aromatherapy</option>
        </select>

        {/* TIME */}
        <select className="w-full border p-3 rounded-lg">
          <option>Select Time</option>
          <option>10:00 AM</option>
          <option>12:00 PM</option>
          <option>2:00 PM</option>
          <option>4:00 PM</option>
        </select>

        {/* PAYMENT BUTTON */}
        <button
          onClick={() => {
            const msg = encodeURIComponent(
              "Hi, I want to book an appointment. Please guide me for payment."
            );

            window.open(
              `https://t.me/Jacydodo?text=${msg}`,
              "_blank"
            );

            setOpen(false);
          }}
          className="w-full bg-[#8b6f4e] text-white py-3 rounded-full"
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  </div>
)}


      {/* SERVICES */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-serif mb-12">Our Wellness Services</h2>
      </section>

      {/* EXTRA SERVICES */}
      <section className="py-20 bg-[#f6f1eb]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-12">
            Our Premium Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <video
                src="/videos/spavdo2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Hot Stone Therapy
                </h3>
                <p className="text-gray-600">
                  Warm stones to release deep tension.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <video
                src="/videos/spavdo3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Couple Spa
                </h3>
                <p className="text-gray-600">
                  Relax together in a romantic session.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <video
                src="/videos/spavdo4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Luxury Facial
                </h3>
                <p className="text-gray-600">
                  Premium glow facial treatment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VIDEO BANNER */}
      <section className="relative h-[500px]">

        <video
          src="/videos/spavdo6.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
          <div>
            <h2 className="text-5xl font-serif mb-4">
              Experience Luxury
            </h2>
            <p>Premium wellness crafted for your body & soul</p>
          </div>
        </div>

      </section>

      {/* APPLY FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-6">
            Work With InnerBloom
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Are you a professional male therapist? Apply now and join our premium team.
          </p>

          <ApplyForm />

        </div>
      </section>
      <Footer />
    </main>
  );
}
function ApplyForm() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ⛔ STOP page reload
  
    if (phone.length !== 10) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }
  
    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          experience,
          services,
          message,
        }),
      });
  
      if (!res.ok) throw new Error("Failed");
  
      alert("Application sent successfully!");
      setName("");
      setAge("");
    setPhone("");
    setEmail("");
    setCity("");
    setExperience("");
    setServices("");
    setMessage("");
    setError("");
    } catch (err) {
      alert("Something went wrong!");
    }
  };
  
  return (
    <div className="bg-[#f6f1eb] p-10 rounded-3xl shadow-lg">

<form
  onSubmit={handleSubmit}
  className="grid md:grid-cols-2 gap-6 bg-white text-gray-900 p-6 rounded-2xl shadow-lg"
>
  <input
    type="text"
    placeholder="Full Name"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />

  <input
    type="number"
    placeholder="Age"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    required
  />

  {/* PHONE */}
  <div className="flex border border-gray-400 rounded-xl overflow-hidden bg-white">
    <span className="bg-gray-300 text-gray-900 px-4 py-4">+91</span>
    <input
      value={phone}
      onChange={(e) => {
        const v = e.target.value.replace(/\D/g, "");
        if (v.length <= 10) setPhone(v);
      }}
      placeholder="10 digit mobile number"
      className="w-full p-4 bg-white text-gray-900 
                 placeholder-gray-500 
                 focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
      required
    />
  </div>

  <input
    type="email"
    placeholder="Email Address"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="text"
    placeholder="City"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />

  <input
    type="number"
    placeholder="Years of Experience"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
    value={experience}
    onChange={(e) => setExperience(e.target.value)}
  />

  <textarea
    placeholder="Services you can provide"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] 
               md:col-span-2"
    rows={3}
    value={services}
    onChange={(e) => setServices(e.target.value)}
  />

  <textarea
    placeholder="Why should we hire you?"
    className="border border-gray-400 p-4 rounded-xl 
               bg-white text-gray-900 
               placeholder-gray-500 
               focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] 
               md:col-span-2"
    rows={3}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  {error && (
    <p className="text-red-600 md:col-span-2">
      {error}
    </p>
  )}

  <button
    type="submit"
    className="md:col-span-2 bg-[#8b6f4e] text-white py-4 rounded-full hover:bg-[#6e573d] transition"
  >
    Submit Application
  </button>
</form>


    </div>
  );
}


