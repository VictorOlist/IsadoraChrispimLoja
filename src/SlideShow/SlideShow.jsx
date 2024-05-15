import React from "react";
import './SlideShow.css';
import Slide1 from '../Images/main_img.png';
import Slide2 from '../Images/bolo-slide1.jpg';
import Slide3 from '../Images/cupcake-slide2.jpg';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'


function BodySt (){

    const data = [
        { id: '1', image: 'https://www.minhareceita.com.br/app/uploads/2022/04/bolodepote1200480.jpg' },
        { id: '2', image: 'https://www.dicasonline.com/wp-content/uploads/receitas-de-trufas-de-chocolate.jpg' },
        { id: '3', image: 'https://delicious.com.br/wp-content/uploads/2020/11/DSC05634.jpg' },
        { id: '4', image: 'https://www.southernliving.com/thmb/nGQsqeKFP_PH4hXLa3uvXhs3YjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-Brigadeiros_002-07cd8139bdab4ef380b9a54d8a3893e4.jpg'}
    ]

    return(
    <body className="imgBackground">
        <div>
            <Swiper
            effect="coverfade"
            slidesPerView={1} 
            loop={true}
            pagination={{dynamicBullets: true}}
            navigation >
                {data.map((item) =>(
                <SwiperSlide key={item.id} >
                <img src={item.image} alt="Slider" title="Slider1" className="slide-item"/>
                </SwiperSlide> 
                ))}
            </Swiper>
        </div>
    </body>
    )    
}

export default BodySt;