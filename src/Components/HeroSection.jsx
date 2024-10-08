import Carousel from "./Carousel";
import { PiMouseSimple } from "react-icons/pi";

const HeroSection = () => {
  return (
    <>
      <div
        id="home"
        className="h-[40rem] w-[18rem]    inset-[-20%_66%_auto_auto] blur-[90px] rotate-[-5deg] opacity-[0.7] z-[200] absolute bg-gradient-to-tr from-red-300 via-pink-500 to-purple-400 "
      ></div>
      <div className="flex max-lg:flex-col  mt-[120px]  justify-between max-lg:justify-center max-lg:items-center max-w-[1300px] mx-auto text-white p-[40px_10px_20px_30px]">
        <div className=" flex flex-col max-lg:items-center gap-7 z-[20]  ">
          <div className="mt-[100px] max-lg:text-center">
            <h1 className="text-[40px] leading-[3.2rem]  font-[400]">
              Welcome to
              <br />
              <span className=" font-[700] text-[64px]">
                Pop Rock Crystal Shop!
              </span>
            </h1>
          </div>
          <div className="text-[#3d3c3c]">
            <p className=" w-[400px]  max-mobile:w-[300px] max-mobile:text-center">
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
          </div>
          <div className="flex flex-row items-center gap-12 text-[#3d3c3c]">
            <button className="font-bold p-[15px_25px] rounded-[20px] bg-white w-[180px] ">
              SHOP NOW
            </button>
            <span className="text-gray-500">about us</span>
          </div>
          <div></div>
        </div>
        <Carousel />
      </div>

      <svg
        className="absolute bottom-[-270px] w-full h-auto max-lg:bottom-[-895px] max-md:bottom-[-950px]  max-mobile:bottom-[-1000px] max-smMobile:bottom-[-1080px]"
        width="100%"
        height="100%"
        viewBox="0 0 1440 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
          fill="white"
        />
      </svg>
      <a href="#scroll" className="mx-auto border-2">
        <span className="text-black text-[1.2rem] max-lg:mt-[50px] max-mobile:mt-[100px] max-smMobile:mt-[120px]  z-[10] absolute inset-[auto_45%_auto_auto] flex flex-row  items-center gap-2">
          <PiMouseSimple /> scroll down
        </span>
      </a>
    </>
  );
};

export default HeroSection;
