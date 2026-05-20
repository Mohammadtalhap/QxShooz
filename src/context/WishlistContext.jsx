import { createContext, useEffect, useState } from "react";
import products from "../data/Products";
import { preconnect } from "react-dom";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
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
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, wishlistProducts }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
