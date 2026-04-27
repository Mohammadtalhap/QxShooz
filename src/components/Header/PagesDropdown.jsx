import pagesDropdownData from "../../data/PagesDroopdownData";
import DropdownTextLists from "./DropdownTextLists";
function PagesDropdown() {
  return (
    <div
      className="grid text-black"
      style={{
        gridTemplateColumns: `repeat(${pagesDropdownData.length}, minmax(0, 1fr))`,
      }}
    >
      {/* Text Columns */}
      {pagesDropdownData.map((item, index) => {
        return (
          <DropdownTextLists
            key={"DropdownTextListsOf" + item.title}
            item={item} 
          />
        );
      })}
    </div>
  );
}

export default PagesDropdown;
