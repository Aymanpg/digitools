export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Icon - exact size, gradient, and style from HTML cart items */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-2xl text-white">
        {item.icon || "📦"}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-900 truncate">{item.name}</p>
        <p className="text-sm text-slate-500 truncate">
          {item.subtitle || item.type || "One-time purchase"}
        </p>
      </div>

      {/* Price */}
      <p className="font-bold text-slate-900 whitespace-nowrap">${item.price}</p>

      {/* Remove button - exact color and style */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors px-2 py-1 rounded-md hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  )
}