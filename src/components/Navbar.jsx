import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/10OVEN.png";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const navigate = useNavigate();

  return (
    <div className="fixed w-full z-20">
      <div className="bg-black">
        <div className="w-full h-12 rounded-xl bg-ovenRed flex justify-between items-center px-4 md:px-8 lg:px-12 py-0">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-10 h-10 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 py-2 bg-black shadow-md">
        <div className="flex items-center p-0 h-12 w-12 bg-green justify-center rounded-full">
        
          <button className=" transition-all cursor-pointer " onClick={() => navigate("/")}>
        <img src={logo} alt="Cafe Logo" className="h-12 p-0" />
        </button>
        </div>
        <button className="hover:text-ovenRed text-white transition-all cursor-pointer lg:pl-32 sm:pl-8" onClick={() => navigate("/")}>
        <img src={logo1} alt="Cafe Logo" className="h-10 p-0" />
        </button>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="/" className="hover:text-ovenRed text-white transition-all cursor-pointer">Home</Link>
          <Link to="/dishes" className="hover:text-ovenRed text-white transition-all cursor-pointer">Dishes</Link>
          <Link to="/About" className="hover:text-ovenRed text-white transition-all cursor-pointer">About</Link>
          <Link to="/enquiry" className="hover:text-ovenRed text-white transition-all cursor-pointer">Franchise Enquiry</Link>
        </nav>
        <div className="md:hidden float-right">
          {menu ? (
            <MdOutlineRestaurantMenu size={25} onClick={handleChange} color="white" />
          ) : (
            <TiThMenu size={25} onClick={handleChange} color="white" />
          )}
        </div>
      </div>
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col justify-start items-start absolute bg-black text-white left-0 font-semibold text-xl text-center pt-5 pl-10 pb-4 gap-8 w-full h-screen transition-transform duration-300`}>
        <Link to="/" onClick={handleChange} className="hover:text-ovenRed text-white transition-all cursor-pointer">Home</Link>
        <Link to="/dishes" onClick={handleChange} className="hover:text-ovenRed text-white transition-all cursor-pointer">Dishes</Link>
        <Link to="/About" onClick={handleChange} className="hover:text-ovenRed text-white transition-all cursor-pointer">About</Link>
        <Link to="/enquiry" onClick={handleChange} className="hover:text-ovenRed text-white transition-all cursor-pointer">Franchise Enquiry</Link>
      </div>
    </div>
  );
}

export default Navbar;
