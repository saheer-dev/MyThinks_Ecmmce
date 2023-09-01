import React from 'react'
import {PRODUCTS} from '../products'
import Product from './product'
import './shop.css'

export default function Shop() {
  return (
    <div className='shoping'>

  <div className='shoptitle'>
  </div>

  <div className='products'>

    {PRODUCTS.map(m=>(
        <Product data={m}/>
    ))}

  </div>

    </div>
  )
}
