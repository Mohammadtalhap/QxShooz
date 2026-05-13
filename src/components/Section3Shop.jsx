import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../data/Products";
import ProductCard from "./ProductCard";

function Section3Shop({ activeTab, wishlist, setWishlist, toggleWishlist, cartItems, setCartItems, addToCart }) {
  const filteredProducts = products.filter(
    (product) => product.tag === activeTab,
  );

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      slidesPerGroup={1}
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 35
        },
      }}
      loop={true}
    >
      {filteredProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard wishlist={wishlist} setWishlist={setWishlist} toggleWishlist={toggleWishlist} cardObject={product} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Section3Shop;
