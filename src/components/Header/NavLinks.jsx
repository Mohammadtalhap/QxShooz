
import NavLinkItems from "./NavLinkItems.jsx";

function NavLinks() {
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
            <NavLinkItems key={index} {...item} />
        ))}
    </nav>
  );
}

export default NavLinks;
