import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='border-b border-black/10'>
        <TopHeader />
        <Navbar />
    </header>
  )
}

export default Header