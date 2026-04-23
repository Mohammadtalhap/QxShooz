import DropdownTextLists from "./DropdownTextLists";

function ShopDropdown() {
  const shopDropdownData = [
    {
      title: "Layouts",
      items: [
        "Filter Sidebar",
        "Filter Top",
        "Filter Drawer",
        "Without Filter",
        "Collection - 2 columns",
        "Collection - 3 columns",
        "Collection - 4 columns",
      ],
      listNumbering: true
    },
    {
      title: "Features",
      items: [
        "Banner Image",
        "Banner No Image",
        "Banner Split",
        "Collection list",
        "Sub Collection",
        "Pagination",
        "Infinity",
        "Load More",
      ],
      listNumbering: false
    },
    {
      title: "Hover Style",
      items: [
        "Hover Style 1",
        "Hover Style 2",
        "Hover Style 3",
        "Hover Style 4",
        "Hover Style 5",
        "Hover Style 6",
        "Hover Style 7",
        "Hover Style 8",
      ],
      listNumbering: false
    },
  ];
  const shopDropdownImages = [
    {
      imageSrc:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360",
      imageTitle: "Athletic Footwear",
      imageTotalProducts: "8 products",
    },
    {
      imageSrc:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360",
      imageTitle: "Boots for all Occasion",
      imageTotalProducts: "8 products",
    },
  ];

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
          <DropdownTextLists key={"DropdownTextListsOf" + item.title} item={item} />
        );
      })}

      {/* Image Columns */}
      {shopDropdownImages.map((image, index) => (
        <div key={image.imageTitle} className="flex flex-col justify-center items-center">
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

export default ShopDropdown;
