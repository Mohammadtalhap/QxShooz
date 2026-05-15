import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

function Navbar({ wishlist, setWishlist, toggleWishlist, wishlistProducts, cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, searchText, setSearchText }) {
  return (
    <div className='relative w-full flex items-center justify-between px-4 md:px-8 lg:px-0 xl:px-15'>
        {/* Left */}
        <Logo />
        {/* Middle */}
        <NavLinks wishlist={wishlist} setWishlist={setWishlist} toggleWishlist={toggleWishlist} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
        {/* Right */}
        <NavIcons wishlist={wishlist} toggleWishlist={toggleWishlist} wishlistProducts={wishlistProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} searchText={searchText} setSearchText={setSearchText} />
    </div>
  )
}

export default Navbar