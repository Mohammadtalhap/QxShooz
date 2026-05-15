import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import CartSidebar from "../CartSidebar";
import WishlistSidebar from "../WishlistSidebar";
import { useState } from "react";

function NavIcons({
  wishlist,
  toggleWishlist,
  wishlistProducts,
  cartItems,
  setCartItems,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  searchText,
  setSearchText,
}) {
  const countCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <IoIosSearch
        className="text-2xl cursor-pointer hover:text-[#b63f4f]"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      />
      <FaRegUser className="text-lg cursor-pointer hover:text-[#b63f4f]" />
      <div className="relative group cursor-pointer">
        <WishlistSidebar
          wishlistProducts={wishlistProducts}
          toggleWishlist={toggleWishlist}
        />
        {/* Count Bubble */}
        <span className="absolute bottom-0 -right-1 bg-[#ae3f4f] text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">
          {wishlist.length}
        </span>
      </div>
      <div className="group flex gap-1 items-center cursor-pointer">
        <CartSidebar
          cartItems={cartItems}
          setCartItems={setCartItems}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
        <p className="">({countCartItems})</p>
      </div>
      {/* Searh Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 p-4">
          <div className="flex items-center border px-3 py-2 max-w-2xl mx-auto">
            <IoIosSearch className="text-xl" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full outline-none px-2"
            />

            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-sm text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavIcons;
