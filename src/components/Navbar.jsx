import { ShoppingCart } from "lucide-react"

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-white text-black px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <span className="text-blue-600 font-bold text-xl">DigiTools</span>
      <div className="hidden md:flex gap-6 text-sm">
        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
          <a key={item} href="#" className="hover:text-blue-600">{item}</a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <button className="text-sm">Login</button>
        <button className="bg-gradient-to-b from-[#4F39F6] to-[#2E2190] px-4 py-2 rounded-full text-white text-sm font-semibold hover:bg-blue-700">Get Started</button>
      </div>
    </nav>
  )
}
