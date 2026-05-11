import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function TopHeader() {
  return (
    <div className="w-full text-xs sm:text-sm px-3 sm:px-4 md:px-6 lg:px-0 xl:px-15 py-2 sm:py-3 inset-shadow-sm bg-[#f5f5f5]">
      <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-2 sm:gap-4">
        {/* Left */}
        <p className="capitalize text-xs sm:text-sm md:text-base font-medium">One day delivery available</p>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-3 sm:gap-4 lg:gap-8">
          {/* Auth */}
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <a href="#" className="transition duration-300 hover:text-[#ae3f4f] whitespace-nowrap">
              Login
            </a>
            <span>/</span>
            <a href="#" className="transition duration-300 hover:text-[#ae3f4f] whitespace-nowrap">
              Register
            </a>
          </div>

          {/* Social */}
          <div className="hidden lg:flex items-center gap-3 sm:gap-4 lg:gap-5 text-sm md:text-base">
            <FaFacebookF className="cursor-pointer transition duration-300 hover:text-[#ae3f4f]" />
            <FaTwitter className="cursor-pointer transition duration-300 hover:text-[#ae3f4f]" />
            <FaInstagram className="cursor-pointer transition duration-300 hover:text-[#ae3f4f]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
