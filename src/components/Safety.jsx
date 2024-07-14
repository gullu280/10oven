import React from 'react'
import SafetyCard from './SafetyCard'
import Footer from './Footer2'
import ProductData from "./ProductData";
function Safety({tittle="safety"}) {
  const filteredProducts = tittle
  ? ProductData.filter(product => product.category === tittle)
  : ProductData;

  return (
<>
    <div className='min-h-screen  flex flex-col justify-center items-center  pt-32 '>
        <p className='text-3xl lg:text-6xl font-extrabold   font-sans text-center    text-red-800 pb-10'><span className='text-black'>10'</span>0VEN <span className='text-black'>Safety </span>   and  Guide<span className='text-black'>lines </span></p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  items-center px-16 py-6'>
            
            {filteredProducts.map((product, index) => (
          <SafetyCard
            key={index}
            img={product.img}
            type={product.type1}
            title={product.title}
    discription={product.discription}
   />
  ))}
            </div>
    </div>

    <Footer/>
    </>
     
  )
}

export default Safety
