export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      
      {/* Icon / Image - Now supports real images with white background */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 p-1">
        {item.icon.startsWith('/') ? (
          // Real image from assets
          <img 
            src={item.icon} 
            alt={item.name}
            className="h-full w-full object-contain"
          />
        ) : (
          // Fallback emoji (only for Premium Stock Assets)
          <span className="text-3xl">
            {item.icon}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-900 truncate">{item.name}</p>
        <p className="text-sm text-slate-500">
          {item.period === "One-Time" ? "One-time purchase" : item.period}
        </p>
      </div>

      {/* Price */}
      <p className="font-bold text-slate-900 whitespace-nowrap">${item.price}</p>

      {/* Remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors px-2 py-1 rounded-md hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  )
}