"use client";

export default function Membership() {

  const subscribe = (plan: string) => {
    const msg = encodeURIComponent(
      `Hi, I want to subscribe to ${plan} membership.`
    );

    localStorage.setItem("member", "true");

    window.location.href = `https://t.me/midnightmuse12am?text=${msg}`;
  };

  return (
    <main className="py-20 bg-[#f6f1eb]">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-serif text-center mb-12">
          Choose Your Membership
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* BASIC */}
          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-xl mb-3">Basic</h2>
            <p className="text-3xl font-bold mb-4">₹999 / month</p>
            <p className="mb-6">2 sessions / month</p>

            <button
              onClick={() => subscribe("BASIC")}
              className="bg-[#8b6f4e] text-white px-6 py-3 rounded-full"
            >
              Pay and Subscibe
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center border-2 border-[#8b6f4e]">
            <h2 className="text-xl mb-3">Premium</h2>
            <p className="text-3xl font-bold mb-4">₹1999 / month</p>
            <p className="mb-6">5 sessions / month</p>
            <button
  onClick={() => {
    const msg = encodeURIComponent(
      "Hi, I want to subscribe to PREMIUM membership."
    );
    window.location.href = `https://t.me/Jacydodo?text=${msg}`;
  }}
  className="bg-[#8b6f4e] text-white px-6 py-3 rounded-full"
>
  Pay and Subscribe
</button>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-xl mb-3">Elite</h2>
            <p className="text-3xl font-bold mb-4">₹2999 / month</p>
            <p className="mb-6">Unlimited sessions</p>
            <button
  onClick={() => {
    const msg = encodeURIComponent(
      "Hi, I want to subscribe to ELITE membership."
    );
    window.location.href = `https://t.me/Jacydodo?text=${msg}`;
  }}
  className="bg-[#8b6f4e] text-white px-6 py-3 rounded-full"
>
  Pay and Subscribe
</button>

          </div>

        </div>
      </div>
    </main>
  );
}
