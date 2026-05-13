import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { RxDragHandleVertical } from "react-icons/rx";
import { FaFilter } from "react-icons/fa6";
import products from "../data/Products";
import ProductCard from "./ProductCard";
import { href } from "react-router-dom";
import { useRef } from "react";

function ProductsGridWithFilters({ wishlist, setWishlist, toggleWishlist, cartItems, setCartItems, addToCart }) {
  const productsData = [...products];
  const [columnNumber, setColumnNumber] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = productsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const targetRef = useRef(null);
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      {/* Top Section */}
      <div ref={targetRef} className="md:hidden lg:flex justify-between items-center">
        {/* Column Buttons */}
        <div className="hidden renderButtons lg:flex items-center">
          <button
            onClick={() => setColumnNumber(2)}
            className={`h-12 w-12 flex justify-center items-center text-4xl border border-[#e0e0e0] text-gray-500 cursor-pointer ${columnNumber === 2 ? "bg-gray-300 text-black!" : ""}`}
          >
            <LiaGripLinesVerticalSolid />
          </button>
          <button
            onClick={() => setColumnNumber(3)}
            className={`h-12 w-12 flex justify-center items-center text-4xl border border-[#e0e0e0] text-gray-500 cursor-pointer ${columnNumber === 3 ? "bg-gray-300 text-black!" : ""}`}
          >
            <IoReorderThreeOutline className="rotate-90" />
          </button>
          <button
            onClick={() => setColumnNumber(4)}
            className={`h-12 w-12 flex justify-center items-center text-4xl border border-[#e0e0e0] text-gray-500 cursor-pointer ${columnNumber === 4 ? "bg-gray-300 text-black!" : ""}`}
          >
            <RxDragHandleVertical />
          </button>
        </div>
        {/* Right Side - Sort + products count */}
        <div className="w-full lg:w-auto flex items-center justify-between gap-15">
          <div className="hidden sort-select lg:flex gap-4">
            <span className="font-medium">Sort By:</span>
            <select className="outline-none">
              <option>Featured</option>
              <option>Most Relevant</option>
              <option>Best Selling</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
              <option>Date, new to old</option>
              <option>Date, old to new</option>
            </select>
          </div>
          <button className="lg:hidden flex items-center gap-2">
            <FaFilter /> Filter & sort
          </button>
          <span className="font-medium text-black/70">10 Products</span>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className={`grid gap-8 mt-8 ${columnNumber === 2 ? "grid-cols-2" : columnNumber === 3 ? "grid-cols-3" : "grid-cols-4"}`}
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} cardObject={product} wishlist={wishlist} setWishlist={setWishlist} toggleWishlist={toggleWishlist} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-18">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              handleScroll();
              setCurrentPage(page);
            }}
            className={`h-10 w-10 flex justify-center items-center border border-[#e2e2e2] ${currentPage === page ? "bg-[#b63f4f] text-white" : "bg-white text-black cursor-pointer"}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsGridWithFilters;
