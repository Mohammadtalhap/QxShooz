function Logo({ className = "" }) {
  return (
    <h1 className={`h-8 sm:h-12 md:h-18 lg:h-22 aspect-5/3 flex justify-center items-center text-2xl font-bold cursor-pointer py-8 ${className}`}>
      <img
        src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png"
        alt="shooz logo"
        className=""
      />
    </h1>
  );
}

export default Logo;
