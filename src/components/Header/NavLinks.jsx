import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

function NavLinks() {
  return (
    <nav className='hidden lg:flex items-center gap-8 font-medium'>
        <a href="#" className='underline underline-offset-8 decoration-1 text-[#b63f4f]'>Home</a>
        <a href="#" className='relative group/shop hover:text-[#b63f4f]'>
            <span className='flex gap-1 items-center'>Shop <FaAngleDown className='text-xs' /></span>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover/shop:w-full"></span>
        </a>
        <a href="#" className='relative group/shop hover:text-[#b63f4f]'>
            <span className='flex gap-1 items-center'>Product <FaAngleDown className='text-xs' /></span>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover/shop:w-full"></span>
        </a>
        <a href="#" className='relative group/shop hover:text-[#b63f4f]'>
            <span className='flex gap-1 items-center'>Blog <FaAngleDown className='text-xs' /></span>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover/shop:w-full"></span>
        </a>
        <a href="#" className='relative group/shop hover:text-[#b63f4f]'>
            <span className='flex gap-1 items-center'>Pages <FaAngleDown className='text-xs' /></span>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover/shop:w-full"></span>
        </a>
        <a href="#" className='relative group/shop hover:text-[#b63f4f]'>
            <span className='flex gap-1 items-center'>Buy Now</span>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#b63f4f] transition-all duration-300 group-hover/shop:w-full"></span>
        </a>
    </nav>
  )
}

export default NavLinks