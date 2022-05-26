import React from 'react'
import "../style/card.css"
import  CardProduct  from '../components/CardProduct'
import SubTotal from '../components/SubTotal'
function Card() {
  return (
    <div className="card">
      <div className="container">
        <div className="row">
          <div className="col-md-8 card_detail">
            <CardProduct/>
          </div>
          <div className="col-md-4 card_price text-center">
            <SubTotal/>
            <button className="btn btn-dark m-2">passer au payement</button>
          </div>
        </div>
        
      </div>
      </div>
      
  )
}

export default Card