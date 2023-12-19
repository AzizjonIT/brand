import React from 'react'
import Style from "./Home.module.scss"
import Container from "../../Components/Container/Container";
import Products from '../../Components/Products/Products';
import Category from '../../Components/Category/Category';

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <div className={Style.home}>
          <div className={Style.home_category}>
            <Category />
          </div>
          <div className={Style.home_carts}>
            <Products />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
