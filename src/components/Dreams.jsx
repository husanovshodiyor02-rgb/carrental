// import React from 'react'
// import { cars } from "./api.js";


// const Dreams = () => {
//   return (
//     <section className="container1">
//       <h1 className="font-semibold text-4xl text-center text-black mt-5">
//         Choose the car of your dreams
//       </h1>
//       <p className="font-normal text-base leading-[150%] text-center text-[#555]">
//         We provide our customers with the most incredible driving emotions.{" "}
//         <br />
//         That is why there are only world-class cars in our fleet
//       </p>

//       <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
//         <button className="w-[145px] h-[58px] px-9 py-[17px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] font-medium text-base text-center text-white">
//           Compact
//         </button>
//         <button className="w-[150px] h-[58px] px-7 py-[15px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-base text-center">
//           Sports cars
//         </button>
//         <button className="w-[119px] h-[58px] px-7 py-[15px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-base text-center">
//           Vans
//         </button>
//       </div>

//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>
//       {/* mowina rasmlarini qoyiw kerak */}

//       <div className="flex justify-center">
//         <button className="w-[163px] h-[58px] px-[15px] py-[15px] mt-7 mb-15 rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-lg">
//           View all cars
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Dreams


import React from "react";
import { cars } from "../Api.js";
import CarCard from "./CarCard.jsx"; // CarCard komponentini import qilamiz

const Dreams = () => {
  return (
    <section className="container1">
      <h1 className="font-semibold text-4xl text-center text-black mt-5">
        Choose the car of your dreams
      </h1>
      <p className="font-normal text-base leading-[150%] text-center text-[#555]">
        We provide our customers with the most incredible driving emotions.{" "}
        <br />
        That is why there are only world-class cars in our fleet
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
        <button className="w-[145px] h-[58px] px-9 py-[17px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] font-medium text-base text-center text-white">
          Compact
        </button>
        <button className="w-[150px] h-[58px] px-7 py-[15px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-base text-center">
          Sports cars
        </button>
        <button className="w-[119px] h-[58px] px-7 py-[15px] rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-base text-center">
          Vans
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="w-[163px] h-[58px] px-[15px] py-[15px] mt-7 mb-15 rounded-[100px] border-[1.50px] border-solid border-[#e5e7ea] bg-[#299764] hover:bg-[#4c876b] text-white font-medium text-lg">
          View all cars
        </button>
      </div>
    </section>
  );
};

export default Dreams;
