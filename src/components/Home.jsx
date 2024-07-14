import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";

const OrderButton = lazy(() => import("./OrderButton"));
const OrderButton2 = lazy(() => import("./OrderButton2"));
const About = lazy(() => import("./About"));
const Footer2 = lazy(() => import("./Footer2"));
const Dishes2 = lazy(() => import("./Dishes2"));
const Product1 = lazy(() => import("./Product1"));

function Home() {
  const slides = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <>
      <div className="w-full h-full relative pt-28">
        <div className="relative w-full h-full pb-[100%] my-1">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-2xl bg-cover duration-500"
          ></div>
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-red-800 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-red-800 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center z-10 mb-2">
          <Suspense fallback={<div>Loading...</div>}>
            <OrderButton title="Order from Zomato" url="https://zomato.onelink.me/xqzv/jbismj1c" />
            <OrderButton title="Order from Swiggy" url="https://www.swiggy.com/menu/856491?source=sharing" />
          </Suspense>
        </div>
        <div className="flex justify-center z-10 mb-2">
          <Suspense fallback={<div>Loading...</div>}>
            <OrderButton2 title="Order from Zomato" url="https://zomato.onelink.me/xqzv/jbismj1c" />
            <OrderButton2 title="Order from Swiggy" url="https://www.swiggy.com/menu/856491?source=sharing" />
          </Suspense>
        </div>
      </div>
      <div id="dishes">
        <Suspense fallback={<div>Loading...</div>}>
          <Dishes2 />
        </Suspense>
      </div>
      <div id="product">
        <Suspense fallback={<div>Loading...</div>}>
          <Product1 title="Best Seller..." />
        </Suspense>
      </div>
      <div id="about" className="mt-2">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </div>
      <div id="contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Footer2 />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
