import CartItem from "./CartItem"

export default function Cart({ cartItems, removeFromCart, checkout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft text-center py-20">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-5xl text-white">
          🛒
        </div>
        <p className="text-2xl font-semibold text-slate-900">Your cart is empty</p>
        <p className="mt-2 text-slate-500">Looks like you haven’t added any products yet.</p>
        <p className="text-sm text-slate-400 mt-1">Go to Products and add something awesome!</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border text-slate-900 border-slate-200 bg-slate-50 p-6 shadow-soft">
      {/* Header - matching exactly the HTML cart tab */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">Your Cart</h3>
      </div>

      {/* Items list */}
      <div className="space-y-3">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      {/* Total row - exact match to HTML */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-lg font-bold">
        <span className="text-slate-500">Total:</span>
        <span className="bg-gradient-to-b from-[#4F39F6] to-[#2E2190] bg-clip-text text-transparent">
          ${total}
        </span>
      </div>

      {/* Checkout button - exact styling from HTML */}
      <button
        onClick={checkout}
        className="mt-6 w-full rounded-lg bg-gradient-to-b from-[#4F39F6] to-[#2E2190] px-4 py-3.5 text-base font-semibold text-white transition hover:opacity-90"
      >
        Proceed to Checkout
      </button>
    </div>
  )
}
