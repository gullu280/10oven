import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductData from "./ProductData";
import {  useParams } from 'react-router-dom';
function Products() {
  const  {tittle}=useParams();
  const param=tittle;
  
 
  const filteredProducts = param
  ? ProductData.filter(product => product.category === param)
  : ProductData;

  return (
    <>
    <div className="min-h-screen  flex flex-col justify-center items-center ">
      <h2 className="text-5xl  font-semibold text-center pt-32 pb-2 ">{param}</h2>
      <div className="flex-row flex justify-center items-center flex-wrap gap-x-5">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            price={product.price}
            title={product.title}
            description={product.description}
            type={product.type}
          />
        ))}
       
      </div>
      
    </div>
    <Footer/>
   
 
 </>
  );
}

export default Products;
