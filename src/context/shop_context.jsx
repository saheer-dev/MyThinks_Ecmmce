import React, { useState } from 'react'
// import { PRODUCTS } from '../pages/products';
import { createContext } from 'react';

 const ShopContext = createContext(); 


  function ShopcontextProvider({children}) {

    const [cartItem,setCartItems]=useState([]);

  
    function addToCart(itemId){
        console.log(itemId)
        setCartItems((prev) => ([...prev, itemId]))
  
    } 
    // function removeToCart(itemId){
    //     setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    // }   


const contextValue = {cartItem, addToCart}
// const contextValue = {PRODUCTS}
console.log(cartItem);

  return ( 
    
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
      

  )
}

export { ShopcontextProvider, ShopContext};