import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

function Header({ wishlist, setWishlist, toggleWishlist, wishlistProducts, cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <header className='border-b border-black/10'>
        <TopHeader />
        <Navbar wishlist={wishlist} setWishlist={setWishlist} toggleWishlist={toggleWishlist} wishlistProducts={wishlistProducts} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />
    </header>
  )
}

export default Header