
import dimg from "../assets/images/product1.jpg";
import { FaCaretSquareUp } from "react-icons/fa";

function BestSallers({
  img = dimg,
  type = "non-veg",
}) {
  let color = 'red';
  if (type === 'veg') {
    type = 'Veg';
    color = 'green';
  } else {
    type = 'Non-veg';
  }

  return (
   
      <div className="bg-white w-full h-full shadow-lg rounded-xl p-2 mb-2">
        <div
          className="bg-cover bg-center w-full  h-60 rounded-xl   "
          style={{ backgroundImage: `url(${img})` }}
        >
          </div>
    </div>
  );
}

export default BestSallers;
