import React from 'react'
import  "./Header.css"

const Header = () => {
  return (
     <header>
      <div className='container'>
        <h1>ReactMeals</h1>
        <div className='cartContainer'>
          <span><img src = "/public/cart-logo.svg" alt="cart-logo"/></span>
          <span>your cart</span>
          <span className='itemCount'>0</span> 
        </div>
      </div>
     </header>
  )
}

export default Header