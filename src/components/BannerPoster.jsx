import Button from "./Button";

function BannerPoster({ productData, cardSize="h1", className="", tagClass="", titleClass="" }) {
  const hasWidthClass = /\bw-\S+/.test(titleClass);
  const positionClass = {
    center: "inset-0 my-auto",
    bottom: "inset-x-0 bottom-0 p-16"
  }
  const sizes = {
    h1: "h-70 bg-red-400",
    h2: "h-90"
  }
  return (
    <div className={`relative group/bannerCollection overflow-hidden rounded-md text-black ${sizes[cardSize]} ${className}`}>
      <img
        src={productData.imageSrc}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/bannerCollection:scale-110 cursor-pointer"
        alt={productData.altText}
      />
      <div className={`content-area absolute size-fit flex flex-col gap-6 p-8 ${positionClass[productData.position]}`}>
        <p className={`tag uppercase text-sm font-medium tracking-widest ${tagClass}`}>
          {productData.tag}
        </p>
        <h3 className={`title text-3xl font-semibold ${hasWidthClass ? "" : "w-40"} ${titleClass}`}>
          {productData.title}
        </h3>
        <Button variant={productData.btnVariant} />
      </div>
    </div>
  );
}

export default BannerPoster;