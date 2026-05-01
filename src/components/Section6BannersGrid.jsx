import React from "react";
import collectionBannerData from "../data/Section2CBData";
import BannerPoster from "./BannerPoster";

function Section6BannersGrid() {
  const productData = collectionBannerData.filter((product) =>
    product.id.includes("banner"),
  );

  return (
    <div className="grid grid-cols-6 gap-6">
      {productData.map((product, index) => {
        const colSpan = product.id === "banner-4" || product.id === "banner-5" ? "col-span-3" : "col-span-2";
        return (
          <BannerPoster 
            key={index} 
            productData={product} 
            cardSize="h2" 
            className={`${colSpan} text-white`}
            tagClass="text-xs"
            titleClass="w-2/3 leading-10"
          />
        );
      })}
    </div>
  );
}

export default Section6BannersGrid;
