import React, { useEffect, useState } from 'react'
import Style from "./BasicCart.module.scss"
import Container from '../Container/Container'
import axios from 'axios'

export default function BasicCart() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Container>
                <h1>Orders (3)</h1>
                <div className={Style.basic_cart_block}>
                    <div className={Style.basic_cart_list}>
                        <div className={Style.basic_cart_list_left}>
                            {
                                product.slice(0, 1).map(product => {
                                    return (
                                        <React.Fragment key={product.id}>
                                            <div className={Style.basic_image_block}>
                                                <img
                                                    src={process.env.PUBLIC_URL
                                                        + "/images/" +
                                                        product.image}
                                                    className={Style.basic_image}
                                                    alt="Error" />
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                            <div className={Style.basic_content}>
                                <h2>T-shirts with multiple colors, for men and lady</h2>
                                <p>
                                    <h6>Size:
                                        <span>medium,</span></h6>
                                    <h6>
                                        Color:
                                        <span>blue,</span>
                                    </h6>
                                    <h6>Material:
                                        <span> Plastic</span></h6>
                                    <h6>Seller:
                                        <span>Artel Market</span></h6>
                                </p>
                                <div className={Style.basic_content_btn}>
                                    <button
                                        className={Style.basic_btn_active}
                                    >Remove</button>
                                    <button
                                        className={Style.basic_btn_setActive}
                                    >Save for later</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
