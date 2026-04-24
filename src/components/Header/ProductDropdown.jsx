import productDropdownData from "../../data/ProductDropdownData";
import products from "../../data/Products";
import DropdownTextLists from "./DropdownTextLists";
import ProductCard from "../ProductCard";

function ProductDropdown() {

  const productDropdownImages = [products.find((product) => product.title === "Waterproof Hiking Boots")];

  return (
    <div
      className="grid gap-6 text-black"
      style={{
        gridTemplateColumns: `repeat(${productDropdownData.length + productDropdownImages.length}, minmax(0, 1fr))`,
      }}
    >
      {/* Text Columns */}
      {productDropdownData.map((item, index) => {
        return (
          <DropdownTextLists
            key={"DropdownTextListsOf" + item.title}
            item={item}
          />
        );
      })}

      {/* Image Columns */}
      {productDropdownImages.map((image, index) => (
        <ProductCard key={image.title} cardObject={image} />
      ))}
    </div>
  );
}

export default ProductDropdown;
