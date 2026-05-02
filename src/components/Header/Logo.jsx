function Logo({ className = "" }) {
  return (
    <h1 className={`text-2xl font-bold cursor-pointer py-8 ${className}`}>
      <img
        src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250"
        alt="shooz logo"
      />
    </h1>
  );
}

export default Logo;
