
import NavLinkItems from "./NavLinkItems.jsx";

function NavLinks({ wishlist, setWishlist, toggleWishlist, cartItems, setCartItems, addToCart }) {
  const navItems = [
    { title: "Home", isActive: true },
    { title: "Shop", hasDropdown: true },
    { title: "Product", hasDropdown: true },
    { title: "Blog", hasDropdown: true },
    { title: "Pages", hasDropdown: true },
    { title: "Buy Now", badge: "Sale" },
  ];
  return (
    <nav className="hidden lg:flex items-center gap-8 font-medium tracking-widest">
        {navItems.map((item, index) =>(
            <NavLinkItems key={index} {...item} wishlist={wishlist} setWishlist={setWishlist} toggleWishlist={toggleWishlist} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
        ))}
    </nav>
  );
  // item.title === "Shop" && <Dropdown><ShopDropdown /></Dropdown>
}

export default NavLinks;
