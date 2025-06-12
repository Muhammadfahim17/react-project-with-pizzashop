import React from 'react'
import './components.css'
import image9 from '../assets/pizza(1).png'
import image10 from '../assets/Group 47.png'
import image11 from '../assets/Group 48.png'
import image12 from '../assets/Group 49.png'

const Cartpizza = () => {
  return (
    <div className='cart'>
        <img className='pizza' src={image9} alt="" />
        <div className="textcart">
        <h2>Argentina</h2>
        <p>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
        <div className="imagepizza">
        <img src={image10} alt="" />
        <img src={image11} alt="" />
        <img src={image12} alt="" />
        </div>
        <button className='ingridients'>+ Ingridients</button>
        <div className="moneypiza">
            <h3>7,35 $</h3>
            <div className="buttonmoney">
                <button className='minus'>-</button>
                <span>1</span>
                <button className='pilus'>+</button>
            </div>
        </div>
        <button className='order'>Order Now</button>
        </div>
    </div>
  )
}

export default Cartpizza