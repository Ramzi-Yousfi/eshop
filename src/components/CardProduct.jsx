import React from 'react'
import "../style/cardProduct.css"
import {useStateValue} from '../provider/StateProvider'


function CardProduct(props) {
  const [{cards}, dispatch] = useStateValue();
  const removeFromCard = () => {
    dispatch({
      type: 'REMOVE_FROM_CARD',
      id: props.id
    })
  }
  return (
    <div className="cardProduct  ">
        <div className="product_img_card">
        <img src={props.picture} 
          className="img-fluid img-thumbnail m-2" alt="Responsive image"  />
        </div>
      <div className="product-info">
        <div className="one">
        <p>{props.title}</p>
        <p className='product_price'>{props.price}</p>
        <button className="btn btn-danger" onClick={removeFromCard}> Remove from card</button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct