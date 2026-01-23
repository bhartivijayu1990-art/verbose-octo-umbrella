"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-serif">
          InnerBloom Wellness
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/services" className="hover:text-black">Services</a>
          <a href="/therapists" className="hover:text-black">Therapists</a>
          <a href="/membership" className="hover:text-black">Membership</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t text-gray-600">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/therapists" onClick={() => setOpen(false)}>Therapists</a>
          <a href="/membership" onClick={() => setOpen(false)}>Membership</a>
        </div>
      )}
    </header>
  );
}
