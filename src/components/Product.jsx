import React from 'react'
import "../style/product.css"


function Product(props) {
  return (
    <div className="product row img-thumbnail">
      <div className="product_img">
        <img src={props.image} 
          className="img-fluid img-thumbnail m-2" alt="Responsive image"  />
      </div>
      <div className="product-info">
        <div className="one">
        <p>{props.titles}</p>
        <p className='product_price'>{props.price}</p>
        </div>
        <div className="two">
        <div className="product_rating">{Array(props.rating).fill().map((_,i) =>
   
            (<span key={i} >⭐</span>)
      )}
        </div>
        <button className="btn btn-success"> add to card</button>
        </div>
      
      </div>
    </div>
  )
}

export default Product