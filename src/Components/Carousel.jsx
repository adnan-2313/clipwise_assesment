import { useState } from "react";
import { slides } from "../Data/carouselData";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import image from "../assets/Image.png";
const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };
  return (
    <div className="z-[50] flex flex-col gap-10 ">
      <div className="relative w-[529px]  h-[500px] justify-center items-center flex">
        <div>
          {slides.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  slide === index
                    ? "w-[100%] max-md:w-[80%] mx-auto relative  rounded-[50px] flex p-[60px_80px] max-md:p-[40px_80px] max-mobile:p-[20px_30px] shadow-lg justify-center items-center flex-col  bg-white"
                    : "hidden"
                } `}
              >
                <div className="absolute w-[97px]  h-[40px] bg-[#8A93E5] flex justify-center items-center top-[60px]  left-0 rounded-r-[8px]">
                  New log
                </div>
                <div className="w-[362px] h-[380px] max-mobile:w-[270px]  flex justify-center items-center">
                  <img src={image} alt="slides" className="" />
                </div>
                <div className="font-[700]  text-center font-DMSANS uppercase text-[#24232375] text-[19px] leading-[24px] items-center">
                  {item.title}
                  <span className="font-bold text-[#205880]">{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="  px-[120px] flex flex-row justify-between">
        <TiArrowLeft
          className="bg-[#8a93e5] text-[2rem] text-white rounded-[7px] cursor-pointer"
          onClick={prevSlide}
        />
        <div className="flex items-center gap-1">
          {slides.map((_, ind) => {
            return (
              <GoDotFill
                key={ind}
                className={`${
                  ind === slide ? "text-[#8a93e5]" : "text-[#babfe7]"
                } text-[1.5rem]`}
              ></GoDotFill>
            );
          })}
        </div>
        <TiArrowRight
          className="bg-[#8a93e5] text-[2rem] text-white rounded-[7px] cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
