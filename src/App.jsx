import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      toast.warning("Already in cart!");
      return;
    }
    setCartItems([...cartItems, product]);
    toast.success("Added to cart!");
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Removed from cart!");
  };

  const checkout = () => {
    setCartItems([]);
    toast.success("Checkout successful! Cart cleared.");
  };

  return (
    <div className="font-sans">
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar
        cartCount={cartItems.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Banner />
      <Stats />

      {/* Products / Cart Section */}
      <section id="products-section" className="bg-white px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-gray-900 text-3xl font-bold mb-2">Premium Digital Tools</h2>
          <p className="text-gray-700 mb-6">Choose from our curated collection of premium digital products.</p>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === "products" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === "cart" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <Products addToCart={addToCart} />
        ) : (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        )}
      </section>

      <Steps />

      {/* Pricing Section */}
      <div id="pricing-section">
        <Pricing />
      </div>

      <Cta />

      {/* Footer — scroll target for Features, Testimonials, FAQ */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
