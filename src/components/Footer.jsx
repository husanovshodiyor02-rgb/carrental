import React from 'react'
import ScrollToTopButton from "./ScrollToTopButton";
import Logo from '../assets/img/Logo.svg'

const Footer = () => {
  return (
    <footer>
      <hr className="border-t-[1.50px] border-t-[#e5e7ea] border-solid mt-25 mb-8" />
      <div className="container1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div>
          <img src={Logo} alt="" />
          <p className="font-normal text-xs leading-[167%] text-[#555]">
            Car rental offers a wide range of cars <br /> available for rent in
            Newark EWR <br /> Airport NJ. We pride ourselves in our <br />{" "}
            customer service, and hassle-free <br /> renting experience.
          </p>
        </div>
        <div className="pt-5 md:pl-10">
          <h3 className="font-medium text-base text-black">Main</h3>
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            My Bookings
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Reservation
          </a>
          <br />
        </div>
        <div className="pt-5">
          <h3 className="font-medium text-base text-black">Categories</h3>
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Compact
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Sports cars
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Vans
          </a>
          <br />
        </div>
        <div className="pt-5">
          <h3 className="font-medium text-base text-black">Company</h3>
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            About us
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Careers
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            News
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            Contact us
          </a>
          <br />
        </div>
        <div className="pt-5">
          <h3 className="font-medium text-base text-black">Our Locations</h3>
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            2118 Thornridge Cir. Syracuse
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            4140 Parker Rd. Allentown
          </a>
          <br />
          <a
            href="#"
            className="font-medium text-sm text-[#555] hover:text-black hover:underline"
          >
            4517 Washington Ave.
          </a>
          <br />
        </div>
      </div>
      <hr className="text-[#e5e7ea] my-10" />
      <div className="container1 flex flex-col sm:flex-row gap-20">
        <div>
          <h3 className="font-medium text-base leading-[150%] text-black">
            © 2022 Car rental <br /> Terms & Conditions
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-10">
          <div className="">
            <h3 className="font-medium text-base text-black pb-2">Contact</h3>
            <a
              href="#"
              className="font-medium text-sm text-[#555] hover:text-black hover:underline"
            >
              +1 855 420 0000
            </a>
            <br />
            <a
              href="#"
              className="font-medium text-sm text-[#555] hover:text-black hover:underline"
            >
              carrental@gmail.com
            </a>
            <br />
          </div>
          <div className="">
            <h3 className="font-medium text-base text-black pb-2">
              Hours of operation
            </h3>
            <a
              href="#"
              className="font-medium text-sm text-[#555] hover:text-black hover:underline"
            >
              8:00 - 21:00 Mon-Sat
            </a>
            <br />
            <a
              href="#"
              className="font-medium text-sm text-[#555] hover:text-black hover:underline"
            >
              9:00 - 15:00 Sundays
            </a>
            <br />
          </div>
          <div>
            <h3 className="font-medium text-base text-black pb-2">
              Social network
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <a href="https://www.instagram.com/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="black" />
                    <path
                      d="M20 11.8072C22.6506 11.8072 23.0121 11.8072 24.0964 11.8072C25.0602 11.8072 25.5422 12.0482 25.9036 12.1687C26.3855 12.4096 26.747 12.5301 27.1084 12.8916C27.4699 13.253 27.7108 13.6145 27.8313 14.0964C27.9518 14.4578 28.0723 14.9398 28.1928 15.9036C28.1928 16.988 28.1928 17.2289 28.1928 20C28.1928 22.7711 28.1928 23.0121 28.1928 24.0964C28.1928 25.0602 27.9518 25.5422 27.8313 25.9036C27.5904 26.3855 27.4699 26.747 27.1084 27.1084C26.747 27.4699 26.3855 27.7108 25.9036 27.8313C25.5422 27.9518 25.0602 28.0723 24.0964 28.1928C23.0121 28.1928 22.7711 28.1928 20 28.1928C17.2289 28.1928 16.988 28.1928 15.9036 28.1928C14.9398 28.1928 14.4578 27.9518 14.0964 27.8313C13.6145 27.5904 13.253 27.4699 12.8916 27.1084C12.5301 26.747 12.2892 26.3855 12.1687 25.9036C12.0482 25.5422 11.9277 25.0602 11.8072 24.0964C11.8072 23.0121 11.8072 22.7711 11.8072 20C11.8072 17.2289 11.8072 16.988 11.8072 15.9036C11.8072 14.9398 12.0482 14.4578 12.1687 14.0964C12.4096 13.6145 12.5301 13.253 12.8916 12.8916C13.253 12.5301 13.6145 12.2892 14.0964 12.1687C14.4578 12.0482 14.9398 11.9277 15.9036 11.8072C16.988 11.8072 17.3494 11.8072 20 11.8072ZM20 10C17.2289 10 16.988 10 15.9036 10C14.8193 10 14.0964 10.241 13.494 10.4819C12.8916 10.7229 12.2892 11.0843 11.6867 11.6867C11.0843 12.2892 10.8434 12.7711 10.4819 13.494C10.241 14.0964 10.1205 14.8193 10 15.9036C10 16.988 10 17.3494 10 20C10 22.7711 10 23.0121 10 24.0964C10 25.1807 10.241 25.9036 10.4819 26.506C10.7229 27.1084 11.0843 27.7108 11.6867 28.3133C12.2892 28.9157 12.7711 29.1566 13.494 29.5181C14.0964 29.759 14.8193 29.8795 15.9036 30C16.988 30 17.3494 30 20 30C22.6506 30 23.0121 30 24.0964 30C25.1807 30 25.9036 29.759 26.506 29.5181C27.1084 29.2771 27.7108 28.9157 28.3133 28.3133C28.9157 27.7108 29.1566 27.2289 29.5181 26.506C29.759 25.9036 29.8795 25.1807 30 24.0964C30 23.0121 30 22.6506 30 20C30 17.3494 30 16.988 30 15.9036C30 14.8193 29.759 14.0964 29.5181 13.494C29.2771 12.8916 28.9157 12.2892 28.3133 11.6867C27.7108 11.0843 27.2289 10.8434 26.506 10.4819C25.9036 10.241 25.1807 10.1205 24.0964 10C23.0121 10 22.7711 10 20 10Z"
                      fill="white"
                    />
                    <path
                      d="M20 14.8193C17.1084 14.8193 14.8193 17.1084 14.8193 20C14.8193 22.8916 17.1084 25.1807 20 25.1807C22.8916 25.1807 25.1807 22.8916 25.1807 20C25.1807 17.1084 22.8916 14.8193 20 14.8193ZM20 23.3735C18.1928 23.3735 16.6265 21.9277 16.6265 20C16.6265 18.1928 18.0723 16.6265 20 16.6265C21.8072 16.6265 23.3735 18.0723 23.3735 20C23.3735 21.8072 21.8072 23.3735 20 23.3735Z"
                      fill="white"
                    />
                    <path
                      d="M25.3012 15.9036C25.9666 15.9036 26.506 15.3642 26.506 14.6988C26.506 14.0334 25.9666 13.494 25.3012 13.494C24.6358 13.494 24.0964 14.0334 24.0964 14.6988C24.0964 15.3642 24.6358 15.9036 25.3012 15.9036Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.twiter.com/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="black" />
                    <path
                      d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="black" />
                    <path
                      d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.whatsapp.com/">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="black" />
                    <path
                      d="M27.9268 12.0625C25.9512 10.0937 23.3171 9 20.5366 9C14.7561 9 10.0732 13.6667 10.0732 19.4271C10.0732 21.25 10.5854 23.0729 11.4634 24.6042L10 30L15.561 28.5417C17.0976 29.3438 18.7805 29.7812 20.5366 29.7812C26.3171 29.7812 31 25.1146 31 19.3542C30.9268 16.6563 29.9024 14.0312 27.9268 12.0625ZM25.5854 23.1458C25.3659 23.7292 24.3415 24.3125 23.8293 24.3854C23.3902 24.4583 22.8049 24.4583 22.2195 24.3125C21.8537 24.1667 21.3415 24.0208 20.7561 23.7292C18.122 22.6354 16.439 20.0104 16.2927 19.7917C16.1463 19.6458 15.1951 18.4062 15.1951 17.0937C15.1951 15.7812 15.8537 15.1979 16.0732 14.9062C16.2927 14.6146 16.5854 14.6146 16.8049 14.6146C16.9512 14.6146 17.1707 14.6146 17.3171 14.6146C17.4634 14.6146 17.6829 14.5417 17.9024 15.0521C18.122 15.5625 18.6341 16.875 18.7073 16.9479C18.7805 17.0938 18.7805 17.2396 18.7073 17.3854C18.6341 17.5312 18.561 17.6771 18.4146 17.8229C18.2683 17.9687 18.1219 18.1875 18.0488 18.2604C17.9024 18.4062 17.7561 18.5521 17.9024 18.7708C18.0488 19.0625 18.561 19.8646 19.3659 20.5937C20.3902 21.4687 21.1951 21.7604 21.4878 21.9063C21.7805 22.0521 21.9268 21.9792 22.0732 21.8333C22.2195 21.6875 22.7317 21.1042 22.878 20.8125C23.0244 20.5208 23.2439 20.5938 23.4634 20.6667C23.6829 20.7396 25 21.3958 25.2195 21.5417C25.5122 21.6875 25.6585 21.7604 25.7317 21.8333C25.8049 22.0521 25.8049 22.5625 25.5854 23.1458Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}

export default Footer