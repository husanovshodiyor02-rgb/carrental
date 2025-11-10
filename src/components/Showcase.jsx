import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Maluba from '../assets/img/maluba.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Showcase = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "Compact cars",
      desc: "Rent cars as you are comfortable and where you are comfortable.",
      img: Maluba,
    },
    {
      title: "Luxury cars",
      desc: "Premium experience with stylish and comfortable vehicles.",
      img: "https://lionmotors.uz/wp-content/uploads/2020/11/malibu.jpg",
    },
    {
      title: "Family cars",
      desc: "Spacious and safe cars for your family trips.",
      img: "https://www.spot.uz/media/img/2018/12/YXWv4i15440300903469_b.jpg",
    },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="container1">
      <div className="relative w-full mt-5 rounded-xl overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-[450px]"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="bg-black/40 p-5 rounded-xl text-center">
                  <h2 className="text-3xl font-bold">{item.title}</h2>
                  <p className="mt-2 max-w-[500px]">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
          <button
            ref={prevRef}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white bg-white/10 backdrop-blur hover:bg-white/20 transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white bg-white/10 backdrop-blur hover:bg-white/20 transition"
          >
            ›
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-25">
        <div className="w-auto h-[66px] rounded-[100px] bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] flex items-center justify-between">
          <input
            type="text"
            placeholder="Find the car of your dreams"
            className="pl-6 border-0 focus:outline-none focus:ring-0 md:w-[550px] w-[220px]"
          />
          <button className="w-[58px] h-[58px] rounded-[100px] bg-[#299764] px-4 mr-1.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3851 15.4458C11.7348 17.5685 7.85538 17.4014 5.3986 14.9446C2.76256 12.3086 2.76256 8.0347 5.3986 5.39866C8.03464 2.76262 12.3085 2.76262 14.9445 5.39866C17.4013 7.85544 17.5684 11.7349 15.4457 14.3851L20.6014 19.5408C20.8943 19.8337 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4458ZM6.45926 13.8839C4.40901 11.8337 4.40901 8.50957 6.45926 6.45932C8.50951 4.40907 11.8336 4.40907 13.8839 6.45932C15.9326 8.50807 15.9341 11.8288 13.8884 13.8794C13.8869 13.8809 13.8854 13.8824 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9342 8.50801 15.9327 6.45926 13.8839Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

