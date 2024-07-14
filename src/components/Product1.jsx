import React, { useState } from "react";
import Slider from "react-slick";
import ProductData from "./ProductData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSallers from "./BestSallers";

import { useEffect } from "react";
import MenuPdf from "./MenuPdf";
function Product1({ tittle = "Best Seller..." }) {
  const [pdf ,setpdf] =useState(false);
 
  useEffect(()=>{
    if(tittle=="Best Seller..."){
      setpdf(true);
      }
      else{
        setpdf(false);
      }
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filteredProducts = tittle
    ? ProductData.filter(product => product.category === tittle)
    : ProductData;

  return (
    <div className=" w-full h-full ">
      <h2 className="text-3xl font-bold text-center py-6 ">{tittle}</h2>

      {/* <Slider {...settings}>
        {filteredProducts.map((product, index) => (
        
          <BestSallers
            key={index}
            img={product.img}
          
   
   />
        ))}
      </Slider> */}


      {pdf?<Slider {...settings}>
        {filteredProducts.map((product, index) => (
        
          <BestSallers
            key={index}
            img={product.img}
          
   
   />
        ))}
      </Slider>


      :<Slider {...settings}>
      {filteredProducts.map((product, index) => (
      
        <MenuPdf
          key={index}
          img={product.img}
        
 
 />
      ))}
    </Slider>

      
      }

    </div>
  );
}

export default Product1;
