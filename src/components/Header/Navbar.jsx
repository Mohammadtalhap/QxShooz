import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

function Navbar({ searchText, setSearchText }) {
  return (
    <div className='relative w-full flex items-center justify-between px-4 md:px-8 lg:px-0 xl:px-15'>
        {/* Left */}
        <Logo />
        {/* Middle */}
        <NavLinks />
        {/* Right */}
        <NavIcons searchText={searchText} setSearchText={setSearchText} />
    </div>
  )
}

export default Navbar