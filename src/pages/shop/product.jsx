import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop_context'

export default function Product(props) {
const {id, bname, pname, price, pimage} = props.data;
 const {addToCart, cartItems} = useContext(ShopContext)

return(

  <div className='page'>
  <div className='product'>
      <img src={pimage} />

      <div className='details'>
          <h2 style={{color:"blue"}}>{bname}</h2>
          <p>{pname}</p>
          <h3>₹ {price}</h3>
      <button className='cartbtn' onClick={()=>addToCart(props.data)}>Add to Cart</button>

      </div>
   </div>
  </div>
  
    
  )
}
