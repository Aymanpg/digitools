export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-3">DigiTools</h4>
          <p className="text-sm">Premium digital tools for creators, professionals, and businesses.</p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
          { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="text-white font-semibold mb-3">{col.title}</h5>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-xs">
        © 2025 DigiTools. All rights reserved.
      </div>
    </footer>
  )
}
