import React from 'react'
import "../style/cardProduct.css"
function CardProduct(props) {
  return (
    <div className="cardProduct">
        <div className="product_img">
        <img src={props.image} 
          className="img-fluid img-thumbnail m-2" alt="Responsive image"  />
      </div>
      <div className="product-info">
        <div className="one">
        <p>{props.titles}</p>
        <p className='product_price'>{props.price}</p>
        </div>
        
      
      </div>
    </div>
  )
}

export default CardProduct