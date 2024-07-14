
 import img from "../assets/images/about.avif";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("feedback call");
    navigate("/about"); // Navigate to the product page
  };
  return (
    <div>
      <div className="  flex flex-col lg:flex-row justify-center items-center  ">
        {/* <img src={img} alt="About" className="w-90 rounded-xl lg:mr-10" /> */}
        <div className="space-y-6 lg:pb-3 mx-3">
          <h1 className="font-semibold text-6xl text-center md:text-start pt-2">
          <span className="text-black">About</span><span className="text-red-800"> us</span>
          </h1>
          <p className="text-gray-600 text-1xl lg:text-2xl ">
          Welcome to 10 Oven! Founded by Asad Oberoy, 10 Oven is an innovative start up with a simple vision: to fulfil your late-night cravings. Our name, 10 Oven, reflects our commitment to being your go-to spot when the clock strikes 10 PM and those delicious urges hit. "Oven" signifies our dedication to delivering the best in fried chicken, pizza, and zinger burgers.
          </p>
          <div className="flex justify-center items-center  ">
      <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-lg text-lg px-6 py-2  text-center me-2 mb-2" onClick={handleClick}>
        Learn more
      </button>
    </div>
         
        </div>
      </div>
      <div className="sm:flex-row md:flex lg:flex  bg-black pb-10 pt-6">
        <div className="flex-row p-5 space-y-3 ">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/authen-1.png"
            alt=""
            className="h-24  animate-bounce"
          />
          <h2 className="font-semibold text-white text-3xl">
            Authentic Variety
          </h2>
          <p className="text-white">
          At 10oven, we offer an authentic variety of dishes made from the freshest ingredients, ensuring every bite is a delightful experience. From classic favorites to unique creations, our menu has something for everyone.
          </p>
        </div>
        <div className="flex-row   p-5 space-y-3">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/534563.png"
            alt=""
            className="h-24 animate-bounce"
          />
          <h2 className="font-semibold text-white text-3xl">
            Eco-Friendly Sealed Packaging
          </h2>
          <p className="text-white">
          Our eco-friendly sealed packaging ensures freshness while caring for the environment, reflecting our commitment to sustainability at 10oven.
          </p>
        </div>
        <div className="flex-row  p-5 space-y-3">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/43223.png"
            alt=""
            className=" animate-bounce h-24"
          />
          <h2 className="font-semibold text-white text-3xl">
            Transparent Kitchen
          </h2>
          <p className="text-white">
          Experience transparency at its finest with our open kitchen concept at 10oven, where you can witness the passion and care that goes into every dish.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default About;
