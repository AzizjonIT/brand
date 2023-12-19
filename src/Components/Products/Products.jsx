import React, { useEffect, useState } from 'react'
import Style from "./Products.module.scss";
import clear from "../images/clear.svg"
import axios  from 'axios';

import forovite from "../images/favorite_border.svg"



const Products = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:9000/products`).then(res => setProducts(res.data)).catch(err => console.log(err))
  }, [] )

  return (
    <React.Fragment>
      <div className={Style.clear_top}>
        <div className={Style.clear_x}>
          <p className={Style.clear_x_title}>Samsung</p>
          <img className={Style.clear_x_icon} src={clear} alt="" />
        </div>
        <div className={Style.clear_filter}>
          <p>Clear all filter</p>
        </div>
      </div>
      <div className={Style.products}>
        {
          products.slice(0,9).map(products => {
            return (
              <React.Fragment key={products.id}>


                
                <div className={Style.products_row}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + products.image}
                    alt=""
                  />
                  <div className={Style.products_title}>
                    <div className={Style.title_top}>
                      <div className={Style.products_price}>
                        <h4 className={Style.price}> {products.price} </h4>
                        <p className={Style.no_price}> {products.no_price} </p>
                      </div>
                      <div className={Style.products_stars}>
                        <img
                          className={Style.stars_icon}
                          src={
                            process.env.PUBLIC_URL + "/images/" + products.stars
                          }
                          alt=""
                        />
                        <p> {products.stars_number} </p>
                      </div>
                    </div>
                    <div className={Style.bottom} >
                      <button className={Style.button_forovite}>
                        <img className={Style.forovite} src={forovite} alt="" />
                      </button>
                    </div>
                  </div>
                  <p className={Style.title}> {products.title} </p>
                  <p className={Style.title}> {products.camera} </p>
                </div>
              </React.Fragment>
            );
          })
       }
      </div>
    </React.Fragment>
  );
}

export default Products
