import React from "react";

function HighDiscountCard({ product, hasBorder = false }) {
  return (
    <div
      className={`highDiscountCard flex gap-4 pb-6 ${hasBorder ? "border-b border-[#e9e9e9]" : "border-none"}`}
    >
      <a href="/" className="img-wrapper h-20 w-20 overflow-hidden">
        <img
          srcSet={product.imageSrcSet}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </a>
      <div className="box-content flex flex-col gap-2">
        <a href="/" className="text-xl hover:text-[#b63f4f] transition-colors duration-300">{product.title}</a>
        <p className="text-[#808080] ">{product.price}</p>
      </div>
    </div>
  );
}

export default HighDiscountCard;
