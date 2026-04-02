const tagColors = {
  popular: "bg-blue-100 text-indigo-700",
  new: "bg-emerald-100 text-emerald-700",
  "best seller": "bg-amber-100 text-amber-700",
}

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift relative flex flex-col">
      
      {/* Tag */}
      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            tagColors[product.tagType] || "bg-slate-100 text-slate-600"
          }`}
        >
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-2xl text-white">
          {product.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900">
        {product.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-600">
        {product.description}
      </p>

      {/* Price */}
      <p className="mt-4 text-2xl font-extrabold text-slate-900">
        ${product.price}
        <span className="text-sm font-medium text-slate-400">
          {" "}/{product.period}
        </span>
      </p>

      {/* Features */}
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white text-xs">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-6 w-full rounded-lg bg-gradient-to-b from-[#4F39F6] to-[#2E2190] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Buy Now
      </button>
    </div>
  )
}