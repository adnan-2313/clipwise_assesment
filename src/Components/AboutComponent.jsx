import image from "../assets/Image.png"
const AboutComponent = () => {
  return (
    <section className="relative w-full max-w-[1400px]  flex justify-between  flex-row">
      <div className="flex flex-col leading-[50px] justify-end z-[30] items-end my-[200px] mb-[215px] w-full">
        <h3 className="text-[33px] text-[#31546D]">BEST PRICE</h3>
        <h2 className="text-[50px] font-montserrat text-[#31546D] font-[700]">
          Agate Phone Grip
        </h2>
        <h3 className="text-[24px] text-[#41A0B7] mt-[60px] font-[400]">
          <span className="line-through">44.50$</span>
          <span className="text-[#E35B3E]  text-[70px] font-[700]">19.50$</span>
        </h3>
        <p className="text-[16px] text-[#31546D] text-right leading-tight w-[60%] my-[20px]  font-DMSANS font-[400]">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </p>
        <button className="p-[10px]  flex items-center justify-center rounded-[20px] duration-[500ms]  w-[180px] h-[56px] text-[1rem] text-white bg-blue-400">
          BUY NOW
        </button>
      </div>
      <div className="w-full  border-black z-[30] ">
        <div className="w-[744px] h-[744px] rounded-[50%] flex justify-center items-center bg-[#ffffff49] opacity-[1]">
          <div className="w-[570px] h-[570px] rounded-[50%]  flex justify-center items-center bg-[#fff] shadow-[2px_-2px_10px_rgba(0,0,0,0.14)] opacity-[1] ">
            <div className="w-[370px] h-[370px] rounded-[50%]  flex justify-center items-center bg-[#fff]  shadow-[0px_-2px_10px_rgba(0,0,0,0.14)] opacity-[1] ">
                <img src={image} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute z-[20] top-[-63px] "
        width="1440"
        height="900"
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
