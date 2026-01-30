export default function Footer() {
  return (
    <>
      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <a
          href="https://t.me/midnightmuse12am"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <img
            src="/icons/telegram.svg"
            alt="Telegram"
            className="w-8 h-8"
          />
        </a>
      </div>

      {/* YOUR EXISTING FOOTER */}
      <footer className="bg-[#1f1f1f] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl mb-3">InnerBloom Wellness</h2>
          <p className="text-gray-400">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
