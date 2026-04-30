import React from "react";
import cpData from "../data/Section5CPData";
import Button from "./Button";

function Section5CollectionPosters() {
  const collectionData = [...cpData];
  return (
    <div
      className={`grid gap-8`}
      style={{ gridTemplateColumns: `repeat(${collectionData.length}, minmax(0, 1fr))` }}
    >
      {collectionData.map((product, index) => (
        <div key={index} className="relative flex flex-col justify-center items-center">
          <div className="img-wrapper h-80 size-cover overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.title}
              className="h-full w-full size-cover cursor-pointer hover:scale-110 transition duration-800"
            />
          </div>
          <Button className="absolute bottom-6 font-semibold!" text={product.title} textUppercase={false} variant="primaryBtnWhite" size="xl" href="/" />
        </div>
      ))}
    </div>
  );
}

export default Section5CollectionPosters;
