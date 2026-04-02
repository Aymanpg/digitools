const plans = [
  { name: "Starter", price: 0, period: "month", desc: "Perfect for getting started", features: ["Access to 5 free tools", "Basic templates", "Community support", "5 projects per month"], btn: "Get Started Free", highlight: false },
  { name: "Pro", price: 29, period: "month", desc: "Best for professionals", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"], btn: "Start Pro Trial", highlight: true },
  { name: "Enterprise", price: 99, period: "month", desc: "For teams and businesses", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "15A guarantee", "Custom branding"], btn: "Contact Sales", highlight: false },
]

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Simple, Transparent Pricing</h2>
        <p className="text-gray-900 mb-12">Choose the plan that fits your needs. Upgrade or downgrade any time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 flex flex-col gap-4 border ${p.highlight ? "bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white border-purple-600 scale-105 shadow-xl" : "bg-white text-gray-900 border-gray-200"}`}>
              {p.highlight && <span className="bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full self-start">Most Popular</span>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`text-sm ${p.highlight ? "text-purple-200" : "text-gray-900"}`}>{p.desc}</p>
              <div className="text-3xl font-bold">${p.price}<span className="text-sm font-normal">/{p.period}</span></div>
              <ul className="text-sm space-y-2 text-left flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={p.highlight ? "text-yellow-300" : "text-purple-500"}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`py-2 rounded-full font-semibold mt-2 ${p.highlight ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white hover:bg-purple-700"}`}>
                {p.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

