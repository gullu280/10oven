import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Navbar"; // Import Navbar as Header
import "./App.css";
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import Loader from "./components/Loader";
import Products from "./components/Products";
import About2 from "./components/About2";
import Dishes from "./components/Dishes";
import ScrollToTop from "./components/ScrollToTop";
import TermAndCondition from "./components/Safety";
import Enquiry from "./components/Enquiry";
import Pizza from "./components/Pizza";
import Safety from "./components/Safety";
import TermAndCondt from "./components/T&C";
import Burger from "./components/Burger";
import StoreLocator from "./components/StoreLocator";
import BulkOrder from "./components/BulkOrder";
import SoftDrink from "./components/SoftDrink";
import MenuItem from "./components/MenuItem";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 2800)
  }, []);

  return (
    <div className="app-container">
      {isLoading ? <Loader /> : (
        <>
          <ScrollToTop />
          <Header />
         
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/feedback' element={<FeedbackForm />} />
            <Route path='/product/:tittle' element={<Products />} />
            <Route path='/About' element={<About2 />} />
            <Route path='/dishes' element={<Dishes />} />
            <Route path='/enquiry' element={<Enquiry />} />
            <Route path='/safety' tittle="safety" element={<Safety />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/term&condition' element={<TermAndCondt />} />
            <Route path='/Burger' element={<Burger />} />
            <Route path='/StoreLocator' element={<StoreLocator />} />
            <Route path='/BulkOrder' element={<BulkOrder />} />
            <Route path='/SoftDrink' element={<SoftDrink />} />
            <Route path='/MenuItem' element={<MenuItem />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
