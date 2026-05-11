import collectionBannerData from "../data/Section2CBData";
import BannerPoster from "./BannerPoster";

function Section2CollectionBanner() {
  const productData = collectionBannerData.filter((product) => product.id.includes("collection"));

  return (
    <div
      className="flex max-w-screen flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center sm:justify-start px-2 sm:px-4 md:px-6 lg:px-0"
    >
      {productData.map((product, index) => (
        <BannerPoster key={index} productData={product} />
      ))}
    </div>
  );
}

export default Section2CollectionBanner;