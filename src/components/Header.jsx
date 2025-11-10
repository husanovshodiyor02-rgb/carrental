import React, { useState } from "react";

import Logo from "../assets/img/Logo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container1 sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between pt-4">
        <nav className="flex items-center gap-10">
          <img src={Logo} alt="" />
          <ul className="hidden lg:flex items-center gap-6 font-medium text-lg text-center text-black">
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                Categories
              </a>
            </li>
            <select className="font-medium text-lg text-center text-black hover:text-[gray]">
              <option value="About Us">About Us</option>
              <option value="News">News</option>
              <option value="Careers">Careers</option>
              <option value="Locations">Locations</option>
            </select>
            <select className="font-medium text-lg text-center text-black hover:text-[gray]">
              <option value="Help center">Help center</option>
              <option value="FAQ">FAQ</option>
              <option value="Contact us">Contact us</option>
            </select>
          </ul>
        </nav>
        <nav className="hidden lg:flex items-center gap-5">
          <a
            href="+tel:+1 855 420 0000"
            className="font-semibold text-base text-black relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            +1 855 420 0000
          </a>
          <div className="w-[50px] h-[50px] p-[15px] rounded-[100px] bg-[#f5f5f5] hover:bg-[#d9d7d7]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3.20825C6.69676 3.20825 3.20831 6.6967 3.20831 10.9999C3.20831 15.3031 6.69676 18.7916 11 18.7916C15.0495 18.7916 18.377 15.7027 18.7558 11.7523C18.7734 11.5684 18.6789 11.3919 18.5162 11.3046C18.3534 11.2173 18.1541 11.2362 18.0107 11.3526C17.2227 11.9921 16.2192 12.3749 15.125 12.3749C12.5937 12.3749 10.5416 10.3229 10.5416 7.79158C10.5416 6.28816 11.265 4.9538 12.3847 4.11728C12.5327 4.00667 12.5999 3.81799 12.555 3.63873C12.51 3.45947 12.3619 3.32472 12.1792 3.29697C11.7944 3.23852 11.4006 3.20825 11 3.20825Z"
                fill="#555555"
              />
            </svg>
          </div>
          <button className="w-[130px] h-[50px] px-[27px] py-4 rounded-[100px] bg-[#299764] hover:bg-[#57987a] font-medium text-lg text-white flex items-center gap-2">
            Login
            <div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                  fill="white"
                />
                <path
                  d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
     

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-6 animate-fadeIn">
          <ul className="flex flex-col gap-4 pt-4 text-lg font-medium text-gray-800">
            <li>
              <a href="#" className="hover:text-[#299764] transition">
                Categories
              </a>
            </li>
            <li>
              <select className="w-full bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none">
                <option>About Us</option>
                <option>News</option>
                <option>Careers</option>
                <option>Locations</option>
              </select>
            </li>
            <li>
              <select className="w-full bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none">
                <option>Help center</option>
                <option>FAQ</option>
                <option>Contact us</option>
              </select>
            </li>
            <li>
              <a
                href="tel:+18554200000"
                className="block mt-2 text-base font-semibold hover:text-[#299764]"
              >
                +1 855 420 0000
              </a>
            </li>
            <li>
              <button className="mt-4 w-full h-[50px] rounded-full bg-[#299764] hover:bg-[#3fa178] font-medium text-lg text-white flex items-center justify-center gap-2 transition">
                Login
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                    fill="white"
                  />
                  <path
                    d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

