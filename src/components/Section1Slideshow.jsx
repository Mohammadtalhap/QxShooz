import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import BigSlide from "./BigSlide";
import slideshow1Images from "../data/Slideshow1Images";

function Section1Slideshow() {
  const imageData = [...slideshow1Images];
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ 
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      className="w-full"
    >
      {imageData.map((slide, index) => (
        <SwiperSlide className="group" key={index}>
          <BigSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Section1Slideshow;
