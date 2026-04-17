import { FaAngleDown } from "react-icons/fa6";

function NavLinkItems({title, hasDropdown, isActive, badge}) {
  return (
    <a
      href="#"
      className={`relative group py-8 hover:text-[#b63f4f] ${isActive && "underline underline-offset-8 decoration-1 text-[#b63f4f]"}`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 -right-5 bg-green-500 text-white text-xs font-normal px-2 py-px rounded-full tracking-normal">
          {badge}
        </span>
      )}

      {/* Title */}
      <span className="flex gap-1 items-center">
        {title}
        {hasDropdown && <FaAngleDown className="text-xs" />}
      </span>

      {/* Dropdown */}
      {hasDropdown && (
        <div className="absolute top-full left-0 w-60 bg-white shadow-lg p-4 pt-10 hidden group-hover:block z-50">
          DropDown Content
        </div>
      )}

      
      {/* Hover Under Line */}
      {!isActive && (
        <span className="absolute left-0 bottom-7 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover:w-full"></span>
      )}
    </a>
  );
}

export default NavLinkItems;
