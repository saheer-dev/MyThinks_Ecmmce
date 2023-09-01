import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart} from "@phosphor-icons/react";



export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 style={{color:"white"}}>My< span style={{color:"orange"}}>things</span>.in</h1>
        <div className="links">
            <Link className='shop' to='/'> Shop</Link>
            <Link className='cart' to='/cart'> <ShoppingCart size={32} color='orange' /></Link>
            
        </div>
    </div>
  )
}