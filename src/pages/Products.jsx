import React from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "../components/Section";
import { createSlug } from "../utils/styles";
import products from "../data/Products";
import { getCollectionsWithCount } from "../utils/styles";
import { borderAnimation } from "../utils/styles";
import collectionPosters from "../data/Section5CPData";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SidebarFilters from "../components/SidebarFilters";
import ProductsGridWithFilters from "../components/ProductsGridWithFilters";

function Products() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const displayName = pathSegments[1]
    ? pathSegments[1].replaceAll("-", " ")
    : "Products";
  const productsData = [...products];
  const collectionsData = getCollectionsWithCount(
    productsData,
    collectionPosters,
  ).sort((a, b) => a.name.localeCompare(b.name));
  console.log(displayName);

  let collectionImage = "";
  collectionsData.forEach((collection) => {
    createSlug(collection.name).replaceAll("-", " ") === displayName
      ? (collectionImage = collection.imageSrc)
      : "";
  });
  let filtersMenu = true;

  return (
    <div className="">
      <Section>
        <div className="flex gap-2 text-sm py-4">
          <Link to="/" className="text-[#ffc000]">
            Home
          </Link>
          <span className="text-xs flex items-center justify-center">/</span>
          <span className="capitalize">{displayName}</span>
        </div>
      </Section>

      <Section fullWidth>
        <div className="img-wrapper relative h-80 w-full">
          <img
            src={
              collectionImage
                ? collectionImage
                : "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360"
            }
            alt="big poster"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <span className="h-full flex justify-center items-center text-4xl font-semibold text-white capitalize">
              {displayName}
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full py-6 border-b-2 border-[#e9e9e9]">
          <div className="grid grid-cols-1 md:flex justify-center gap-1 md:gap-3 lg:gap-6">
            {collectionsData.map((collection) => (
              <Link
                key={collection.name}
                to={`/products/${createSlug(collection.name)}`}
                className={`${borderAnimation} from-black to-black`}
              >
                {collection.name}{" "}
                <span className="text-gray-500">({collection.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          breakpoints={{
            425: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
          }}
        >
          {collectionsData.map((collection) => (
            <SwiperSlide key={collection.name}>
              <Link
                to={`/products/${createSlug(collection.name)}`}
                className="group relative h-30"
              >
                <div className="img-wrapper h-full w-full overflow-hidden">
                  <img
                    src={collection.imageSrc}
                    alt={collection.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 text-white text-sm md:text-base lg:text-lg xl:text-xl transition duration-500 font-semibold translate-y-6 group-hover:translate-y-0">
                  <p className="">{collection.name}</p>
                  <p className="font-normal text-base opacity-0 visibility-hidden transition duration-500 group-hover:opacity-100 group-hover:visibility-visible">
                    {collection.count} Products
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[160px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[320px_1fr] gap-15 pb-20">
          {/* Left Sidebar */}
          <aside className="hidden md:flex filters">
            <SidebarFilters />
          </aside>

          {/* Right Content */}
          <section className="products">
            <ProductsGridWithFilters />
          </section>
        </div>
      </Section>
    </div>
  );
}

export default Products;
