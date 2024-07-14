
import PropTypes from 'prop-types';
function SafetyCard({img,title,discription }) {
  return (
  
     
               
    <div className="flex flex-col justify-center items-center  ">
      <div className="   h-36  w -36 rounded-full lg:h-60 lg:w-60  my-4  border-x-8 border-red-600 ">
        <img src={img} alt="" className="rounded-full h-40 w-40   lg:h-60 lg:w-60" />
      </div>
      <div>
        <p className="text-black  text-2xl   font-serif  font-thin text-center mb-2">
          {title} 
        </p>
        <p className="  text-1.5xl  text-red-600 text-center">
         {discription}
        </p>
       

      </div>
    </div>
  );
}
SafetyCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};


export default SafetyCard
