import React from 'react';
import img from "../assets/images/about.avif";
import Footer from './Footer';

export default function About2() {
  return (
    <div>
      <section className="bg-white pt-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-20">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex justify-center mb-12 lg:mt-16 lg:w-1/2">
              <img src={img} alt="About Us" className="rounded-lg shadow-lg lg:w-full lg:h-80"/>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                <span className="text-black">About</span><span className="text-red-800"> us</span>
              </h2>
              <p className="text-gray-600 mb-6">
                <span className='text-red-500 text-opacity-100 font-bold'>Welcome to 10 Oven!</span> Founded by Asad Oberoy, 10 Oven is an innovative startup with a simple vision: to fulfil your late-night cravings.
              </p>
              <p className="text-gray-600 mb-6">
                At 10 Oven, we believe in using only the freshest ingredients and unique recipes to craft our dishes. Whether you’re craving the crispy perfection of our fried chicken, the bold flavours of our zinger burgers, the cheesy delight of our chicken pizza, or the refreshing taste of our mocktails, we have something special for you.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to quality, innovation, and customer satisfaction. Join us and discover why 10 Oven is the ultimate destination for comfort food enthusiasts, especially when the night calls for something extraordinary.
              </p>
              <p className="text-gray-600 py-4">
                Thank you for choosing 10 Oven. We look forward to serving you soon!
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex-row md:flex lg:flex mt-10 bg-black pb-16 pt-10">
          <div className="flex-row p-5 space-y-3">
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
          <div className="flex-row p-5 space-y-3">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/534563.png"
              alt=""
              className="h-24  animate-bounce"
            />
            <h2 className="font-semibold text-white text-3xl">
              Eco-Friendly Sealed Packaging
            </h2>
            <p className="text-white">
            Our eco-friendly sealed packaging ensures freshness while caring for the environment, reflecting our commitment to sustainability at 10oven.
            </p>
          </div>
          <div className="flex-row p-5 space-y-3">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/43223.png"
              alt=""
              className="h-24  animate-bounce"
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
  );
}
