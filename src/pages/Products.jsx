import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsGridWithFilters from "../components/ProductsGridWithFilters";
import Section from "../components/Section";
import SidebarFilters from "../components/SidebarFilters";
import products from "../data/Products";
import collectionPosters from "../data/Section5CPData";
import {
  borderAnimation,
  createSlug,
  getCollectionsWithCount,
} from "../utils/styles";
import { Features } from "tailwindcss";
import { CgProductHunt } from "react-icons/cg";

function Products({
  wishlist,
  setWishlist,
  toggleWishlist,
  cartItems,
  setCartItems,
  addToCart,
  searchText,
  setSearchText,
}) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const displayName = pathSegments[1]
    ? pathSegments[1].replaceAll("-", " ")
    : "Products";
  const baseProducts = [...products];
  const collectionsData = getCollectionsWithCount(
    baseProducts,
    collectionPosters,
  ).sort((a, b) => a.name.localeCompare(b.name));

  let collectionImage = "";
  collectionsData.forEach((collection) => {
    createSlug(collection.name).replaceAll("-", " ") === displayName
      ? (collectionImage = collection.imageSrc)
      : "";
  });
  let filtersMenu = true;

  const [sortOption, setSortOption] = useState("featured");

  // Array Filtering Function
  const matchArrayFilter = (selectedArray, productValue) => {
    if (selectedArray.length === 0) return true;
    return selectedArray.includes(productValue);
  };

  let filteredProducts = [...baseProducts];
  // Searching
  if (searchText.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  // Collection Link Based Filtering
  const collectionSlug = pathSegments[1];
  if (collectionSlug) {
    filteredProducts = filteredProducts.filter((product) =>
      product.collections.some(
        (collection) => createSlug(collection) === collectionSlug,
      ),
    );
  }

  // Filtering
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    brands: [],
    categories: [],
    materials: [],
    sizes: [],
    productTypes: [],
    features: [],
  });

  // Filtering Toggle Function
  const toggleFilter = (FilterType, value) => {
    setSelectedFilters((prev) => {
      const alreadySelected = prev[FilterType].includes(value);
      return {
        ...prev,
        [FilterType]: alreadySelected
          ? prev[FilterType].filter((item) => item !== value)
          : [...prev[FilterType], value],
      };
    });
  };

  // Multi Filter Engine
  filteredProducts = filteredProducts.filter((product) => {
    const matchesBrand = matchArrayFilter(
      selectedFilters.brands,
      product.brand,
    );

    const matchesCategory = matchArrayFilter(
      selectedFilters.categories,
      product.category,
    );

    const matchesMaterial = matchArrayFilter(
      selectedFilters.materials,
      product.material,
    );

    const matchesProductType = matchArrayFilter(
      selectedFilters.productTypes,
      product.productType,
    );

    const matchesAvailability =
      selectedFilters.availability.length === 0 ||
      selectedFilters.availability.includes(
        product.availability ? "In Stock" : "Out of Stock",
      );

    const matchesFeatures =
      selectedFilters.features.length === 0 ||
      selectedFilters.features.some((feature) =>
        product.features.includes(feature.toLowerCase()),
      );

    const matchesSizes =
      selectedFilters.sizes.length === 0 ||
      selectedFilters.sizes.some((size) =>
        product.sizes.includes(size.toLowerCase()),
      );

    return (
      matchesBrand &&
      matchesCategory &&
      matchesMaterial &&
      matchesProductType &&
      matchesAvailability &&
      matchesFeatures &&
      matchesSizes
    );
  });

  // Sorting
  filteredProducts = [...filteredProducts];
  filteredProducts.sort((a, b) => {
    if (sortOption === "featured") {
      return 0;
    } else if (sortOption === "price-low-high") {
      return a.price.replace("$", "") - b.price.replace("$", "");
    } else if (sortOption === "price-high-low") {
      return b.price.replace("$", "").localeCompare(a.price.replace("$", ""));
    } else if (sortOption === "name-a-z") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "name-z-a") {
      return b.title.localeCompare(a.title);
    }
  });

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
            <SidebarFilters
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
            />
          </aside>

          {/* Right Content */}
          <section className="products">
            <ProductsGridWithFilters
              products={filteredProducts}
              wishlist={wishlist}
              setWishlist={setWishlist}
              toggleWishlist={toggleWishlist}
              cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart}
              sortOption={sortOption}
              setSortOption={setSortOption}
              selectedFilters={selectedFilters}
            />
          </section>
        </div>
      </Section>
    </div>
  );
}

export default Products;
