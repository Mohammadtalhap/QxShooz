import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";

function NavIcons() {
  return (
    <div className='flex items-center gap-6'>
        <IoIosSearch className='text-2xl cursor-pointer hover:text-[#b63f4f]' />
        <FaRegUser className='text-lg cursor-pointer hover:text-[#b63f4f]' />
        <div className="relative group cursor-pointer">
          <IoIosHeartEmpty className='text-2xl cursor-pointer group-hover:text-[#b63f4f]' />
          {/* Count Bubble */}
          <span className="absolute bottom-0 -right-1 bg-[#ae3f4f] text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">0</span>
        </div>
        <div className="relative cursor-pointer flex items-center hover:text-[#b63f4f]">
          <AiOutlineShopping className='text-2xl cursor-pointer' />
          <span className="text-sm ">(0)</span>
        </div>
    </div>
  )
}

export default NavIcons