import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop_context'
import Quantity from './quantity';
import '../cart/cart.css'


export default function Cart() {
  const cartItems= useContext(ShopContext)

  return (    

<div>
    {
      cartItems.cartItem.map(m=>(
       <div className='cpage'>
         <div className='ccart'>

          <div className='det'>
          <img className='imgs' src={m.pimage} />
          </div>

          <div className='det'>
          <h2>{m.bname}</h2>
          </div>

          <div className='det'> 
          <p>{m.pname}</p>
          </div>

          <div >
          <Quantity addprice={m.price} />
          </div>
        </div>
       </div>
       
      ))
    }
    </div>

)}