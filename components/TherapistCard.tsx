"use client";

type Props = {
  name: string;
  role: string;
  exp: string;
  onBook: (name: string) => void;
};

export default function TherapistCard({ name, role, exp, onBook }: Props) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm text-gray-500 mb-4">{exp}</p>

      <button
        onClick={() => onBook(name)}
        className="bg-[#8b6f4e] text-white px-6 py-2 rounded-full"
      >
        Book Now
      </button>
    </div>
  );
}
