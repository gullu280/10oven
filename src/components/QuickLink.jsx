// import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function QuickLink({link="ht",placeholder="ffg"}) {
  return (
    <div className=' bg-neutral-300 max-w-auto px-2 py-1 m-2 rounded-md hover:bg-red-500'>
        <Link className="font-normal hover:text-black text-red-700" to={link}>{placeholder}</Link>
    </div>
  )
}
QuickLink.propTypes = {
  link: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default QuickLink