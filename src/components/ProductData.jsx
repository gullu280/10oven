
//fries
import fries1 from '../assets/images/fries1.jpeg'
import fries2 from '../assets/images/fries2.jpeg'
import fries3 from '../assets/images/fries3.jpeg'
import fries4 from '../assets/images/fries4.jpeg'
import fries5 from '../assets/images/fries5.jpeg'
import fries6 from '../assets/images/fries6.jpeg'

//burg
import burg1 from '../assets/images/burg1.png'
import burg2 from '../assets/images/burg2.jpg'
import burg3 from '../assets/images/burg3.jpg'
import burg4 from '../assets/images/burg4.jpg'
import burg5 from '../assets/images/burg5.jpeg'
import burg6 from '../assets/images/burg6.jpg'
import burg7 from '../assets/images/burg7.jpg'

//safety
import safety1 from '../assets/images/safety1.jpg'
import safety2 from '../assets/images/safety2.jpg'
import safety3 from '../assets/images/safety3.jpg'
import safety4 from '../assets/images/safety4.jpg'
import safety5 from '../assets/images/safety5.jpg'
import safety6 from '../assets/images/safety6.jpg'
import safety7 from '../assets/images/safety7.jpg'

//pizza
import pizza1 from '../assets/images/pizza1.jpeg'
import pizza2 from '../assets/images/pizza2.jpeg'
import pizza3 from '../assets/images/pizza3.jpeg'
import pizza4 from '../assets/images/pizza4.jpeg'
import pizza5 from '../assets/images/pizza5.jpeg'
import pizza6 from '../assets/images/pizza6.jpeg'
//wraps
import  wrap1 from '../assets/images/wrap1.jpg'
import  wrap2 from '../assets/images/wrap2.jpeg'
import  wrap3 from '../assets/images/wrap3.jpeg'
import  wrap4 from '../assets/images/wrap4.jpeg'
//wing
import  wing1 from '../assets/images/wing1.jpg'
import  wing2 from '../assets/images/wing2.jpg'
import  wing3 from '../assets/images/wing3.jpeg'
import  wing4 from '../assets/images/wing4.jpg'
import  wing5 from '../assets/images/wing5.jpg'
import  wing6 from '../assets/images/wing6.jpeg'
import  wing7 from '../assets/images/wing7.jpeg'
import  wing8 from '../assets/images/wing8.jpeg'
import  wing9 from '../assets/images/wing9.jpeg'
import  wing10 from '../assets/images/wing10.jpeg'
import  wing11 from '../assets/images/wing11.jpeg'



//mocktail
import mock1 from '../assets/images/mock1.jpeg'
import mock2 from '../assets/images/mock2.jpeg'
import mock3 from '../assets/images/mock3.jpeg'
import mock4 from '../assets/images/mock4.jpeg'
import mock5 from '../assets/images/mock5.jpeg'

//best saller
import slide1 from "../assets/images/slide5.png";
import slide2 from "../assets/images/slide6.jpeg";
import slide3 from "../assets/images/slide7.jpg";
import slide11 from "../assets/images/slide11.jpg";
import slide12 from "../assets/images/slide12.jpg";
import slide13 from "../assets/images/slide13.jpg";
//menu
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
const ProductData = [
  // new barger
  {
    title: "Classic Zinger Burger",
    price: 99,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Lettuce, Extra Crispy Fried Chicken",
    type: "non-veg",
    category: "Burgers",
    img:burg1 // Replace with the actual path to the image
  },
  {
    title: "Loaded Zinger Burger",
    price: 149,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Double Extra Crispy Fried Chicken",
    type: "non-veg",
    category: "Burgers",
    img:burg2 // Replace with the actual path to the image
  },
  {
    title: "Maharaja Paradise Paneer Burger",
    price: 149,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Cheese Slice, Extra Crispy Paneer Patties",
    type: "veg",
    category: "Burgers",
    img: burg3   // Replace with the actual path to the image
  },
  {
    title: "Classic Zinger Burger",
    price: 99,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Lettuce, Extra Crispy Fried Chicken",
    type: "non-veg",
    category: "Burgers",
    img:burg4// Replace with the actual path to the image
  },
  {
    title: "Loaded Zinger Burger",
    price: 149,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Double Extra Crispy Fried Chicken",
    type: "non-veg",
    category: "Burgers",
    img: burg5 // Replace with the actual path to the image
  },
  {
    title: "Veg Over Loaded Burger",
    price: 79,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Flavored Sauce, Juicy Tomato, Fresh Onion, Tangy Jalapeno, Lettuce, Extra Crispy Veg Patties",
    type: "veg",
    category: "Burgers",
    img: burg6 // Replace with the actual path to the image
  },
  {
    title: "Veg Crazy Burger",
    price: 49,
    description:
      "Healthy Fresh Bun, Creamy Mayo, Juicy Tomato, Lettuce, Crispy Veg Patties",
    type: "veg",
    category: "Burgers",
    img: burg7 // Replace with the actual path to the image
  },
    
// new safetys


   
   
// new hgvbnmklkjhgfc
{
  title: "TEMPERATURE CHECKS",
  description: "Temperature checks are done for all employees before their shift starts and after every 4 hours.",
   category: "safety",
  img: safety1
  },
  {
  title: "USE OF MASKS",
  description: "All employees wear Masks as safety gear.",
   category: "safety",
  img: safety2
  },
  {
  title: "SANITARY FOOD HANDLING",
  description: "Food Handler, Delivery Boys Order Takers wear gloves throughout their shifts",
   category: "safety",
  img: safety3
  },
  {
    title: "SAFE DELIVERY",
    description: "Sanitization of Delivery Bags, done before and after every delivery",
     category: "safety",
    img: safety4
    },
    {
    title: "STRICT HYGIENE MEASURES",
    description: "Hand wash, with 40 secs rule is adhered every hour",
     category: "safety",
    img: safety5
    },
    {
    title: "STAFF SANITIZATION",
    description: "We sanitize our work stations frequently as a hygiene & safety measure",
     category: "safety",
    img: safety6
    },
    {
    title: "KITCHEN HYGIENE",
    description: "We sanitize our hands every hour and when we come on our shifts",
     category: "safety",
    img: safety7
    },
  
// slide home 2

{
  title: "TEMPERATURE CHECKS",
  description: "Temperature checks are done for all employees before their shift starts and after every 4 hours.",
   category: "Best Seller...",
  img: slide11
  },
  {
  title: "USE OF MASKS",
  description: "All employees wear Masks as safety gear.",
   category: "Best Seller...",
  img: slide12
  },
  {
  title: "SANITARY FOOD HANDLING",
  description: "Food Handler, Delivery Boys Order Takers wear gloves throughout their shifts",
   category: "Best Seller...",
  img: slide13
  },
  {
    title: "SAFE DELIVERY",
    description: "Sanitization of Delivery Bags, done before and after every delivery",
     category: "Best Seller...",
    img: slide3
    },
    {
    title: "STRICT HYGIENE MEASURES",
    description: "Hand wash, with 40 secs rule is adhered every hour",
     category: "Best Seller...",
    img: slide2
    },
    {
    title: "STAFF SANITIZATION",
    description: "We sanitize our work stations frequently as a hygiene & safety measure",
     category: "Best Seller...",
    img: slide1
    },
    //wings
    {
      title: "Hot Volcano Wings [10pc]",
      description: "Hot Extra Crispy Chicken Wings with chalte of Flavored Mayo dip",
       category: "Wings",
      price:139,
      type:"nonveg",
      img: wing1
      },
      {
      title: "Hot n Crisp Lollipop [8pc]",
      description: "Hot Extin Dispy Chicken Lolland with theire of Flavored Maye",
      type: "non veg",
      price:239,
       category: "Wings",
      img: wing2
      },
      {
      title: "Hot Volcano Wings with Pepsi and fries[6pc]",
      description: "Hat Extra Crispy Chicken Wings with thoice of Flavored Moye Dio Drispy Pari Peri French Fries + 200 mi Pepsl",
      type: "non veg",
       category:"Wings",
      price:239,
      img: wing3
      },
      {
      title: "Hot Volcano Wings [6pc]",
      description:"Hat Extra Crispy Chicken Wings with thaite of Blue Flavored Mayo D",
      type: "non veg",
      price:139,
       category:"Wings",
      img: wing4
      },
      {
      title: "Hot n Crisp Lollipop with Pepsi and fries [6pc] ",
      description: "Hot Extra Crispy Chicken Lolilong with choice of a Flavored Mayn Dip Crispy Perl Perl French Fres 200 ml Pepsi",
      type: "non veg",
      price:299,
       category: "Wings",
      img: wing5
      },
        {
          title: "Hot n Crisp Boneless Strips [16pc]",
          description: "Hot Extra Crispy Chicken Boneless Strips with choice of Flavored Mayo Dip",
          type: "non veg",
      price:139,
       category:"Wings",
      img: wing6
        },
        {
          title: "Hot n Crisp Boneless Strips with Pepsi and fries [10pc]",
          description: "Hot Extra Crispy Chicken Boneless Strips with choice of 2 Flavored Mayo Dip + Crispy Peri Peri French Fries + 200 ml Pepsi",
       type: "non veg",
      price:299,
       category: "Wings",
      img: wing7
        },
        {
          title: "Hot n Crisp Boneless Strips [10pc]",
          description: "Hot Extra Crispy Chicken Boneless Strips with choice of Flavored Mayo Dip",
          price:169,
          type: "non veg",
       category: "Wings",
      img: wing8
        },
        {
          title: "Volcano Drumstick [4pc]",
          description: "Hot Extra Crispy Chicken Leg with choice of Flavored Mayo Dip",
          type: "non veg",
      price:299,
       category: "Wings",
      img: wing9
        },
        {
          title: "Volcano Drumstick with Pepsi and fries [2pc]",
          description: "Hot Extra Crispy Chicken Boneless Strips with choice of 2 Flavored Mayo Dip + Crispy Peri Peri French Fries + 200 ml Pepsi",
          type: "non veg",
      price:299,
       category: "Wings",
      img: wing10
        },
        {
          title: "Quirky Nugs [16pc]",
          description: "Hot Extra Crispy Chicken Nuggets with choice of Flavored Mayo Dip",
          type: "non veg",
      price:169,
       category: "Wings",
      img: wing11
        },
        {
          title: "Quirky Nugs with Pepsi and fries [2pc]",
          description: "Hot Extra Crispy Chicken Nuggets with choice of Flavored Mayo Dip + Crispy Peri Peri French Fries + 200 ml Pepsi",
          type: "non veg",
      price:199,
       category: "Wings",
      img: wing4
        },
        {
          title: "Quirky Nugs [10pc]",
          description: "Hot Extra Crispy Chicken Nuggets with choice of 2 Flavored Mayo Dip",
          type: "non veg",
      price:249,
       category: "Wings",
      img: wing6
        },
        {
          title: "Crispy Chicken Popcorn",
          description: "Hot Extra Crispy Chicken Popcorn with choice of Flavored Mayo dip",
          price:169,
          type: "non veg",
       category:"Wings",
      img: wing1
        },
      //wrap
      {
        title: "Chicken Twister Grilled Wrap",
        price: 139,
        description: "Hot Extra Crispy Chicken + overloaded veg Twister with Flavored Sauce",
        type: "non-veg",
        category: "Wraps",
           img: wrap1
      },
      {
        title: "Chicken Twister Grilled Wrap with Pepsi",
        price: 169,
        description: "Hot Extra Crispy Chicken + overloaded veg Twister with Flavored Sauce + 200 ml Pepsi",
        type: "non-veg",
        category: "Wraps",
           img: wrap2
      },
      {
        title: "Paneer Twister Wrap",
        price: 129,
        description: "Hot Extra Crispy Paneer + overloaded veg Twister with Flavored Sauce",
        type: "veg",
        category: "Wraps",
           img: wrap3
      },
      {
        title: "Paneer Twister Wrap with Pepsi",
        price: 159,
        description: "Hot Extra Crispy Paneer + overloaded veg Twister with Flavored Sauce + 200 ml Pepsi",
        type: "veg",
        category: "Wraps",
           img: wrap4
      },
      // fries
      {
        title: "Gold n Crisp Fries",
        price: 99,
        description: "Extra Crispy Fries + Sprinkled with Tanginess + Flexind",
        type: "veg",
        category: "Fries",
          img: fries1
      },
      {
        title: "Gold n Crisp Fries with Pepsi",
        price: 139,
        description: "Extra Crispy Fries Sprinkled with Tanginess Free Flavored Chip + 200 ml Pepsi",
        type: "veg",
        category: "Fries",
          img: fries2
      },
      {
        title: "Peri Peri French Fries",
        price: 129,
        description: "Extra Crispy Peri Peri Fries + Sprinkled with Tangiest Pescad",
        type: "veg",
        category: "Fries",
          img: fries3
      },
      {
        title: "Peri Peri French Fries with Pepsi",
        price: 169,
        description: "Extra Crispy Peri Peri Fries + Sprinkled with Tanginess Hee Flavored Dill + 200 ml Pepsi",
        type: "veg",
        category: "Fries",
          img: fries4
      },
      {
        title: "Cheese n Creamy French Fries",
        price: 149,
        description: "Crispy Fries Sprinkled with Tanginess Cheesy n Dreamy Exotic Sauce",
        type: "veg",
        category: "Fries",
          img: fries5
      },
      {
        title: "Cheese n Creamy French Fries with Pepsi",
        price: 159,
        description: "Crispy Fries Sprinkled with Tanginess Cheesy n Dreamy Exotic Sauce + 200 ml Pepsi",
        type: "veg",
        category: "Fries",
          img: fries6
      },
      //pizza
      {
        title: "Veg Overloaded Pizza",
        price: 199,
        description: "Freshly Baked 8\" Pizza with the toppings of Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive",
        type: "veg",
        category: "Pizza",
         img: pizza1
      },
      {
        title: "Veg Overloaded Pizza with Pepsi",
        price: 239,
        description: "Freshly Baked 8\" Pizza with the toppings of Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive + 200 ml Pepsi",
        type: "veg",
        category: "Pizza",
         img: pizza2
      },
      {
        title: "Deluxe Paneer Exotic Pizza",
        price: 249,
        description: "Freshly Baked 8\" Pizza with the toppings of Spicy Fried Paneer, Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive",
        type: "veg",
        category: "Pizza",
         img: pizza3
      },
      {
        title: "Deluxe Paneer Exotic Pizza with Pepsi",
        price: 299,
        description: "Freshly Baked 8\" Pizza with the toppings of Spicy Fried Paneer, Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive + 200 ml Pepsi",
        type: "veg",
        category: "Pizza",
         img: pizza4
      },
      {
        title: "Gourmet Chicken Galore Pizza",
        price: 259,
        description: "Freshly Baked 8\" Chicken Pizza with the toppings of Hot Crisp Chicken, Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive",
        type: "non-veg",
        category: "Pizza",
         img: pizza5
      },
      {
        title: "Gourmet Chicken Galore Pizza with Pepsi",
        price: 299,
        description: "Freshly Baked 8\" Chicken Pizza with the toppings of Hot Crisp Chicken, Onion, Tomato, Capsicum, Corn, Jalapeno with Black Olive + 200 ml Pepsi",
        type: "non-veg",
        category: "Pizza",
         img: pizza6
      },
      //mocktail
      {
        title: "Silky Chilled Cold Coffee",
        price: 139,
        description: "Creamy Cold Coffee garnished with chocolate lava filled with refreshing ice",
        type: "veg",
        category: "Mocktail",
        img:  mock1
      },
      {
        title: "Silky Chilled Mango Frappe",
        price: 139,
        description: "Creamy Mango Frappe garnished with cream filled with refreshing ice",
        type: "veg",
        category: "Mocktail",
        img:  mock2
      },
      {
        title: "Silky Chilled Strawberry Frappe",
        price: 159,
        description: "Creamy Strawberry Frappe garnished with cream filled with refreshing ice",
        type: "veg",
        category: "Mocktail",
        img:  mock3
      },
      {
        title: "Cool Mint Mojito",
        price: 99,
        description: "Fresh Mint Leaves, Zesty Lime Juice, Cane Sugar Syrup, Soda Water, Crushed Ice, Lime Wedges",
        type: "veg",
        category: "Mocktail",
        img:  mock4
      },
      {
        title: "Cool Blue Lagoon Mojito",
        price: 99,
        description: "Blueberry Syrup, Fresh Mint Leaves, Zesty Lime Juice, Cane Sugar Syrup, Soda Water, Crushed Ice, Lime Wedges",
        type: "veg",
        category: "Mocktail",
        img:  mock5
      },
    // Add more product objects here if needed
    {
      
      
      category: "Menu",
      img:menu1
    },
    {
      
      
      category: "Menu",
      img:menu2
    },
    {
      
      
      category: "Menu",
      img:menu3
    },
    {
      
      
      category: "Menu",
      img:menu4
    },
  ];
  export default ProductData;