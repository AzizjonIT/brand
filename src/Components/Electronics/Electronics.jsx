import React, { useEffect, useState } from 'react'
import Style from "./Electromics.module.scss"
import Container from '../Container/Container'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import Check from "../images/check.png"
import Favorite from "../images/favorite_border.png"
import AboutTheProduct from '../AboutTheProduct/AboutTheProduct'

export default function Electronics() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container >
            <div className={Style.electronics_font}>
                {
                    product.slice(0, 7).map(product => {
                        return (
                            <React.Fragment key={product.id}>
                                <div className={Style.product_images_row}>
                                    <div
                                        className={Style.product_images}>
                                        <img
                                            src={process.env.PUBLIC_URL
                                                + "/images/" +
                                                product.image}
                                            alt="Error"
                                            className={Style.product_image}
                                        />
                                    </div>
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={0}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <SwiperSlide>
                                            
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                {/*  */}

                <div className={Style.content_items}>
                    <div className={Style.content_items_top}>
                        <div className={Style.content_items_select}>
                            <h6 className={Style.text_icon}>
                                <img src={Check} alt="Error" className={Style.icon} />
                                In stock
                            </h6>
                            <p className={Style.content_items_top_text}>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
                        </div>
                        <div className={Style.text_icon}>
                            <button className={Style.media_icon_btn}>Send inquiry</button>
                            <img src={Favorite} alt="Error" className={Style.icon} />
                            <h6>
                                Save for later
                            </h6>
                        </div>
                    </div>
                    {/* <AboutTheProduct /> */}
                </div>
            </div>
        </Container>
    )
}
