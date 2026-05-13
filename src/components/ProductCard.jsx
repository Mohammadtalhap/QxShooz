import { Heart } from "lucide-react";
import { AiOutlineSwap } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Button from "./Button";
import { useState } from "react";

function ProductCard({
  cardObject,
  wishlist,
  setWishlist,
  toggleWishlist,
  cartItems,
  setCartItems,
  addToCart,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(cardObject.id);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const base = "absolute top-0 left-0 m-3 rounded-sm tracking-tighter z-10";
  const variants = {
    sale: base + " bg-[#84c8bb] text-white",
    sold: base + " bg-white text-[#b63f4f] font-normal",
  };
  let classes = "";
  let tagText = "";
  let hasTag = false;

  if (!cardObject.availability) {
    classes = variants.sold;
    tagText = "Sold Out";
    hasTag = true;
  } else if (cardObject.salePercentage) {
    classes = variants.sale;
    tagText = cardObject.salePercentage;
    hasTag = true;
  }
  return (
    <>
      {/* Image Box */}
      <div className="img-box group/mainBox relative flex flex-col overflow-hidden">
        {/* Image Wrapper */}
        <div className="img-wrapper relative flex justify-center items-center aspect-square overflow-hidden bg-[#fbf9f7d6]">
          <img
            src={cardObject.imageSrc}
            srcSet={cardObject.imageSrcSet}
            alt={cardObject.title}
            className="absolute inset-0 w-full object-cover transition-all duration-500 opacity-100 group-hover/mainBox:scale-110 group-hover/mainBox:opacity-0"
          />
          <img
            src={cardObject.hoverImageSrc}
            srcSet={cardObject.hoverImageSrcSet}
            alt={cardObject.title}
            className="absolute inset-0 w-full object-contain transition-all duration-500 opacity-0  group-hover/mainBox:scale-110 group-hover/mainBox:opacity-100"
          />
        </div>

        {/* Sale Box */}
        {hasTag && (
          <Button
            className={classes}
            text={tagText}
            variant="noVariant"
            size="xs"
          />
        )}

        {/* Product Info */}
        <div className="productInfo flex flex-col gap-1 text-black transition-all duration-500 group-hover/mainBox:-translate-y-12 bg-white">
          <div className="productPrice flex items-end gap-2 mt-2">
            {cardObject.availability ? cardObject.price : "$0.00"}
            {cardObject.oldPrice && (
              <span className="line-through text-gray-500 text-sm">
                {cardObject.oldPrice}
              </span>
            )}
          </div>
          <div className="productTitle text-xl font-medium ">
            {cardObject.title}
          </div>
          <div className="productBrand text-gray-500 ">{cardObject.brand}</div>
        </div>
        {/* Product Hover Form */}
        <div className="hoverForm block md:absolute bottom-0 left-0 w-full bg-white px-3 mt-3 py-3 border-t border-dotted border-gray-400 md:translate-y-full md:group-hover/mainBox:translate-y-0 md:group-hover/mainBox:block transition duration-500">
          <div className="flex justify-between items-center">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="uppercase flex items-center gap-1 font-medium text-sm cursor-pointer"
            >
              <PiShoppingCartSimpleLight className="text-lg" />
              {isAdding ? (
                <div className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
              ) : (
                "Add to cart"
              )}
            </button>
            <div className="actionButtons hidden md:flex items-center gap-3">
              <button className="cursor-pointer">
                <LuEye />
              </button>
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(cardObject.id);
                }}
              >
                <Heart
                  size={18}
                  fill={wishlist.includes(cardObject.id) ? "black" : "none"}
                />
              </button>
              <button className="cursor-pointer">
                <AiOutlineSwap />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
