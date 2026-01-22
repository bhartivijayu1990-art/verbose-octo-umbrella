"use client";

export default function Services() {

  const services = [
    {
      title: "Swedish Massage",
      desc: "Gentle full-body massage to relax muscles and improve circulation.",
      price: "₹1199"
    },
    {
      title: "Deep Tissue Therapy",
      desc: "Targets deep muscle tension and chronic pain areas.",
      price: "₹1599"
    },
    {
      title: "Aromatherapy",
      desc: "Essential oils to calm the mind and body.",
      price: "₹1899"
    }
  ];

  return (
    <main className="py-20 bg-[#f6f1eb]">

      <h1 className="text-4xl font-serif text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >

            <h3 className="text-xl font-semibold mb-3">
              {s.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {s.desc}
            </p>

            <p className="font-bold mb-4">
              {s.price}
            </p>

            <button
              onClick={() => {
                const msg = encodeURIComponent(
                  `Hi, I want to book ${s.title}. Please guide me for payment.`
                );
                window.location.href = `https://t.me/Jacydodo?text=${msg}`;
              }}
              className="bg-[#8b6f4e] text-white px-6 py-2 rounded-full"
            >
              Book & Pay
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}
