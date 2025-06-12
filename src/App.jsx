import React from 'react'
import './App.css'
import image1 from './assets/pizzashop.png'
import image2 from './assets/Group 4.png'
import image3 from './assets/Group 68.png'
import image4 from './assets/imageepizzza20250612120125.png'
import image5 from './assets/shourav-sheikh-a66sGfOnnqQ-unsplash 1.png'
import image6 from './assets/Vector 1.png'
import image7 from './assets/Pizza (1).png'
import image8 from './assets/Vector 2.png'
import image9 from './assets/egg and bacon 1.png'
import image10 from './assets/buritto 1.png'
import image11 from './assets/cofee 1.png'
import image12 from './assets/image202506111705-28.png'
import image13 from './assets/Group 60.png'
import image14 from './assets/Group 46.png'
import image15 from './assets/Menu.png'
import image16 from './assets/About.png'
import image17 from './assets/Events.png'
import image18 from './assets/shourav-sheikh-xLfqx4Psf94-unsplash 1.png'
import image19 from './assets/fries 1 (1).png'
import image20 from './assets/pizza 1 (1).png'
import image21 from './assets/Pizza.png'
import image22 from './assets/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden 1.png'
import image23 from './assets/Vector 4.png'


// import image13 from './assets/Menu.png'
import Cartpizza from './components/cartpizza';
import Cartpizza2 from './components/cartpizza2'
import Cartpizza3 from './components/cartpizza3';
import Cartpizza4 from './components/cartpizza4';
import Cartpizza5 from './components/cartpizza5';

const App = () => {
  return (
    <div>


      <div className="header">
      <img src={image1} alt="" />
      <div className="headermenu">
        <p style={{'color' : '#FF6432'}}>Home</p>
        <p>Menu</p>
        <p>Events</p>
        <p>About us</p>
      </div>
      <div className="headerbutton">
        <button style={{'backgroundColor' : '#FF5D29','color' : 'white','width' : '130px','height' : '35px','borderRadius' : '22px','fontWeight' : 'bold'}}>Log in</button>
        <img src={image2} alt="" />
        <img className='burgermenu' src={image3} alt="" />
      </div>
      </div>


      <div className="hedercenter">
        <div className="headercentertext">
        <h1 className='h1text' >The Fastest Pizza   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
    Delivery</h1>
    <p className='ptext' >We will deliver juicy pizza for your family in 30 minutes, if the courier is late - pizza is free!</p>
    <p style={{'color' : '#A3A3A3','fontSize' : '18px',}}>Cooking process:</p>
    <img src={image5} alt="" />
    <div className="headercenterbutton">
      <button style={{'backgroundColor' : '#FF5E2A','color' : 'white','fontWeight' : 'bold','padding' : '10px 40px','borderRadius' : '15px','zIndex' : '2'}}>To order</button>
      <button className='pizamneu' style={{'border' : '2px solid #FF5E2A', 'color' : '#FF5E2A','fontWeight' :'bold','padding' : '10px 40px','borderRadius' : '50px',}}>Pizza-Menu</button>
    </div>
    </div>
    <div className="divimagepizza">
    {/* <img  src={image4} alt="" /> */}
    <img className='m1'  src={image18} alt="" />
    </div>
      </div>
          <img className='w1' src={image19} alt="" />
          <img className='w2' src={image20} alt="" />
      <img className='vector1' src={image6} alt="" />
      <img className='textPizza' src={image7} alt="" />
      <img className='vector2' src={image8} alt="" />
      <img className='p1' src={image21} alt="" />
      <img className='p2' src={image21} alt="" />


    <div className="menu">
      <h1>Menu</h1>
      <div className="menubuton">
      <button className='b1' style={{'backgroundColor' : '#FF5E2A','color' : 'white','fontWeight' : 'bold','padding' : '14px 50px','borderRadius' : '15px','zIndex' : '2'}}>Show All</button>
      <button className='b1' style={{'backgroundColor' : '#210A01','color' : 'white','fontWeight' : 'bold','padding' : '10px 70px','borderRadius' : '15px','zIndex' : '2'}}>Meat</button>
      <button className='b1' style={{'backgroundColor' : '#210A01','color' : 'white','fontWeight' : 'bold','padding' : '10px 50px','borderRadius' : '15px','zIndex' : '2'}}>Vegetarian</button>
      <button className='b1' style={{'backgroundColor' : '#210A01','color' : 'white','fontWeight' : 'bold','padding' : '10px 50px','borderRadius' : '15px','zIndex' : '2'}}>Sea products</button>
      <button className='b1' style={{'backgroundColor' : '#210A01','color' : 'white','fontWeight' : 'bold','padding' : '10px 50px','borderRadius' : '15px','zIndex' : '2'}}>Mushroom</button>
      </div>
      <div className="totalcart">
        <Cartpizza />
        <Cartpizza />
        <Cartpizza />
        <Cartpizza />
      </div>
    </div>
    <img className='menucart1' src={image15} alt="" />

    <div className="center">
      <h1>MOST POPULAR PIZZA</h1>
    </div>


    <div className="totalcart">
        <Cartpizza2 />
        <Cartpizza2 />
        <Cartpizza2 />
        <Cartpizza2 />
      </div>
      <img className='menucart2' src={image15} alt="" />


    <div className="blog">
      <Cartpizza3 />
      <Cartpizza3 />
      <div className="events">
        <h1>Events</h1>
        <p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
      </div>
    </div>
    <img className='cartevents' src={image17} alt="" />

    <img className='egg' src={image9} alt="" />

    <div className="kitchen">
      <Cartpizza4 />
      <Cartpizza4 />
    </div>
    <img className='burito' src={image10} alt="" />


    <div className="coffe">
      <Cartpizza5 />
      <Cartpizza5 />
      <Cartpizza5 />
    </div>

    <img className='cartcoffe' src={image11} alt="" />



    <div className="about">
      <div className="textabout">
        <h1>About us</h1>
        <p>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
        <img className='pizaabout1'  src={image13} alt="" />
        <p>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>
      </div>
      <div className="imageabout">
    <img className='pizaabout'  src={image22} alt="" />
    </div>
    </div>
    <img className='cartabout' src={image16} alt="" />
    <img className='q1' src={image19} alt="" />
    <img className='q2' src={image20} alt="" />
    <img className='q3' src={image23} alt="" />
    <img className='q4' src={image16} alt="" />

    <div className="footer">
      <img className='logo' src={image1} alt="" />
      <div  className="footercenter f1">
        <h2>Home</h2>
        <p>To Order</p>
        <p>About us</p>
        <p>Events</p>
        <p>Menu</p>
      </div>
      <div className="footercenter f2">
        <h2>Events</h2>
        <p>3 Pizza 1 Free Coffee</p>
        <p>2 Pizza for 1 Price</p>
        <p>Kitchen Tour</p>
      </div>
      <div className="footercenter f3">
        <h2>Menu</h2>
        <p>Show All</p>
        <p>Seaproducts</p>
        <p>Vegan</p>
        <p>Meat</p>
      </div>
      <div className="footercenter">
        <h2>About Us</h2>
        <p>Our History</p>
        <p>Why We?</p>
      </div>  
    </div>
    <div className="footerinfo">
        <h2>+7 (937) 333-55-33</h2>
        <div className="imagefooterinfo">
          <img  src={image14} alt="" />
        </div>
      </div>

    </div>
  )
}

export default App