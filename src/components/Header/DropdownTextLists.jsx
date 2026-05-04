import React from "react";
import Logo from "./Logo";

function DropdownTextLists({
  item,
  imageTitle = false,
  className = "",
  titleClass = "",
  olClass = "",
  liClass = "",
  liHoverEffect = true,
  spanClass = "",
}) {
  return (
    <div className={className} key={"SubdivOf" + item.title}>
      {imageTitle && <Logo className="py-0! mb-6"/>}
      {item.title && (
        <h4 className={`font-semibold mb-4 cursor-pointer ${titleClass}`}>
          {item.title}
        </h4>
      )}

      <ol
        className={`space-y-3 text-sm text-gray-600 font-normal tracking-normal ${item.listNumbering ? " list-inside list-decimal" : ""} ${olClass}`}
      >
        {item.items.map((subItem, subIndex) => (
          <li
            key={"listItemOf" + subItem}
            className={`transition duration-300 w-full ${liHoverEffect ? "hover:text-[#b63f4f]  cursor-pointer" : ""} ${liClass}`}
          >
            <span className={spanClass}>{subItem}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DropdownTextLists;
