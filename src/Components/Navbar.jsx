import logo from "../assets/logo.png";
import { PiHandbagFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="w-full p-[20px_0px_10px_60px] bg-[rgba(109,184,255,0.22)] backdrop-blur-[100px] sticky  z-[200] top-0 ">
      <div className=" max-w-[1300px]  mx-auto flex font-montserrat justify-between items-center">
        <div className="">
          <img src={logo} alt="adnan" className="" />
        </div>
        <div className="">
          <nav className="flex justify-between text-[1rem] text-white">
            <div>
              <ul className="flex flex-row gap-10 font-[450]">
                <a className="hover:text-blue-500" href="#home">
                  <li>Home</li>
                </a>
                <a className="hover:text-blue-500" href="#product">
                  <li>Shop</li>
                </a>
                <li>About Us</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="ml-[150px] mr-[20px]  text-[1.8rem]">
              <PiHandbagFill />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
