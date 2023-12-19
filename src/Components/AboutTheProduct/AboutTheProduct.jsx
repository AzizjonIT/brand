import React from 'react'
import Style from "./AboutTheProduct.module.scss"
import Stars from "../images/rating.png"
import Reviews from "../images/message.png"
import Shopping from "../images/shopping_basket.png"

export default function AboutTheProduct() {
  return (
    <div className={Style.about_proce_col}>
      <ul>
        <li className={Style.about_list}>
          <img src={Stars} alt="Error" className={Style.rating} />
          9.3
        </li>
        <li className={Style.about_list}>
          <img src={Reviews} alt="" className={Style.reviews_icon} />
          32 reviews
        </li>
        <li className={Style.about_list}>
          <img src={Shopping} alt="" className={Style.shopping} />
          154 sold
        </li>
      </ul>
    </div>
  )
}
