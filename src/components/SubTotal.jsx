import React from 'react'
import  CurrencyFormat  from "react-currency-format";

function SubTotal() {
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText = {(value) => {
              
                  return (<div>
                    <p> {value} </p>
                    </div>
                  )
              
            }}
            decimalScale={2}
            value={15000}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
     
    </div>
  )
}

export default SubTotal