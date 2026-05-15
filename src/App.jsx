import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "./data/Products";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import useCart from "./hooks/useCart";

function App() {
  const location = useLocation();
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id),
  );

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const {
    cartItems,
    setCartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [searchText, setSearchText] = useState("");

  return (
    <div className="overflow-hidden">
      <TopBar
        offerCount={2}
        className="from-[#8f6abd] via-[#7e446f] to-[#b73d47]"
      />
      <Header
        wishlist={wishlist}
        setWishlist={setWishlist}
        toggleWishlist={toggleWishlist}
        wishlistProducts={wishlistProducts}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishlist={wishlist}
              setWishlist={setWishlist}
              toggleWishlist={toggleWishlist}
              cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:slug?"
          element={
            <Products
              wishlist={wishlist}
              setWishlist={setWishlist}
              toggleWishlist={toggleWishlist}
              cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          }
        />
      </Routes>

      <Footer
        className={`${location.pathname === "/" ? "pt-50 -mt-35" : "pt-15"}`}
      />
    </div>
  );
}

export default App;
