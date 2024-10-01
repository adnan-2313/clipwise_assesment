import logo from "../assets/logo.png";
import { PiHandbagFill } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="w-full p-[20px_0px_10px_60px] hover:bg-[rgba(109,184,255,0.6)] bg-[rgba(109,184,255,0.22)] backdrop-blur-[100px] fixed z-[100] top-0 ">
      <div className=" max-w-[1300px] max-md:pr-[40px]  mx-auto flex font-montserrat justify-between items-center">
        <div className="">
          <img src={logo} alt="adnan" className="" />
        </div>
        <div className="">
          <nav className="flex justify-between max-md:hidden text-[1rem] text-white">
            <div>
              <ul className="flex flex-row gap-10 font-[450]">
                <a className="hover:text-blue-500" href="#home">
                  <li>Home</li>
                </a>
                <a className="hover:text-blue-500" href="#product">
                  <li>Shop</li>
                </a>
                <a className="hover:text-blue-500" href="#about">
                  <li>About Us</li>
                </a>
                <li>Help</li>
              </ul>
            </div>
            <div className="ml-[150px] mr-[20px]  text-[1.8rem]">
              <PiHandbagFill />
            </div>
          </nav>
        </div>
        <div
          className="md:hidden text-[2rem] text-white cursor-default font-montserrat"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <HiBars3BottomRight />
        </div>
      </div>

      <div
        className={`items-center bg-[rgba(78,157,202,0.3)] backdrop-blur-[100px] left-0 transition-all duration-500 text-black top-[5.9rem] ${
          menu ? "h-[200px]" : "h-[0px]"
        } w-full flex justify-center text-[1rem] absolute `}
      >
        <ul
          className={`transition-all duration-500 flex flex-col gap-2 ${
            !menu ? "hidden" : "flex"
          }  font-[450]`}
        >
          <a className="hover:text-blue-500" href="#home">
            <li>Home</li>
          </a>
          <a className="hover:text-blue-500" href="#product">
            <li>Shop</li>
          </a>
          <a className="hover:text-blue-500" href="#about">
            <li>About Us</li>
          </a>
          <li>Help</li>
          <li className="hover:text-blue-500 text-[2rem]">
          <PiHandbagFill />
          </li>
        </ul>
        
      </div>
    </header>
  );
};

export default Navbar;
