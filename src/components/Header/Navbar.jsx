import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

function Navbar() {
  return (
    <div className='w-full flex items-center justify-between px-4 md:px-8 lg:px-15'>
        {/* Left */}
        <Logo />
        {/* Middle */}
        <NavLinks />
        {/* Right */}
        <NavIcons />
    </div>
  )
}

export default Navbar