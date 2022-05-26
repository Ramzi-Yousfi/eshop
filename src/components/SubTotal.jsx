import React from 'react'
import  CurrencyFormat  from "react-currency-format";
import {useStateValue} from '../provider/StateProvider'
import {getCardTotal} from '../provider/StateProvider'
function SubTotal() {
  const [{cards}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText = {(value) => {
              
                  return (<div>
                    <p> 
                      {cards.length} items :<strong>{value}</strong>
                    
                    </p> 
                    </div>
                  )
              
            }}
            decimalScale={2}
            value={getCardTotal(cards)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
     
    </div>
  )
}

export default SubTotal