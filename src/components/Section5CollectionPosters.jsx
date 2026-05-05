import React from "react";
import products from "../data/Products";
import cpData from "../data/Section5CPData";
import { getCollectionsWithCount } from "../utils/styles";
import Button from "./Button";

function Section5CollectionPosters() {
  const productsData = [...products];
  const collectionData = [...cpData];
  const filteredData = getCollectionsWithCount(productsData, collectionData)
  .sort((a, b) => a.id.localeCompare(b.id))
  .slice(0, 4);
  console.log(filteredData);

  return (
    <div
      className={`grid gap-8`}
      style={{ gridTemplateColumns: `repeat(${filteredData.length}, minmax(0, 1fr))` }}
    >
      {filteredData.map((product, index) => (
        <div key={index} className="relative flex flex-col justify-center items-center">
          <div className="img-wrapper h-80 size-cover overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-full w-full size-cover cursor-pointer hover:scale-110 transition duration-800"
            />
          </div>
          <Button className="absolute bottom-6 font-semibold!" text={product.name} textUppercase={false} variant="primaryBtnWhite" size="xl" href="/" />
        </div>
      ))}
    </div>
  );
}

export default Section5CollectionPosters;
