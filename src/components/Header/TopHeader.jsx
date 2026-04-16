import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function TopHeader() {
  return (
    <div className="hidden md:block w-full text-sm px-0 xl:px-15 py-3 inset-shadow-sm bg-[#f5f5f5]">
      <div className="flex justify-between items-center">
        {/* Left */}
        <p className="capitalize">One day delivery available</p>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Auth */}
          <div className="flex items-center gap-2">
            <a href="#" className="transition duration-300 hover:text-[#ae3f4f]">
              Login
            </a>
            <span>/</span>
            <a href="#" className="transition duration-300 hover:text-[#ae3f4f]">
              Register
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5 text-sm md:text-base">
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
