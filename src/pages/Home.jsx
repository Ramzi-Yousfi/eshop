import React from 'react'
import "../style/home.css"
import Product from '../components/Product';
function Home() {
  return (
    <> 
        <div className="container home-container">
           
            <div className="row">
                <div className="col-6  " >
                  <Product 
                  id="14225742574"
                  titles="the first product"
                  price={12.99}
                  rating={2}
                  image="https://www.labonnepointure.fr/cache/images/product/93ff71053706e46587c3364cdd08218f-img_5230.jpg-105560.jpg"
                  />
                </div>
                <div className="col-6 " >
                    <Product
                     id="225727727"
                     titles="the second product"
                     price={15}
                     rating={5}
                                          image="https://www.sneakers-actus.fr/wp-content/uploads/2018/05/chaussure-basket-adidas-f-22-primeknit-laine-merinos-orange-et-noire-aux-pieds-CQ3026.jpg"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4   " >
                <Product
                     id="32727778"
                     titles="the second product"
                     price={15}
                     rating={2}
                     image="https://www.sneakers-actus.fr/wp-content/uploads/2018/05/basket-adidas-f-22-primeknit-laine-merinos-bleu-turquoise-noir-orange-2.jpg"
                    />
                </div>
                <div className="col-4  " >
                <Product
                     id="472857272"
                     titles="the second product"
                     price={15}
                     rating={4}
                     image="https://www.cdiscount.com/pdt2/8/1/2/1/700x700/mp11247812/rw/adidas-originals-homme-chaussures-baskets-f-22-p.jpg"
                    />
                </div>
                <div className="col-4  " >
                <Product
                     id="52752772785527"
                     titles="the second product"
                     price={15}
                     image="https://www.cdiscount.com/pdt2/8/2/7/1/700x700/mp51743827/rw/adidas-originals-baskets-mode-f-1-4-pk.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home