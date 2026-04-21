import React from "react";

function ProductDropdown() {
  return (
    <div className="grid grid-cols-5 gap-6 text-black">
      {/* Column 1 */}
      <div>
        <h4 className="font-semibold mb-4 cursor-pointer">Layouts</h4>
        <ol className="space-y-3 text-sm text-gray-600 list-decimal list-inside font-normal tracking-normal">
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Filter Sidebar
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Filter Top
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Filter Drawer
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Without Filter
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Collection - 2 columns
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Collection - 3 columns
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Collection - 4 columns
          </li>
        </ol>
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="font-semibold mb-4 cursor-pointer">Features</h4>
        <ol className="space-y-3 text-sm text-gray-600 font-normal tracking-normal">
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Banner Image
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Banner No Image
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Banner Split
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Collection list
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Sub Collection
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Pagination
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Infinity
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Load More
          </li>
        </ol>
      </div>

      {/* Column 3 */}
      <div>
        <h4 className="font-semibold mb-4 cursor-pointer">Hover Style</h4>
        <ol className="space-y-3 text-sm text-gray-600 font-normal tracking-normal">
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 1
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 2
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 3
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 4
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 5
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 6
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 7
          </li>
          <li className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit">
            Hover Style 8
          </li>
        </ol>
      </div>

      {/* Column 4 (Images) */}
      <div className="flex flex-col justify-center items-center">
        <a href="" className="img-wrapper h-[260px] size-cover overflow-hidden">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360"
            alt="Athletic Footwear"
            className="h-full w-full size-cover cursor-pointer hover:scale-110 transition duration-500"
          />
        </a>
        <a
          href=""
          className="text-xl font-semibold mt-3 cursor-pointer tracking-normal"
        >
          Athletic Footwear
        </a>
        <p className="text-sm text-gray-600 font-normal tracking-normal cursor-text">
          8 products
        </p>
      </div>

      {/* Column 5 (Images) */}
      <div className="flex flex-col justify-center items-center">
        <div className="img-wrapper h-[260px] size-cover overflow-hidden">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360"
            alt="Occasion Boot"
            className="h-full w-full size-cover cursor-pointer hover:scale-110 transition duration-500"
          />
        </div>
        <h4 className="text-xl font-semibold mt-3 cursor-pointer tracking-normal">
          Boots for all Occasion
        </h4>
        <p className="text-sm text-gray-600 font-normal tracking-normal cursor-text">
          8 products
        </p>
      </div>
    </div>
  );
}

export default ProductDropdown;
