import { FaAngleDown } from "react-icons/fa6";
import { borderAnimation } from "../../utils/styles";
import BlogDropdown from "./BlogDropdown";
import Dropdown from "./Dropdown";
import ProductDropdown from "./ProductDropdown";
import ShopDropdown from "./ShopDropdown";
import PagesDropdown from "./PagesDropdown";

function NavLinkItems({ title, hasDropdown, isActive, badge }) {
  const link = {
    Home: "/",
    Shop: "/products",
    Product: "/products",
    Blog: "/",
    Pages: "/products",
    "Buy Now": "/",
  };
  return (
    <a
      href={`${link[title]}`}
      className={`group py-8 hover:text-[#b63f4f] ${isActive ? "underline underline-offset-8 decoration-1 text-[#b63f4f]" : ""} ${title === "Pages" || title === "Buy Now" ? "relative" : ""}`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 -right-5 bg-green-500 text-white text-xs font-normal px-2 py-px rounded-full tracking-normal">
          {badge}
        </span>
      )}

      {/* Title */}
      <span
        className={`flex gap-1 items-center ${isActive ? "" : "pb-1 bg-linear-to-r from-[#b63f4f] to-[#b63f4f] bg-no-repeat bg-bottom-left bg-size-[0%_1px] group-hover:bg-size-[100%_1px] transition-all duration-300"}`}
      >
        {title}
        {hasDropdown && <FaAngleDown className="text-xs" />}
      </span>

      {/* Dropdown */}
      {title === "Shop" && (
        <Dropdown>
          <ShopDropdown />
        </Dropdown>
      )}

      {title === "Product" && (
        <Dropdown>
          <ProductDropdown />
        </Dropdown>
      )}

      {title === "Blog" && (
        <Dropdown>
          <BlogDropdown />
        </Dropdown>
      )}

      {title === "Pages" && (
        <Dropdown fullWidth={false}>
          <PagesDropdown />
        </Dropdown>
      )}
    </a>
  );
}

export default NavLinkItems;
