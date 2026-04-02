import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5">
        
        {/* Logo + Description */}
        <div>
          <span className="text-3xl font-black bg-gradient-to-r from-[#4F39F6] to-[#2E2190] bg-clip-text text-transparent">
            DigiTools
          </span>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Product</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Templates</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Community</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links - Exact match to your screenshot */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Social Links</h4>
          <div className="flex gap-3">
            <a 
              href="#" 
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 transition text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 transition text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 transition text-xl"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex md:items-center md:justify-between">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="mt-3 flex flex-wrap gap-6 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}