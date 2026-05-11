import { MdArrowRightAlt } from "react-icons/md";
import Button from "./Button";

function BigSlide({ slide }) {
  const base = "text-white space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10 z-10 absolute";
  const animate =
    "opacity-0 translate-y-20 transition duration-2000 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0";
  const variants = {
    left: base + " left-4 sm:left-6 md:left-10 lg:left-20 right-4 sm:right-6 md:right-auto",
    center: base + " left-1/2 -translate-x-1/2 px-4 sm:px-6 md:px-0",
    right: base + " right-4 sm:right-6 md:right-10 lg:right-20 left-4 sm:left-6 md:left-auto",
  };
  return (
    <div
      className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${slide.bgSrc})` }}
    >
      <div className="overlay absolute inset-0 bg-black/40 z-9"></div>
      <div className={variants[slide.alignment]}>
        <p className={`tag-line uppercase font-semibold text-xs sm:text-sm md:text-base tracking-widest ${animate}`}>
          {slide.tag}
        </p>
        <h2 className={`capitalize font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wide ${animate}`}>
          {slide.heading1} <br /> {slide.heading2}
        </h2>
        <h4 className={`font-normal text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide ${animate}`}>
          {slide.detail1} <br /> {slide.detail2}
        </h4>
        <Button className={animate} size="md" icon={<MdArrowRightAlt />} href={"/"} />
      </div>
    </div>
  );
}

export default BigSlide;
