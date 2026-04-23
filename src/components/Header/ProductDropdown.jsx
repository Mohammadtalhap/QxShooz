import DropdownTextLists from "./DropdownTextLists";

function ProductDropdown() {

  const productDropdownData = [
    {
      title: "Product Layouts",
      items: [
        "Thumbnails - bottom",
        "Thumbnails - left",
        "Thumbnails - right",
        "Without Thumbnails",
        "List - stacked",
        "List - grid",
        "Collage - style 1",
        "Collage - style 2",
      ],
      listNumbering: true
    },
    {
      title: "Product Type",
      items: [
        "Simple Product",
        "Variable Product",
        "With Video",
        "Sold Out - Coming",
      ],
      listNumbering: false
    },
    {
      title: "List Featured 1",
      items: [
        "Sticky ATC",
        "Frequently Bought Together",
        "Count Down",
        "Cross Selling",
        "Upsell Popup",
        "Low Stock Alert",
        "Pickup Store",
      ],
      listNumbering: false
    },
    {
      title: "List Featured 2",
      items: [
        "Dropdown Variant",
        "Swatch Variant Color",
        "Swatch Variant Image",
        "Variant Image Square",
        "Size Guide",
        "Description Accordion",
        "Description Tab Center",
      ],
      listNumbering: false
    },
  ];
  const productDropdownImages = [
    {
      title: "Waterproof Hiking Boots",
      imageSrc: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg",
      brand: "trailGear",
      price: "$25.00",
      availability: true,
      category: "healthcare",
      material: "material 1",
      features: ["canvas", "men", "durable"],
      sizes: ["small", "medium", "large"],
      productType: "boots"
    }
  ];
  
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
        <div
          key={image.imageTitle}
          className="flex flex-col justify-center items-center"
        >
          <div
            href="#"
            className="img-wrapper h-[260px] size-cover overflow-hidden"
          >
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

export default ProductDropdown;
