import React from 'react'
import "../../styles/testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import avator1 from "../../assets/img/avatar01.png";
import avator2 from "../../assets/img/avatar02.png";

export default function Testimonials(){
  return (
    <>
        <section>
            <div className="container sliders">
                <h2 className='section__title'>Testimonials</h2>
                {/** */}
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className='mySwiper'
                    >
                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="slide__img-01">
                                <img src={avator1} alt=''/>
                            </div>
                            <h4>Jessica Francies</h4>
                            <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="slide__img-02">
                                <img src={avator2} alt=''/>
                            </div>
                            <h4>Mark Antony</h4>
                            <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="slide__img-03">
                                <img src={avator1} alt=''/>
                            </div>
                            <h4>Mark Antony</h4>
                            <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </section>
    </>
  );
};


