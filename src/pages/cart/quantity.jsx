
import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import '../cart/quantity.css'



const Total = createContext();
export default function Quantity(props) {

  let aprice = props.addprice

    const [counter, setCounter]=useState(1)
    const [price, setPrice]= useState(aprice)

    function up(){
      let a=counter+1
        setCounter(ab=>ab+1)
        setPrice(m=>aprice*a)
        
    }
    function down(){
      let b=counter-1
        setCounter(ab=>ab-1)
        setPrice(m=>aprice*b)


        
    }

  return (
   <div className='qunty'>
     <div className='counter'>
        <button className='btn' onClick={down}disabled={counter===0} >-</button>
        <p className='dis'>{counter}</p>
        <button className='btn' onClick={up}>+</button>
    </div>
         <h2>₹ {price}</h2>
   </div>
  )

}
export {Total}
