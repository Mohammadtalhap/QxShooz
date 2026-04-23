
function DropdownTextLists({item}) {
  return (
    <div key={"SubdivOf" + item.title}>
      <h4 className="font-semibold mb-4 cursor-pointer">{item.title}</h4>
      <ol className={`space-y-3 text-sm text-gray-600 font-normal tracking-normal ${item.listNumbering ? " list-inside list-decimal" : ""}`}>
        {item.items.map((subItem, subIndex) => (
          <li
            key={"listItemOf" + subItem}
            className="transition duration-300 hover:text-[#b63f4f] cursor-pointer w-fit"
          >
            {subItem}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DropdownTextLists;
