import React from 'react'
import "../style/card.css"
import CardProduct from '../components/CardProduct'
import SubTotal from '../components/SubTotal'
import { useStateValue } from '../provider/StateProvider'
function Card() {
  const [{ cards }, dispatch] = useStateValue();

    if (cards.length === 0) {
      return (
        <div className="empty text-center">
          <h2>Your card is empty</h2>
        </div>
      )
    } else {
      return (
        <div className="cards">
          <div className="container">
            <div className="row">
              <div className="col-md-7 card_detail m-1 ">
                {cards.map(card => {
                  return <CardProduct key={card.id}
                    id={card.id}
                    picture={card.picture}
                    title={card.title}
                    price={card.price}
                  />
                }
                )}
              </div>
              <div className="col-md-3  m-1 card_price text-center">
                <SubTotal />
                <button className="btn btn-dark m-1">passer au payement</button>
              </div>
            </div>

          </div>
        </div>)
    }
  
  }




  export default Card