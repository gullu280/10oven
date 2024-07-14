import React from 'react'
import Footer from './Footer'
import img from "../assets/images/mock4.jpeg";
import Menu from "../assets/images/Menu.pdf";

function SoftDrink() {
  return (
    <div>
    <section className="bg-white pt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-20">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="flex justify-center mb-12 lg:mt-16 lg:w-1/2">
            <img src={img} alt="About Us" className="rounded-lg shadow-lg lg:w-full lg:h-80"/>
          </div>
          <div className="lg:w-1/2">
            <h6 className="text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              <span className="text-black">Refreshing 
 
              </span><span className="text-red-800"> Soft Drinks</span>
            </h6>
            <p className="text-gray-600 mb-6">
              <span className='text-slate-950 text-opacity-100 font-bold'>Quench Your Thirst

              </span><br/>At 10oven, complement your meal with our selection of refreshing soft drinks. From classic sodas to artisanal lemonades, we offer beverages that perfectly pair with our delicious meals.

            </p>
            <p className="text-gray-600 mb-6">
            <span className='text-red-500 text-opacity-100 font-bold'>Variety of Choices

            </span><br/>
            Choose from a variety of options including cola, lemon-lime soda, root beer, and more. We also feature healthier choices such as sparkling water and fruit juices, ensuring there's something for everyone to enjoy at 10oven.


            </p>
            <p className="text-gray-600 mb-6">
            <span className='text-slate-950 text-opacity-100 font-bold'>Quality and Freshness
 
            </span><br/>
            Our soft drinks are served ice-cold and made from high-quality ingredients, ensuring a crisp and satisfying beverage experience with every sip.
            </p>
           
          </div>
        </div>
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
    </section>
   
    <Footer/>
  </div>
)
}


export default SoftDrink
