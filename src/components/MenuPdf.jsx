import React from 'react'
import dimg from "../assets/images/product1.jpg";

function MenuPdf({img=dimg}) {

  return (
    <>
    <div className="bg-white w-full h-full px-4  shadow-lg rounded-xl p-2 mb-2">
    <div
      className="bg-cover bg-center w-full   h-screen rounded-xl   "
      style={{ backgroundImage: `url(${img})` }}
    >
      </div>
</div>



</>
);
}

export default MenuPdf
