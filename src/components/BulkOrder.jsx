import React from 'react'
import Footer from './Footer'
import img from "../assets/images/bulk.png";


function BulkOrder() {
  return (
    <div>
      <section className="bg-white pt-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-20">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex justify-center mb-12 lg:mt-16 lg:w-1/2">
              <img src={img} alt="About Us" className="rounded-lg shadow-lg lg:w-full lg:h-80"/>
            </div>
            <div className="lg:w-1/2">
            <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        <span className="text-black">Elevate Your Event with 

</span><span className="text-red-800"> 10OVEN Specialties</span>
        </h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discover a Range of Options</h2>
            
            <p className="text-gray-700 mb-4">
              At 10OVEN, we offer a tantalizing variety of dishes and beverages to elevate your events. Whether it's a corporate luncheon, a birthday celebration, or a family gathering, our menu has something for everyone.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2">Our Specialties Include:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">Delicious Burgers: Juicy patties with fresh toppings, served on a toasted bun.</li>
                <li className="mb-2">Irresistible Pizzas: Thin-crust or deep-dish, loaded with savory toppings and gooey cheese.</li>
                <li className="mb-2">Refreshing Mocktails: Mocktails crafted with fresh fruits and premium ingredients.</li>
                <li className="mb-2">And More: Explore our full menu for additional mouthwatering options.</li>
              </ul>
            </div>
            
            <p className="text-gray-700 mb-6">
              Quality and freshness define our offerings. Each dish and beverage is prepared with care, ensuring a delightful culinary experience for your guests.
            </p>
            
            <div className="text-center">
              <p className="text-gray-700 mb-2">Make your event memorable with our specialties.</p>
              
            </div>
          </div>
        </div>
      </div>
              
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

export default BulkOrder
