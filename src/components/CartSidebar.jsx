import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useState, useContext } from "react";
import Button from "../components/Button";
import products from "../data/Products";
import { CartContext } from "../context/CartContext";

function CartSidebar({
  className = "",
  children = "",
}) {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const cartProducts = cartItems.map((cartItem) => {
    const productsData = products.find((product) => product.id === cartItem.id);

    return {
      ...productsData,
      quantity: cartItem.quantity,
    };
  });

  const calculateTotalPrice = () => {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + product.price.replace("$", "") * product.quantity;
    }, 0);

    return totalPrice;
  };

  return (
    <div className={`${className}`}>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 cursor-pointer hover:text-[#b63f4f]"
      >
        <ShoppingCart size={22} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] md:w-[380px] lg:w-[480px] bg-white shadow-xl transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="w-full h-[540px] p-4 space-y-4 overflow-y-scroll">
          {cartProducts.map((item) => (
            <div key={item.id} className="flex">
              {/* Left Image Side */}
              <div className="img-wrapper h-30 aspect-square">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Right Details Side */}
              <div className="flex flex-col justify-between p-4 w-full">
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <div className="w-full flex justify-between">
                  {/* Quantity Box */}
                  <div className="relative flex w-fit border border-gray-400 text-black/50">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      className="px-3 py-2 transition-colors duration-300 hover:bg-gray-300 z-2"
                    >
                      <Minus size={16} />
                    </button>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-2 transition-colors duration-300 hover:bg-gray-300 z-2"
                    >
                      <Plus size={16} />
                    </button>
                    <p className="absolute inset-0 flex items-center justify-center text-xs">
                      {item.quantity}
                    </p>
                  </div>
                  {/* Remove Button */}
                  <div className="flex justify-center items-center">
                    <Button
                      variant="underlineBtnRed"
                      text="Remove"
                      className="text-xs mt-2 text-gray-500"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 w-full p-4 border-t bg-white z-5">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${calculateTotalPrice()}</span>
          </div>
          <p className="text-xs mb-3 text-gray-400">
            Taxes and shipping calculated at checkout
          </p>
          <div className="btn-wrapper w-full flex justify-end">
            <Button text="Check Out" variant="primaryBtnRed" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
