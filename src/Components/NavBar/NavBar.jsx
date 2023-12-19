import React from 'react'
import Style from './NavBar.module.scss'
import Logo from "../images/logo.png"
import Container from "./../Container/Container"


import Button from "react-bootstrap/Button";
import Containerr from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navicon from "../images/shopping-cart.svg";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={Style.nav}>
      <Container>
        <Navbar expand="lg" className="body-tertiary">
          <Containerr>
            <Navbar.Brand href="#">
              {" "}
              <img className={Style.navbar_logo} src={Logo} alt="" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              className={Style.navbar_collapse}
            >
              <Form className="d-flex" id={Style.navbar_from}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className={Style.from_button} variant="primary">
                  Search
                </Button>
              </Form>

              <Link to={"/basiccart"}>
                <div className={Style.nav_icons}>
                  <img className={Style.nav_icons_img} src={Navicon} alt="" />{" "}
                  <p>Orders</p>
                </div>
              </Link>
            </Navbar.Collapse>
          </Containerr>
        </Navbar>
      </Container>
    </nav>
  );
}
