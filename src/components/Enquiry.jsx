
import React, { useState } from 'react';
import Footer from './Footer2';
import slide1 from "../assets/images/slide1.png";
import { useNavigate } from "react-router-dom";
function Enquiry() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <>
      <div className=" mx-auto pt-28 bg-black ">
        <div className="flex flex-col md:flex-row bg-red-900 overflow-hidden  text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50">
          
          {/* Image and Description */}
          <div className="md:w-1/2 w-full p-4 flex flex-col justify-center items-center bg-white">
            <img src={slide1} alt="Contact Us" className="mb-4 w-half h-40 object-cover rounded-lg border-4 border-red-500" />
            <p className="text-lg font-medium text-black text-left">
            Join the 10oven Family

              <br/>
            </p>
            <p className=" font-medium text-black text-left">
            <br/>
            Are you passionate about great food and exceptional service? Join the 10oven family and bring our delicious offerings to your community. As a 10oven franchisee, you'll be part of a brand known for quality, variety, and customer satisfaction.
            </p>
            <p className=" font-medium text-black text-left">
            <br/>
            Why 10oven?
                 Proven Business Model: Benefit from a successful and scalable business model with a strong track record.
                Comprehensive Support: Receive extensive training, marketing support, and ongoing assistance to ensure your success.

              </p>
            <p className=" font-medium text-black text-center">
            <br/>
            Quality Products:
              <br/>
              Serve a menu of high-quality, freshly prepared dishes that customers love.

            </p>
            <p className="text-lg font-medium text-black text-left">
            <br/>
            Ready to take the next step? Fill out our franchise enquiry form below, and a member of our team will contact you with more information. We look forward to partnering with you and expanding the 10oven brand together!

            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 w-full p-8 bg-black text-white   block  rounded-md border    shadow-sm focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 px-2">
            <h2 className="text-3xl font-semibold text-center text-red-500 mb-6">Franchise Enquiry</h2>
            {formSubmitted ? (
              <p className="text-center text-green-500 font-bold">Form successfully submitted!</p>
            ) : ( "" )}
              <form className="space-y-4 mt-1 p-2 block w-full rounded-md border border-gray-700 bg-black text-white shadow-sm focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-red-500 font-bold mb-2">Name</label>
                  <input type="text" className="mt-1 p-2 block w-full rounded-md border border-gray-700 bg-black text-white shadow-sm focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-red-500 font-bold mb-2">Email</label>
                  <input type="email" className="mt-1 p-2 block w-full border rounded-md border-gray-700 bg-black text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-red-500 font-bold mb-2">Message</label>
                  <textarea className="mt-1 p-2 block w-full rounded-md border border-gray-700 bg-black text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div>
                  <label className="block text-red-500 font-bold mb-2">Phone Number</label>
                  <input type="text" className="mt-1 p-2 block w-full border rounded-md border-gray-700 bg-black text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" placeholder="Your Phone Number" />
                </div>
                <div>
                  <button type="submit" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg font-medium rounded-lg text-xl px-6 py-2 text-center">
                    Submit
                  </button>
                </div>
              </form>
          
          </div>

        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default Enquiry;
