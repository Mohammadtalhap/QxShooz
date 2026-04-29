import collectionBannerData from "../data/Section2CBData";
import BannerPoster from "./BannerPoster";

function Section2CollectionBanner() {
  const productData = [...collectionBannerData];

  return (
    <div
      className="grid grid-cols-3 gap-8"
      style={{
        gridTemplateColumns: `repeat(${productData.length}, minmax(0, 1fr))`,
      }}
    >
      {productData.map((product, index) => (
        <BannerPoster key={index} productData={product} />
      ))}
    </div>
  );
}

export default Section2CollectionBanner;