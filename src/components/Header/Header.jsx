import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

function Header({ searchText, setSearchText }) {
  return (
    <header className='border-b border-black/10'>
        <TopHeader />
        <Navbar searchText={searchText} setSearchText={setSearchText} />
    </header>
  )
}

export default Header