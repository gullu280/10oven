
import dimg from "../assets/images/product1.jpg";
import Button from "./Button";
import { FaCaretSquareUp } from "react-icons/fa";

 import './product.css';
function ProductCard({
  title = "Product Name",
  description = "lorem32 cfqwf qfw qwf qdwqf wqdqw ddqfwedv dwe vcweq jkgchghcwhewg hgehwhe fkwehfkwhkjfwhkj ehfkjw hfkjwhef kjwhk jhewkj fhwjk fhwkjfh kjwh fkjehkjgh efjwlk jkeg kjehgkjeh gkje erkjgh kjrhgkjr",
  img = dimg,
  price = "null",
  type = "non-veg",
}) {
  let color = 'red';
  if (type === 'veg') {
    type = 'Veg';
    color = 'green';
  } else {
    type = 'Non-veg';
  }
 

 

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-white my-6 transform transition duration-500">
      <div className="relative product-image-wrapper overflow-hidden">
        {/* <img className="w-full product-image" src={img} alt={title} /> */}
        <div
            className="absolute w-full product-image h-56 inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="p-5 flex">
              <FaCaretSquareUp size={25} color={color} className="" />
              <h2 className="text-lg text-white font-semibold pt-2">{type}</h2>
            </div>
          </div>


        <div className="overlay" ></div>
      </div>
      <div className="px-6 py-4  mt-1  hover:bg-slate-900 bg-black rounded-lg">
        <div className="font-bold text-xl mb-2">{title}
        <p className="inline-block bg-red-500 rounded-full px-3 py-1 ml-2 text-sm font-semibold text-black mr-2 mb-2">@{price}</p>
        </div>
        <p className="text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-3 pt-4 pb-2 flex justify-between items-center">
        {/* <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{price}</span> */}
        <a 
        href="https://zomato.onelink.me/xqzv/jbismj1c"
        
          className="inline-block text-white bg-gradient-to-r from-red-600 via-red-400 to-red-800 hover:from-red-500 hover:via-red-400 hover:to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 shadow-md shadow-red-500/50 dark:shadow-lg dark:shadow-red-700/80  rounded-lg px-1 py-1 mr-1 font-thin transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Order by Zomato
        </a>
        <a 
        href="https://www.swiggy.com/menu/856491?source=sharing"
         
          className="inline-block text-white bg-gradient-to-r from-red-600 via-red-400 to-red-800 hover:from-red-500 hover:via-red-400 hover:to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 shadow-md shadow-red-500/50 dark:shadow-lg dark:shadow-red-700/80  rounded-lg px-1 py-1 mr-1 font-thin transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Order by Swiggy
        </a>


      </div>
    </div>




{/* 
      <div className="bg-white sm:w-full lg:w-96 md:w-96 shadow-lg rounded-xl">
        <div className="relative h-56 w-86 m-6 rounded-t-xl overflow-hidden">
          <div
            className="absolute h-56 w-96 inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="p-5 flex">
              <FaCaretSquareUp size={25} color={color} className="" />
              <h2 className="text-lg text-white font-semibold pt-2">{type}</h2>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 space-y-2">
          <h2 className="text-xl font-semibold text-wrap">
            {title} <span className="text-red-800">@{price}</span>
          </h2>
          <p className="text-wrap line-clamp-2">{description}</p>
          <div className="flex justify-between my-1">
            <Button
              tittle="Order by Zomato"
              url="https://zomato.onelink.me/xqzv/jbismj1c"
              className=""
            />
            <Button
              tittle="Order by Swiggy"
              url="https://www.swiggy.com/menu/856491?source=sharing"
              className=""
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProductCard;
