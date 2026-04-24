import shopDropdownData from "../../data/ShopDropdownData";
import shopDropdownImages from "../../data/ShopDropdownImages";
import DropdownTextLists from "./DropdownTextLists";

function ShopDropdown() {
  return (
    <div
      className="grid gap-6 text-black"
      style={{
        gridTemplateColumns: `repeat(${shopDropdownData.length + shopDropdownImages.length}, minmax(0, 1fr))`,
      }}
    >
      {/* Text Columns */}
      {shopDropdownData.map((item, index) => {
        return (
          <DropdownTextLists
            key={"DropdownTextListsOf" + item.title}
            item={item}
          />
        );
      })}

      {/* Image Columns */}
      {shopDropdownImages.map((image, index) => (
        <div
          key={image.imageTitle}
          className="flex flex-col justify-center items-center"
        >
          <div href="#" className="img-wrapper h-65 size-cover overflow-hidden">
            <img
              src={image.imageSrc}
              alt={image.imageTitle}
              className="h-full w-full size-cover cursor-pointer hover:scale-110 transition duration-500"
            />
          </div>
          <div
            href="#"
            className="text-xl font-semibold mt-3 cursor-pointer tracking-normal"
          >
            {image.imageTitle}
          </div>
          <p className="text-sm text-gray-600 font-normal tracking-normal cursor-text">
            {image.imageTotalProducts}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShopDropdown;
