// import React from 'react'
// import PropTypes from 'prop-types';
// function Button({tittle='Order Now1' ,url}) {
//   return (
//     <div>
//        <a
//             href={url}
//             className="text-white bg-gradient-to-r from-red-800 via-red-500  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  rounded-lg px-3  my-2 "
//           >
//           {tittle}
//           </a>
//         {/* <a href={url}  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg lg:text-xl px-6 py-4 sm:text-lg md:text-lg text-center me-2 mb-2">{tittle} h</a> */}
//     </div>
//   )
// }
// Button.propTypes = {
//   tittle: PropTypes.string.isRequired,
// };

// export default Button
// new button
import PropTypes from 'prop-types';

function Button({ tittle = 'Order Now1', url }) {
  
  return (
    <div>
      <a 
        href={url}
        className="inline-block text-white bg-gradient-to-r from-red-600 via-red-400 to-red-800 hover:from-red-500 hover:via-red-400 hover:to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 shadow-md shadow-red-500/50 dark:shadow-lg dark:shadow-red-700/80  rounded-lg px-1 py-1 mr-1 font-thin transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        {tittle}
      </a>
    </div>
  );
}

Button.propTypes = {
  tittle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Button;