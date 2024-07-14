// import React from 'react'
import PropTypes from 'prop-types';
function OrderButton2({title='Order Now' ,url}) {
  return (
    <div>
        <a href={url} type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-base px-2   py-1 md:py-3 lg:py-4 md:mx-4  mx-2  lg:mx-6 sm:font-thin  text-center  mb-6 block sm:block md:block lg:hidden">{title}</a>
    </div>
  )
}
OrderButton2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderButton2
