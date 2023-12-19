import React from 'react'
import Style from "./Footer.module.scss"
import Logo from "../images/logo.png"
import Face from "../images/facebook3.png"
import Twitt from "../images/twitter3.png"
import Link from "../images/linkedin3.png"
import Insta from "../images/instagram3.png"
import You from "../images/youtube3.png"
import App from "../images/Property 1=Store, Property 2=Appstore.png"
import Google from "../images/Group.png"
import Container from "./../Container/Container"

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={Style.footer}>
          <div className={Style.footer_item}>
            <img src={Logo} alt="Error" className={Style.footer_logo} />
            <p className={Style.footer_item_text}>Best information about the company gies here but now lorem ipsum is</p>
            <div className={Style.footer_item_icons}>
              <img
                src={Face}
                alt="Error"
                className={Style.footer_item_icons_image} />
              <img
                src={Twitt}
                alt="Error"
                className={Style.footer_item_icons_image} />
              <img
                src={Link}
                alt="Error"
                className={Style.footer_item_icons_image} />
              <img
                src={Insta}
                alt="Error"
                className={Style.footer_item_icons_image} />
              <img
                src={You}
                alt="Error"
                className={Style.footer_item_icons_image} />
            </div>
          </div>
          <div className={Style.footer_item}>
            <h2 className={Style.footer_item_h2}>About</h2>
            <ul>
              <li className={Style.footer_item_list}>About Us</li>
              <li className={Style.footer_item_list}>Find store</li>
              <li className={Style.footer_item_list}>Categories</li>
              <li className={Style.footer_item_list}>Blogs</li>
            </ul>
          </div>
          <div className={Style.footer_item}>
            <h2 className={Style.footer_item_h2}>Partnership</h2>
            <ul>
              <li className={Style.footer_item_list}>About Us</li>
              <li className={Style.footer_item_list}>Find store</li>
              <li className={Style.footer_item_list}>Categories</li>
              <li className={Style.footer_item_list}>Blogs</li>
            </ul>
          </div>
          <div className={Style.footer_item}>
            <h2 className={Style.footer_item_h2}>Information</h2>
            <ul>
              <li className={Style.footer_item_list}>Help Center</li>
              <li className={Style.footer_item_list}>Money Refund</li>
              <li className={Style.footer_item_list}>Shipping</li>
              <li className={Style.footer_item_list}>Contact us</li>
            </ul>
          </div>
          <div className={Style.footer_item}>
            <h2 className={Style.footer_item_h2}>For users</h2>
            <ul>
              <li className={Style.footer_item_list}>Login</li>
              <li className={Style.footer_item_list}>Register</li>
              <li className={Style.footer_item_list}>Settings</li>
              <li className={Style.footer_item_list}>My Orders</li>
            </ul>
          </div>
          <div className={Style.footer_item}>
            <h2 className={Style.footer_item_h2}>Get app</h2>
            <div className={Style.colobarate}>
              <img src={App} alt="Error" className={Style.colobarate_image} />
              <img src={Google} alt="Error" className={Style.colobarate_image} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
