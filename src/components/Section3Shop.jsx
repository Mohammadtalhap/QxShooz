import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../data/Products";
import ProductCard from "./ProductCard";

function Section3Shop({ activeTab }) {
  const filteredProducts = products.filter(product => product.tag === activeTab);

  return (
    <Swiper loop={true} slidesPerView={4}>
      {filteredProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard cardObject={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Section3Shop;
