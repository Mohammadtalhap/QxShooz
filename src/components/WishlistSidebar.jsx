import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Heart, X } from "lucide-react";

function WishlistSidebar({ className = "", wishlistProducts, toggleWishlist }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${className}`}>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 cursor-pointer hover:text-[#b63f4f]"
      >
        <Heart size={26} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Wishlist Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] md:w-[380px] lg:w-[480px] bg-white shadow-xl overflow-y-scroll transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Wishlist</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="w-full p-4 space-y-4">
          {wishlistProducts.map((product) => {
            return (
              <div className="flex gap-4" key={product.id}>
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-20"
                />
                <div className="">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="font-medium">{product.price}</p>
                  <Button
                    variant="underlineBtnRed"
                    text="Remove"
                    className="text-xs mt-2 text-gray-500"
                    onClick={() => toggleWishlist(product.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WishlistSidebar;
