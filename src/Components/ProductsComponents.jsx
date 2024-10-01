import { IoMdArrowDropdown } from "react-icons/io";
import { slides } from "../Data/carouselData";
import image from "../assets/Image.png";
const ProductsComponents = () => {
  return (
    <section className="w-full mt-[100px] font-montserrat bg-white flex flex-col justify-center items-center  ">
      <div
        id="product"
        className="max-w-[1430px]  mx-auto p-[30px_40px] max-lg:p-[10px_0px]"
      >
        <h1 className="text-[2.88rem] font-bold text-[#274357] text-center max-mobile:mt-[50px] ">
          All product
        </h1>
        <div className="max-lg:mx-[20px] max-mobile:flex-col max-mobile:gap-6 flex flex-row gap-16 justify-start items-center mt-[50px]">
          <div className=" font-bold  flex flex-row items-center gap-3">
            <span className="text-[#00000073]">Filter : </span> All Products{" "}
            <IoMdArrowDropdown />
          </div>
          <div className="font-bold flex flex-row items-center gap-3">
            <span className="text-[#0000007c]">Sort : </span>
            Best Sellings <IoMdArrowDropdown />{" "}
          </div>
        </div>
        <div className=" w-full flex gap-4 justify-center flex-wrap mt-[50px]">
          {slides.map((items, ind) => {
            return (
              <div
                key={ind}
                className="group z-[40] w-[300px] transition-all duration-[500ms] hover:duration-[500ms] hover:transition-all text-center shadow-sm border-[1px] gap-[10px] border-gray-100 hover:border-none hover:shadow-2xl  rounded-[20px] flex flex-col p-[20px_30px]"
              >
                <img src={image} alt="" className="" />
                <h2 className="uppercase text-[0.9rem]">
                  {items.title}{" "}
                  <span className="text-[18px]">{items.price}</span>
                </h2>

                <button className="p-[10px] mx-auto rounded-[20px] duration-[500ms] group-hover:duration-[500ms] text-blue-500 group-hover:text-white group-hover:bg-blue-500 group-hover:border-none group-hover:transition-all w-[180px] h-[56px] border-4 border-blue-300">
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <button className="z-[30] p-[10px] mx-auto rounded-[20px] text-blue-500 duration-[500ms] hover:duration-[500ms] hover:text-white hover:bg-blue-500 hover:border-none hover:transition-all w-[134px]  h-[48px] border-2 border-blue-300">
        View All
      </button>
    </section>
  );
};

export default ProductsComponents;
