import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './product.css';

function DishesCard({img,tittle}) {
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate(`/product/${tittle}`); 
  };
  return (
    <div>
      <button
               
                onClick={handleClick}
              >
               
    <div className="flex flex-col justify-center items-center  ">
      <div className="product-image-wrapper overflow-hidden h-24 w-24 rounded-full lg:h-40 lg:w-40 ">
        <img src={img} alt="" className="product-image  rounded-full h-24 w-24  lg:h-40 lg:w-40" />
        <div className="overlay" ></div>
      </div>
      <div>
        <p className="text-red-600  text-2xl text-center">
          {tittle} 
        </p>
        
      </div>
    </div>
  
              </button>
    </div>
  );
}
DishesCard.propTypes = {
  img: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default DishesCard;
