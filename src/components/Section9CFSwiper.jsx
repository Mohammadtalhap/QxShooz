import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Section9CFSwiper({ customerFeedbacks, className }) {
  return (
    <Swiper
      className={className}
      modules={[Grid]}
      grid={{
        rows: 2,
        fill: "row",
      }}
      slidesPerView={5}
      spaceBetween={30}
      speed={600}
    >
      {customerFeedbacks.map((feedback, index) => (
        <SwiperSlide key={index} className="overflow-hidden">
          <a href="#" className="img-wrapper group h-30 w-65">
            <img
              src={feedback.src}
              alt={feedback.alt}
              className="h-full w-full object-center transition duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-105"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Section9CFSwiper;
