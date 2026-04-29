import Button from "./Button";

function BannerPoster({ productData }) {
  return (
    <div className="relative group/bannerCollection overflow-hidden rounded-md text-black">
      <img
        src={productData.imageSrc}
        className="transition-transform duration-500 group-hover/bannerCollection:scale-110 cursor-pointer"
        alt={productData.altText}
      />
      <div className="content-area absolute inset-0 my-auto size-fit flex flex-col justify-center gap-6 px-8">
        <p className="tag uppercase text-sm font-medium tracking-widest">
          {productData.tag}
        </p>
        <h3 className="title text-3xl font-semibold">
          {productData.title1} <br /> {productData.title2}
        </h3>
        <Button variant={productData.btnVariant} />
      </div>
    </div>
  );
}

export default BannerPoster;