export default function Navbar() {
    return (
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
  
          <h1 className="text-2xl font-serif">
            InnerBloom Wellness
          </h1>
  
          <div className="space-x-6 text-gray-600">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/services" className="hover:text-black">Services</a>
            <a href="/therapists" className="hover:text-black">Therapists</a>
            <a href="/membership" className="hover:text-black">Membership</a>
          </div>
  
        </div>
      </nav>
    );
  }
  