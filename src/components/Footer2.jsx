import QuickLink from "./QuickLink";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import { RiYoutubeLine } from "react-icons/ri";

// import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Footer2() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("feedback call");
    navigate("/feedback"); // Navigate to the About page
  };
  return (
    <div className="">
      <div className="md:flex-row lg:flex  bg-slate-800 pt-4 pb-6">
        <div className="max-w-5xl pb-8">
          <h2 className="text-white  font-semibold text-xl mb-2">QUICK LINKS</h2>
          <div className=" flex flex-wrap">
            <QuickLink  link="/home" placeholder="HOME"></QuickLink>
            <QuickLink  link="/About" placeholder="ABOUT 10OVEN"></QuickLink>

           
           
            </div>
            <div className=" flex flex-wrap ">
            <QuickLink link="/MenuItem" placeholder="MENU PDF"></QuickLink>
            <QuickLink link="/safety" placeholder="SAFETY STANDARDS"></QuickLink>
           
            <QuickLink link="/enquiry" placeholder=" FRANCCHISE ENQUIRY"></QuickLink>
            
           
            </div>
            <div className=" flex flex-wrap ">
            <QuickLink link="/term&condition" placeholder="TERMS & CONDITIONS"></QuickLink>
            <QuickLink link="/pizza" placeholder="PIZZA"></QuickLink>
           

            </div>
            <div className=" flex flex-wrap ">
            <QuickLink link="/Burger" placeholder="BURGER"></QuickLink>
            <QuickLink link="/BulkOrder" placeholder="BULK ORDER"></QuickLink>
            <QuickLink link="/SoftDrink" placeholder="SOFT DRINK"></QuickLink>
            </div>
         
        </div>
        <div className=" w-full items-center justify-center flex flex-col ">
          <div className=" mb-10">
            <div>
            <div className="flex flex-col justify-center items-center mb-8">
              <p className="text-gray-300  mb-3 ">
                Help us in serving you better
              </p>
              <button
                className=" bg-gray-300 text-black border-white border px-4 py-2 rounded-md hover:bg-red-500 "
                onClick={handleClick}
              >
                Give Feedback
              </button>
            </div>
              <h2 className="text-white mb-3 font-semibold text-xl text-center">
                Follow us
              </h2>
              <div className="w-full items-center justify-center flex gap-5">
              <a href="https://www.instagram.com/10_oven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="group">
            <FaInstagram className="text-gray-400 group-hover:text-red-500" size={25} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61560585086083" target="_blank" rel="noopener noreferrer" className="group">
            <FaSquareFacebook className="text-gray-400 group-hover:text-red-500" size={25} />
          </a>
          <a href="https://www.youtube.com/channel/UCzsmB4R_SFpQv5WzZ4TZ2Ng" target="_blank" rel="noopener noreferrer" className="group">
            <RiYoutubeLine className="text-gray-400 group-hover:text-red-500" size={25} />
          </a>
          <a href="https://x.com/10_Oven" target="_blank" rel="noopener noreferrer" className="group">
            <FaTwitter className="text-gray-400 group-hover:text-red-500" size={25} />
          </a>
              </div>
            </div>
            <div className="w-full items-center  justify-center flex flex-col mt-8">
              <a
                href="mailto:ten.oven.co.@gmail.com"
                className="text-white font-light bg-red-500 rounded-full    text-xl  px-4 mb-2"
              >
              ten.oven.co.@gmail.com
              </a>
              {/* <p className="text-gray-300  mb-3 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nobis reprehenderit eum est incidunt dolores molestiae, molestias minima quia natus? Debitis recusandae ut
                 reprehenderit est! Eos perspiciatis laborum numquam optio?
              </p> */}

             
            </div>
           
          </div>
        </div>
      </div>
      <p className="text-gray-300   text-center bg-black p-6 ">
               <span>&copy;Copyright  2024. 10oven - All Rights Reserved.
                 Terms of use Privacy</span>
              </p>

    </div>
  );
}

export default Footer2;
