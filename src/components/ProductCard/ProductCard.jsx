import React from 'react'
import './ProductCard.css'

export default function ProductCard({product}) {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} />
      <div className="card-content">
      <h4>{product.title.slice(0, 40)}...</h4>
      <p>${product.price}</p>
      </div>
    </div>
  )
}
