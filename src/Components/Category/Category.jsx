import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Style from "./Category.module.scss"

const Category = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={Style.Accordion}>
          <Accordion.Header>
            Category
          </Accordion.Header>
          <Accordion.Body  >
            <p>Mobile accessory</p>
            <p>Electronics</p>
            <p>Smartphones </p>
            <p>Modern tech</p>
            <p className={Style.Category_all}>See all</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={Style.Accordion}>
          <Accordion.Header>Brands</Accordion.Header>
          <Accordion.Body>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Samsung</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Apple</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Huawei</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Pocco</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Lenovo</p>
            </div>
            <p className={Style.brands_all}>See all</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className={Style.Accordion}>
          <Accordion.Header>Features</Accordion.Header>
          <Accordion.Body>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Metallic</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Plastic cover</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>8GB Ram</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Super power</p>
            </div>
            <div className={Style.brands_chekbox}>
              <input type="checkbox" name="" id={Style.checkbox} />
              <p>Large Memory</p>
            </div>
            <p className={Style.brands_all}>See all</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Category;
