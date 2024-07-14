import React from 'react'
import Footer from './Footer'
import Product1 from "./Product1";
import Menu from "../assets/images/Menu.pdf";

function MenuItem() {
  return (
    <div>
       <>
   
      <div id="product" className='mt-28 '>
        <Product1 tittle="Menu"/>
      </div>
      <div className=' my-8 text-center'>
      <a
        href={Menu}
        className="inline-block text-white bg-gradient-to-r from-red-600 via-red-400 to-red-800 hover:from-red-500 hover:via-red-400 hover:to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 shadow-md shadow-red-500/50 dark:shadow-lg dark:shadow-red-700/80  rounded-lg px-1 py-1 mr-1 font-thin transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Download
      </a>
      </div>
      <div className="sm:flex-row md:flex lg:flex mt-10 bg-black pb-16 pt-10">
          <div className="flex-row p-5 space-y-3">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/authen-1.png"
              alt=""
              className="h-24"
            />
            <h2 className="font-semibold text-white text-3xl">
              Authentic Variety
            </h2>
            <p className="text-white">
            At 10oven, we offer an authentic variety of dishes made from the freshest ingredients, ensuring every bite is a delightful experience. From classic favorites to unique creations, our menu has something for everyone.
            </p>
          </div>
          <div className="flex-row p-5 space-y-3">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/534563.png"
              alt=""
              className="h-24"
            />
            <h2 className="font-semibold text-white text-3xl">
              Eco-Friendly  Sealed Packaging
            </h2>
            <p className="text-white">
            Our eco-friendly sealed packaging ensures freshness while caring for the environment, reflecting our commitment to sustainability at 10oven.
            </p>
          </div>
          <div className="flex-row p-5 space-y-3">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/43223.png"
              alt=""
              className="h-24"
            />
            <h2 className="font-semibold text-white text-3xl">
              Transparent Kitchen
            </h2>
            <p className="text-white">
            Experience transparency at its finest with our open kitchen concept at 10oven, where you can witness the passion and care that goes into every dish.
            </p>
          </div>
        </div>
      
    <Footer/>
    </>
    </div>
  )
}

export default MenuItem
