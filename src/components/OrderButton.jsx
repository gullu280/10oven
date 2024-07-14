// import React from 'react'
import PropTypes from 'prop-types';
function OrderButton({title='Order Now' ,url}) {
  
  return (
    <div className=' mt-6 pr-11 sm:mt-10 '>
        <a href={url}  type="button" className="text-white  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg lg:text-xl px-6 py-4 sm:text-lg md:text-lg text-center me-2 mb-2 hidden sm:hidden md:hidden lg:block">{title}</a>
    </div>
  )
}

OrderButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderButton
