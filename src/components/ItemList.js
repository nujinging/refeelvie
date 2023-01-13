
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

export default function ItemList(props) {
    const [images] = useState('https://image.tmdb.org/t/p/w342');

    return (
        <>  
            <Swiper slidesPerView={'auto'} className="mySwiper">
                {props && props.list.map(item => (
                    <SwiperSlide className="item_card" key={item.id}>
                        <img src={`${images}${item.poster_path}`} alt="background_image"/>
                        <h3> {item.title} </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
