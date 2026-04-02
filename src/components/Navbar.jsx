import packageIcon from '../assets/package.png';
import cartIcon from '../assets/shopping-cart.png';

// Maps each nav item to its target section ID
// "footer" is used for Features, Testimonials, FAQ
const NAV_TARGETS = {
  Products: "products-section",
  Features: "footer",
  Pricing: "pricing-section",
  Testimonials: "footer",
  FAQ: "footer",
};

export default function Navbar({ cartCount, activeTab, setActiveTab }) {

  const handleNavClick = (e, item) => {
    e.preventDefault();

    if (item === "Products") {
      setActiveTab("products");
      // Scroll to the products section smoothly
      const el = document.getElementById(NAV_TARGETS[item]);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // For all other items, scroll to their target section
    const targetId = NAV_TARGETS[item];
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">

          {/* Logo */}
          <div className="flex items-center gap-2">
      
            <span className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#2E2190] bg-clip-text text-transparent">
              DigiTools
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => handleNavClick(e, item)}
                className={`hover:text-[#4F39F6] transition-colors ${
                  activeTab === "products" && item === "Products"
                    ? "text-[#4F39F6] font-semibold"
                    : "text-slate-700"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side - Cart, Login, Get Started */}
          <div className="flex items-center gap-4">

            {/* Custom Cart Icon - before Login */}
            <div
              onClick={() => setActiveTab("cart")}
              className="relative cursor-pointer flex items-center justify-center w-10 h-10 hover:bg-slate-100 rounded-xl transition"
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5 object-contain" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="hidden sm:flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition">
              Login
            </button>
            <button className="hidden sm:flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white rounded-xl hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}