
import DishesCard from './DishesCard'
import img1 from '../assets/images/card1.jpg'
import img2 from '../assets/images/card2.avif'
import img3 from '../assets/images/card3.jpg'
import img4 from '../assets/images/card4.jpeg'
import img6 from '../assets/images/card5.jpg'
import img5 from '../assets/images/card6.webp'
import About from './About'
import Footer from './Footer2'
function Dishes() {
  return (
    <>
    <div className='min-h-screen  flex flex-col justify-center items-center lg:px-24 pt-32 '>
        <p className='text-2xl lg:text-4xl font-serif  font-semibold text-center text-red-500 pb-10'>
           <span className="text-red-800">DISCOVER </span>
           <span className="text-black">OUR </span>
           <span className="text-red-800">FOOD </span>
           <span className="text-black">MENU</span>
           </p>
        <div className='flex flex-wrap gap-8 justify-center items-center '>
            <DishesCard img={img1} tittle='Burgers' price='₹150' />
            <DishesCard img={img2} tittle='Pizza' price='₹220' />
            <DishesCard img={img3} tittle='Fries' price='₹100' />
            <DishesCard img={img4} tittle='Wings' price='₹150' />
            <DishesCard img={img5} tittle='Wraps' price='₹150' />
            <DishesCard img={img6} tittle='Mocktail' price='₹150' />
            </div>
    </div>
    <About/>
    <Footer/>
    </>
  )
}

export default Dishes