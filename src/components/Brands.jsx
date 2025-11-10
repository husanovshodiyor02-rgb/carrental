import React from 'react'
import Ford from "../assets/img/ford.png";
import Nissan from '../assets/img/nissan.png'
import Toyota from "../assets/img/toyota.png";
import Doodge from '../assets/img/doodge.png'
import Hyundai from '../assets/img/hyundai.png'
import Jeep from "../assets/img/jeep.png";
import Service from '../assets/img/service.jpg'

const Brands = () => {
  return (
    <section className="container1">
      <h2 className="font-medium text-2xl text-black mt-20">
        More than 50 brands of cars
      </h2>
      <div className="flex items-center justify-between gap-10 overflow-x-auto mt-7 mb-20">
        <img src={Ford} alt="" />
        <img src={Nissan} alt="" />
        <img src={Toyota} alt="" />
        <img src={Doodge} alt="" />
        <img src={Hyundai} alt="" />
        <img src={Jeep} alt="" />
      </div>
      <h2 className="font-semibold md:text-4xl text-[25px] text-center text-black">
        Unparalleled service
      </h2>
      <p className="font-normal text-base leading-[150%] text-center text-[#555]">
        Whether you are looking for Newark Airport car rental, an insurance
        replacement <br /> vehicle or minivan to take on vacation Car rental has
        it all.
      </p>
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div>
          <div className="lg:w-[590px] w-auto md:h-[216px] h-auto rounded-[20px] bg-[#f5f5f5] py-8 px-7">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[32px] text-[25px] text-black">
                Book online, <br /> pay online
              </h2>
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30 9.37427L48.184 9.8884C51.3971 9.97925 54.0546 12.4184 54.42 15.6119C55.2288 22.6809 55.2288 29.8191 54.42 36.8882C54.0546 40.0817 51.3971 42.5208 48.184 42.6116L33.125 43.0374V48.125H42.5C43.5355 48.125 44.375 48.9645 44.375 50C44.375 51.0356 43.5355 51.875 42.5 51.875H17.5C16.4645 51.875 15.625 51.0356 15.625 50C15.625 48.9645 16.4645 48.125 17.5 48.125H26.875V43.0374L11.8159 42.6116C8.60284 42.5208 5.9453 40.0817 5.57991 36.8882C4.77109 29.8191 4.77109 22.6809 5.57991 15.6119C5.9453 12.4184 8.60284 9.97925 11.8159 9.8884L30 9.37427ZM12.5 34.375C11.4645 34.375 10.625 35.2145 10.625 36.25C10.625 37.2856 11.4645 38.125 12.5 38.125H47.5C48.5355 38.125 49.375 37.2856 49.375 36.25C49.375 35.2145 48.5355 34.375 47.5 34.375H12.5Z"
                    fill="#299764"
                  />
                </svg>
              </div>
            </div>

            <p className="font-normal text-base leading-[150%] text-[#555] pt-2">
              Complete the booking process A-Z, with our <br /> easy online
              system
            </p>
          </div>
          <div className="lg:w-[590px] w-auto md:h-[216px] h-auto rounded-[20px] bg-[#f5f5f5] py-8 px-7 mt-5">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[32px] text-[25px] text-black">
                Unparalleled <br /> customer service
              </h2>
              <div>
                <svg
                  width="50"
                  height="46"
                  viewBox="0 0 50 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.375 0C14.1973 0 10 4.19733 10 9.375C10 14.5527 14.1973 18.75 19.375 18.75C24.5527 18.75 28.75 14.5527 28.75 9.375C28.75 4.19733 24.5527 0 19.375 0Z"
                    fill="#299764"
                  />
                  <path
                    d="M9.375 23.75C4.19733 23.75 0 27.9473 0 33.125V36.0957C0 37.9788 1.36471 39.5844 3.22318 39.8878C8.75 40.7901 14.3335 41.2263 19.9152 41.1962C20.3055 41.1941 20.5415 40.7624 20.3506 40.422C18.9332 37.8944 18.125 34.9791 18.125 31.875C18.125 29.9073 18.4498 28.0154 19.0486 26.2501C19.1611 25.9183 18.9204 25.5656 18.5704 25.5501C16.9408 25.4777 15.3186 25.1852 13.749 24.6726L11.5852 23.9661C11.1467 23.8229 10.6884 23.75 10.2272 23.75H9.375Z"
                    fill="#299764"
                  />
                  <path
                    d="M37.5 28.125C37.5 27.0895 36.6605 26.25 35.625 26.25C34.5895 26.25 33.75 27.0895 33.75 28.125V32.5568C33.75 33.1567 34.037 33.7204 34.5222 34.0732L37.0222 35.8914C37.8597 36.5005 39.0323 36.3153 39.6414 35.4778C40.2505 34.6403 40.0653 33.4677 39.2278 32.8586L37.5 31.602V28.125Z"
                    fill="#299764"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.625 45.625C43.2189 45.625 49.375 39.4689 49.375 31.875C49.375 24.2811 43.2189 18.125 35.625 18.125C28.0311 18.125 21.875 24.2811 21.875 31.875C21.875 39.4689 28.0311 45.625 35.625 45.625ZM35.625 41.875C41.1478 41.875 45.625 37.3978 45.625 31.875C45.625 26.3522 41.1478 21.875 35.625 21.875C30.1022 21.875 25.625 26.3522 25.625 31.875C25.625 37.3978 30.1022 41.875 35.625 41.875Z"
                    fill="#299764"
                  />
                </svg>
              </div>
            </div>

            <p className="font-normal text-base leading-[150%] text-[#555] pt-2">
              We're here to help. We pride ourselves in <br /> our customer
              service
            </p>
          </div>
        </div>
        <div>
          <div className="lg:w-[590px] w-auto md:h-[216px] h-auto rounded-[20px] bg-[#f5f5f5] py-8 px-7">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[32px] text-[25px] text-black">
                Guaranteed car <br /> reservation
              </h2>
              <div>
                <svg
                  width="37"
                  height="40"
                  viewBox="0 0 37 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0267 0.806179C19.2415 -0.268727 17.0085 -0.268726 15.2233 0.80618L13.9326 1.58341C10.8007 3.46926 7.28478 4.62648 3.64508 4.96939L2.83188 5.04601C1.22665 5.19724 0 6.5449 0 8.15723V12.2669C0 19.2135 2.82021 25.8624 7.81459 30.6906L15.953 38.5581C17.1643 39.7291 19.0857 39.7291 20.297 38.5581L28.4354 30.6906C33.4298 25.8624 36.25 19.2135 36.25 12.2669V8.15723C36.25 6.5449 35.0234 5.19724 33.4181 5.04601L32.6049 4.96939C28.9652 4.62648 25.4493 3.46926 22.3174 1.58341L21.0267 0.806179Z"
                    fill="#299764"
                  />
                </svg>
              </div>
            </div>

            <p className="font-normal text-base leading-[150%] text-[#555] pt-2">
              When you book with Car rental, you can be <br /> confident your
              car will be waiting for you
            </p>
          </div>
          <div className="lg:w-[590px] w-auto md:h-[216px] h-auto rounded-[20px] bg-[#f5f5f5] py-8 px-7 mt-5">
            <div className="flex justify-between">
              <h2 className="font-medium lg:text-[32px] text-[25px] text-black">
                No reservation or <br /> booking fees
              </h2>
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.5254 25.4283L52.5319 34.4855C52.4681 35.3483 52.3859 36.2102 52.2853 37.0704C52.1171 38.5089 50.9477 39.6693 49.4792 39.8334C44.8798 40.3474 40.1203 40.3474 35.5209 39.8334C34.0524 39.6693 32.883 38.5089 32.7147 37.0704C32.1653 32.3729 32.1653 27.6273 32.7147 22.9298C32.883 21.4913 34.0524 20.3309 35.5209 20.1668C40.1203 19.6527 44.8798 19.6527 49.4792 20.1668C50.9477 20.3309 52.1171 21.4913 52.2853 22.9298C52.3826 23.7613 52.4626 24.5943 52.5254 25.4283ZM42.5 26.2501C40.429 26.2501 38.75 27.929 38.75 30.0001C38.75 32.0712 40.429 33.7501 42.5 33.7501C44.5711 33.7501 46.25 32.0712 46.25 30.0001C46.25 27.929 44.5711 26.2501 42.5 26.2501Z"
                    fill="#299764"
                  />
                  <path
                    d="M51.009 15.0994C51.3977 15.7725 50.6682 16.5263 49.8957 16.44C45.0195 15.895 39.9805 15.895 35.1043 16.44C31.931 16.7947 29.3645 19.2935 28.9901 22.4942C28.4069 27.4811 28.4069 32.5191 28.9901 37.506C29.3645 40.7067 31.931 43.2055 35.1043 43.5602C39.9806 44.1052 45.0195 44.1052 49.8957 43.5602C50.6733 43.4733 51.4088 44.2323 51.0164 44.9092C49.0699 48.2663 45.5996 50.6093 41.5671 51.0336L39.9374 51.2051C31.6603 52.0761 23.3117 52.0187 15.0473 51.0339L13.9674 50.9052C9.51212 50.3743 5.982 46.8934 5.38857 42.446C4.28633 34.1853 4.28633 25.8149 5.38857 17.5542C5.982 13.1068 9.51212 9.62592 13.9674 9.095L15.0473 8.96633C23.3117 7.98151 31.6603 7.92407 39.9374 8.79508L41.5671 8.96657C45.603 9.39128 49.0678 11.7378 51.009 15.0994Z"
                    fill="#299764"
                  />
                </svg>
              </div>
            </div>

            <p className="font-normal text-base leading-[150%] text-[#555] pt-2">
              No cancellation fees if cancelled 24 hours <br /> prior to booking
              time
            </p>
          </div>
        </div>
      </div>

      <div className="w-auto h-auto rounded-[20px] border-[1.50px] border-solid border-[#e5e7ea] mt-30 mb-10 flex justify-between">
        <div className='py-10 px-7'>
          <h2 className="font-semibold md:text-4xl text-[25px] text-black">
            Car rental keeps you safe
          </h2>
          <p className="font-normal text-base leading-[150%] text-[#555] pt-2">
            The safety of our employees and renters is our number one priority.
            In <br /> addition to being confident your vehicle is cleaned and
            sanitized every <br /> time you rent, you can also feel confident
            that we will take every <br /> opportunity to enhance the health and
            safety measures currently <br /> practiced in our operations.
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-25'>
            <div className="w-[200px] h-40 rounded-2xl bg-[#f5f5f5] p-4">
              <div className="flex justify-between">
                <div></div>
                <div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.1184 4.06252L18.1127 4.0625H11.8872L11.8816 4.06252H10.625C10.1072 4.06252 9.6875 4.48225 9.6875 5.00002C9.6875 5.51778 10.1072 5.93752 10.625 5.93752H10.9497V12.2639C5.38509 14.8944 4.5812 22.5649 9.58274 26.2744L9.95149 26.5479C12.9498 28.7717 17.0501 28.7717 20.0485 26.5479L20.4172 26.2744C25.4188 22.5649 24.6149 14.8944 19.0502 12.2639V5.93752H19.375C19.8928 5.93752 20.3125 5.51778 20.3125 5.00002C20.3125 4.48225 19.8928 4.06252 19.375 4.06252H18.1184ZM9.87107 15.3125H20.1289C19.5636 14.7185 18.8637 14.2197 18.0345 13.8622C17.513 13.6374 17.1752 13.1239 17.1752 12.556V5.93752H12.8247V12.556C12.8247 13.1239 12.487 13.6374 11.9655 13.8622C11.1363 14.2197 10.4364 14.7185 9.87107 15.3125ZM12.5 21.25C11.8096 21.25 11.25 21.8097 11.25 22.5C11.25 23.1904 11.8096 23.75 12.5 23.75C13.1904 23.75 13.75 23.1904 13.75 22.5C13.75 21.8097 13.1904 21.25 12.5 21.25ZM15 20C15 19.3097 15.5596 18.75 16.25 18.75C16.9404 18.75 17.5 19.3097 17.5 20C17.5 20.6904 16.9404 21.25 16.25 21.25C15.5596 21.25 15 20.6904 15 20Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-medium text-base leading-[137%] text-black pt-9">
                Every car is <br /> thoroughly sanitized <br /> and cleaned
              </p>
            </div>
            <div className="w-[200px] h-40 rounded-2xl bg-[#f5f5f5] p-4">
              <div className="flex justify-between">
                <div></div>
                <div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.25 6.5625C5.77393 6.5625 2.8125 9.16163 2.8125 12.5372C2.8125 14.8659 3.90293 16.8265 5.34811 18.4505C6.78833 20.069 8.64643 21.4275 10.3262 22.5645L13.2245 24.5264C13.5419 24.7412 13.9581 24.7412 14.2755 24.5264L17.1738 22.5646C17.7109 22.201 18.2663 21.8147 18.8204 21.4046C18.9653 21.2973 19.0115 21.1015 18.9315 20.9399L17.2279 17.501C17.1475 17.3386 16.9264 17.3131 16.8111 17.4529L16.7201 17.5632C16.2452 18.1388 15.5379 18.4722 14.7917 18.4722H12.5C11.1193 18.4722 10 17.3529 10 15.9722C10 14.5915 11.1193 13.4722 12.5 13.4722H13.3775C13.5268 13.4722 13.6682 13.4055 13.7632 13.2904L15.7278 10.909C16.2757 10.2449 17.1267 9.90948 17.9804 10.0211C18.834 10.1327 19.5702 10.6757 19.9289 11.4584L20.9323 13.6476C21.0376 13.8772 21.3368 13.9385 21.5551 13.8113C21.9266 13.5949 22.3572 13.4722 22.8125 13.4722H24.298C24.4868 13.4722 24.6472 13.332 24.6626 13.1439C24.679 12.9445 24.6875 12.7423 24.6875 12.5372C24.6875 9.16163 21.7261 6.5625 18.25 6.5625C16.4582 6.5625 14.8814 7.40267 13.75 8.48979C12.6186 7.40267 11.0418 6.5625 9.25 6.5625Z"
                      fill="black"
                    />
                    <path
                      d="M18.5085 12.1094C18.374 11.8159 18.0979 11.6123 17.7778 11.5704C17.4577 11.5286 17.1385 11.6544 16.9331 11.9034L14.3497 15.0347H12.5C11.9822 15.0347 11.5625 15.4545 11.5625 15.9722C11.5625 16.49 11.9822 16.9097 12.5 16.9097H14.7917C15.0715 16.9097 15.3367 16.7847 15.5148 16.5688L17.4273 14.2506L19.6686 19.1406C19.8031 19.4341 20.0792 19.6377 20.3993 19.6796C20.7194 19.7214 21.0385 19.5956 21.244 19.3466L23.2544 16.9097H26.25C26.7678 16.9097 27.1875 16.49 27.1875 15.9722C27.1875 15.4545 26.7678 15.0347 26.25 15.0347H22.8125C22.5326 15.0347 22.2674 15.1597 22.0893 15.3756L20.7497 16.9994L18.5085 12.1094Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-medium text-base leading-[137%] text-black pt-14">
                All of our employees <br /> wear masks
              </p>
            </div>
            <div className="w-[200px] h-40 rounded-2xl bg-[#f5f5f5] p-4">
              <div className="flex justify-between">
                <div></div>
                <div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.125 14.0625C21.5344 14.0625 20.1606 15.1751 19.83 16.7309L19.8022 16.8614C19.7173 17.261 19.7024 17.6724 19.758 18.0771L19.9493 19.468C19.8778 19.4766 19.8064 19.4856 19.735 19.4949C18.6354 19.6377 17.8125 20.5744 17.8125 21.6832V24.5668C17.8125 25.6757 18.6354 26.6123 19.735 26.7551C21.9855 27.0474 24.2644 27.0474 26.515 26.7551C27.6146 26.6123 28.4375 25.6757 28.4375 24.5668V21.6832C28.4375 20.5744 27.6146 19.6377 26.515 19.4949C26.4436 19.4856 26.3722 19.4766 26.3007 19.468L26.4919 18.0771C26.5476 17.6724 26.5326 17.261 26.4477 16.8614L26.42 16.7309C26.0894 15.1751 24.7155 14.0625 23.125 14.0625ZM24.43 19.3081L24.6344 17.8217C24.6605 17.6318 24.6535 17.4387 24.6137 17.2511L24.5859 17.1206C24.4393 16.4308 23.8302 15.9375 23.125 15.9375C22.4197 15.9375 21.8106 16.4308 21.664 17.1206L21.6363 17.2511C21.5964 17.4387 21.5894 17.6318 21.6155 17.8217L21.8199 19.3081C22.6894 19.2649 23.5605 19.2649 24.43 19.3081Z"
                      fill="black"
                    />
                    <path
                      d="M25.8646 12.4762C25.8966 12.6861 25.6637 12.8378 25.4738 12.7426C24.7628 12.386 23.9632 12.1875 23.125 12.1875C20.6491 12.1875 18.5106 13.9193 17.9959 16.3411L17.9682 16.4717C17.8693 16.9372 17.8324 17.413 17.8579 17.887C17.8684 18.0807 17.7771 18.2664 17.6202 18.3805C16.5937 19.1271 15.9375 20.3365 15.9375 21.6832V23.4567C15.9375 23.6622 15.772 23.8296 15.5664 23.8309C13.2297 23.8455 10.8926 23.7694 8.56031 23.6026L6.6678 23.4672C5.45716 23.3806 4.45861 22.4856 4.24045 21.2916C3.70589 18.3659 3.61437 15.3764 3.96897 12.4235L4.30958 9.58707C4.474 8.2179 5.63553 7.1875 7.01453 7.1875H9.87899C11.1194 7.1875 12.1249 8.19305 12.1249 9.43346C12.1249 9.47443 12.1582 9.50765 12.1991 9.50765L23.0902 9.50765C24.416 9.50765 25.5453 10.471 25.7543 11.7802L25.8343 12.282C25.8447 12.3467 25.8548 12.4114 25.8646 12.4762Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-medium text-base leading-[137%] text-black pt-9">
                We stay up to date <br /> with all protocol <br /> from the CDC
              </p>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex pr-15 mt-28'>
            <img src={Service} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Brands