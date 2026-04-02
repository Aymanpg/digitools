export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center divide-x divide-purple-400">
        {[
          { value: "50K+", label: "Active Users" },
          { value: "200+", label: "Premium Tools" },
          { value: "4.9", label: "Rating" },
        ].map(({ value, label }) => (
          <div key={label} className="px-4">
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-purple-200 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}