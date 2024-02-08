import React from 'react'
import "./Product.scss"

export default function Product({price}) {
  return (
    <div className='product'>
        <img src="image01.jpeg" alt="" />
        <p>Price: {price}</p>
        <button>Read More</button>
    </div>
  )
}
