import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import CartSidebar from "../CartSidebar";
import WishlistSidebar from "../WishlistSidebar";

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
}) {
  const countCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="flex items-center gap-6">
      <IoIosSearch className="text-2xl cursor-pointer hover:text-[#b63f4f]" />
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
    </div>
  );
}

export default NavIcons;
