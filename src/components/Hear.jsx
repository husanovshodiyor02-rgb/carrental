import React from 'react'
import Ava from "../assets/img/ava.png";
import Google from "../assets/img/google.png";
import Star from "../assets/img/star.png";
import Ava2 from "../assets/img/ava2.png";

const Hear = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="container1">
        <div className="w-auto h-auto rounded-[20px] bg-white flex flex-col md:flex-row justify-between">
          <div className="w-auto sm:p-15 p-5">
            <div className="flex items-center gap-3">
              <div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.80001 5.11364C9.80001 4.75909 9.76819 4.41819 9.7091 4.09091H5V6.02501H7.69091C7.57501 6.65001 7.22273 7.17955 6.69319 7.5341V8.78865H8.3091C9.25455 7.91819 9.80001 6.63637 9.80001 5.11364Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.99981 9.99999C6.34981 9.99999 7.48163 9.55226 8.30891 8.78862L6.69299 7.53408C6.24526 7.83408 5.67254 8.01135 4.99981 8.01135C3.69753 8.01135 2.59526 7.1318 2.20207 5.94998H0.531616V7.24544C1.35435 8.87953 3.04526 9.99999 4.99981 9.99999Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.20228 5.94998C2.10228 5.64998 2.04546 5.32952 2.04546 4.99998C2.04546 4.67043 2.10228 4.34997 2.20228 4.04997V2.75452H0.531819C0.193182 3.42952 0 4.19316 0 4.99998C0 5.8068 0.193182 6.57043 0.531819 7.24544L2.20228 5.94998Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.99981 1.98864C5.7339 1.98864 6.39299 2.24091 6.91118 2.73637L8.34527 1.30228C7.47936 0.495456 6.34754 0 4.99981 0C3.04526 0 1.35435 1.12046 0.531616 2.75455L2.20207 4.05001C2.59526 2.86819 3.69753 1.98864 4.99981 1.98864Z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <a
                href="https://www.google.com/"
                className="font-medium text-base text-[#4285f4]"
              >
                From Google
              </a>
            </div>
            <h2 className="font-medium md:text-[38px] text-[25px] leading-[132%] text-black">
              Hear what the <br /> community is <br /> saying
            </h2>
            <div className="sm:w-[330px] w-[230px] h-[2px] my-10 bg-[linear-gradient(90deg,#ea4335_19.83%,#fbbc05_65%,#34a853_82.29%,#4285f4_100%)]"></div>
            <p className="font-medium text-sm text-[#555]">
              More interesting reviews on Instagram
            </p>
            <div className="p-[3px] mt-5 rounded-[100px] bg-[radial-gradient(230.93%_230.93%_at_102.01%_2.03%,rgb(249,237,50)_0%,rgb(238,42,123)_36%,rgb(210,42,138)_44%,rgb(139,42,178)_60%,rgb(27,42,240)_83%,rgb(0,42,255)_88%)]">
              <div className="bg-white rounded-[100px] p-5 text-center font-semibold">
                <button className="rounded-[100px] font-medium text-lg bg-[radial-gradient(230.93%_230.93%_at_102.01%_2.03%,rgb(249,237,50)_0%,rgb(238,42,123)_36%,rgb(210,42,138)_44%,rgb(139,42,178)_60%,rgb(27,42,240)_83%,rgb(0,42,255)_88%)] bg-clip-text text-transparent">
                  Instagram
                </button>
              </div>
            </div>
          </div>
          <div className="w-auto h-[479px] rounded-[0_20px_20px_0] bg-[#299764] py-15 pl-12 flex gap-4 overflow-x-auto">
            <div className="w-auto h-[333px] rounded-2xl bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={Ava} alt="" />
                  <div>
                    <h2 className="font-semibold text-base text-black">
                      Savannah Nguyen
                    </h2>
                    <p className="font-normal text-sm text-[#555]">
                      savannahnguyen@gmail.com
                    </p>
                  </div>
                </div>
                <img src={Google} alt="" />
              </div>
              <p className="font-normal text-sm leading-[143%] text-black pt-2">
                Sagittis sed tortor, elementum vitae varius sodales <br />{" "}
                consectetur. Vitae arcu ut morbi bibendum <br /> ullamcorper
                feugiat. Venenatis hendrerit cursus <br /> egestas sit ornare
                nunc vulputate aliquam sapien. <br /> Pulvinar nunc consectetur
                nibh consectetur mollis <br /> mauris est mauris amet. Sed hac
                vehicula id et dui <br /> morbi quam pulvinar condimentum.
                Senectus sed <br /> varius interdum nunc, arcu vulputate massa.
              </p>
              <hr className="w-[372px] h-0 border-[1.50px] border-solid border-[#e5e7ea] my-6" />
              <div className="flex items-center gap-5">
                <h3 className="font-medium text-sm text-black">Star rating:</h3>
                <div className="flex items-center gap-2">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[333px] rounded-2xl bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={Ava2} alt="" />
                  <div>
                    <h2 className="font-semibold text-base text-black">
                      Ronald Richards
                    </h2>
                    <p className="font-normal text-sm text-[#555]">
                      ronaldrichards@gmail.com
                    </p>
                  </div>
                </div>
                <img src={Google} alt="" />
              </div>
              <p className="font-normal text-sm leading-[143%] text-black pt-2">
                Placerat pulvinar in amet sem id gravida nisi leo. A <br /> dignissim
                est pellentesque mi quisque vel mi ut. <br /> Porttitor blandit auctor
                odio a ornare felis tortor <br /> bibendum molestie.
              </p>
              <hr className="w-[372px] h-0 border-[1.50px] border-solid border-[#e5e7ea] mt-26 mb-6" />
              <div className="flex items-center gap-5">
                <h3 className="font-medium text-sm text-black">Star rating:</h3>
                <div className="flex items-center gap-2">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hear