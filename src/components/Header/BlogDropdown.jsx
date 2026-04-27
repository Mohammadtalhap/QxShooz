import blogDropdownData from "../../data/BlogDropdownData";
import Button from "../Button";
import DropdownTextLists from "./DropdownTextLists";

function BlogDropdown() {
  const blogDropdownImage = {
    imgSrc:
      "//qx-shooz.myshopify.com/cdn/shop/files/filler1.png?crop=center&height=1&v=1731501348&width=1",
    imgSrcSet:
      "//qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=180 180w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=360 360w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=540 540w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=720 720w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=900 900w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=1080 1080w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=1296 1296w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=1512 1512w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=1728 1728w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=1944 1944w, //qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=2048 2048w",
  };

  return (
    <div
      className="grid gap-5 text-black"
      style={{
        gridTemplateColumns: `repeat(${blogDropdownData.length + 1}, minmax(0, 1fr))`,
      }}
    >
      {/* Text Columns */}
      {blogDropdownData.map((item, index) => (
        <DropdownTextLists key={index} item={item} />
      ))}

      {/* Image Colums */}
      <div className="flex flex-col justify-center items-start">
        <div className="img-wrapper w-full overflow-hidden cursor-pointer">
          <img
            src={blogDropdownImage.imgSrc}
            srcSet={blogDropdownImage.imgSrcSet}
            alt="boot"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold mt-3 tracking-normal cursor-text">
          Enjoy a 50% Price Slash
        </p>
        <p className="my-3 font-normal tracking-normal text-gray-600 cursor-text">
          Revamp Your Wardrobe at Jaw-Dropping Prices.
        </p>
        <Button text="Shop Now" variant="underlineBtnBlack" href="/" />
      </div>
    </div>
  );
}

export default BlogDropdown;
