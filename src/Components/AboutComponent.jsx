import image from "../assets/Image.png";
const AboutComponent = () => {
  return (
    <section
      id="about"
      className="max-w-[1400px] relative w-full flex mx-auto justify-between  flex-row max-lg:flex-col max-lg:items-center"
    >
      <div className="flex flex-col leading-[50px] justify-end  max-lg:items-center z-[30] items-end  my-[200px] max-lg:my-[50px] mb-[215px] w-full">
        <h3 className="text-[33px] text-[#31546D] ">BEST PRICE</h3>
        <h2 className="text-[50px] max-mobile:text-center max-mobile:text-[40px] font-montserrat text-[#31546D] font-[700]">
          Agate Phone Grip
        </h2>
        <h3 className="text-[24px] text-[#41A0B7] mt-[60px]  font-[400]">
          <span className="line-through">44.50$</span>
          <span className="text-[#E35B3E]  text-[70px] max-mobile:text-[50px] font-[700]">
            19.50$
          </span>
        </h3>
        <p className="text-[16px] text-[#31546D] text-right max-lg:text-center leading-tight w-[60%] my-[20px]  font-DMSANS font-[400]">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </p>
        <button className="p-[10px]  flex items-center justify-center rounded-[20px] duration-[500ms]  w-[180px] h-[56px] text-[1rem] text-white bg-blue-400">
          BUY NOW
        </button>
      </div>
      <div className="w-full  flex max-lg:justify-center z-[30] ">
        <div className="w-[744px] h-[744px] max-lg:w-[544px] max-lg:h-[544px]  max-tablet:w-[344px] max-tablet:h-[344px]  rounded-[50%] flex justify-center items-center bg-[#ffffff49] opacity-[1]">
          <div className="w-[570px] h-[570px] max-lg:w-[370px] max-lg:h-[370px] max-tablet:w-[270px] max-tablet:h-[270px]  rounded-[50%]  flex justify-center items-center bg-[#fff] shadow-[2px_-2px_10px_rgba(0,0,0,0.14)] opacity-[1] ">
            <div className="w-[370px] h-[370px] max-lg:w-[170px] max-lg:h-[170px] max-tablet:w-[170px] max-tablet:h-[170px] rounded-[50%]  flex justify-center items-center bg-[#fff]  shadow-[0px_-2px_10px_rgba(0,0,0,0.14)] opacity-[1] ">
              <img src={image} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute z-[20] top-[-63px] max-lg:top-[-500px] max-md:top-[-560px] max-mobile:top-[-400px] "
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default AboutComponent;
