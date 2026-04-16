import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";

function NavIcons() {
  return (
    <div className='flex items-center gap-4 text-lg'>
        <IoIosSearch className='text-2xl cursor-pointer hover:text-[#b63f4f]' />
        <FaRegUser className='text-lg cursor-pointer hover:text-[#b63f4f]' />
        <IoIosHeartEmpty className='text-2xl cursor-pointer hover:text-[#b63f4f]' />
        <AiOutlineShopping className='text-2xl cursor-pointer hover:text-[#b63f4f]' />
    </div>
  )
}

export default NavIcons