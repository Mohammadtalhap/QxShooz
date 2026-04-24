import { AiOutlineSwap } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function ProductCard({ cardObject }) {
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
        {cardObject.salePercentage && (
          <div className="sale-box absolute top-0 left-0 m-3 px-2 py-1 bg-[#84c8bb] rounded-sm text-xs text-white font-medium tracking-tight">
            {cardObject.salePercentage}
          </div>
        )}

        {/* Product Info */}
        <div className="productInfo flex flex-col gap-1 text-black transition-all duration-500 group-hover/mainBox:-translate-y-12 bg-white">
          <div className="productPrice flex items-end gap-2 mt-2">
            {cardObject.price}
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
        <div className="hoverForm absolute bottom-0 left-0 w-full bg-white px-3 mt-3 py-3 border-t border-dotted border-gray-400 translate-y-full group-hover/mainBox:translate-y-0 group-hover/mainBox:block transition duration-500">
          <div className="flex justify-between items-center">
            <span className="uppercase flex items-center gap-1 font-medium text-sm cursor-pointer">
              <PiShoppingCartSimpleLight className="text-lg" />
              Add To Cart
            </span>
            <div className="actionButtons flex items-center gap-3">
              <LuEye className="cursor-pointer" />
              <FaRegHeart className="" />
              <AiOutlineSwap className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
