
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {movieApi} from './../axios';
import { useState, useEffect } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

export default function App() {
    const [movie, setMovie] = useState([]);
    async function TopRated() {
        const itemList = await movieApi.TopRated('movie')
        const bannerList = itemList.data.results
        setMovie(bannerList)
    }

    useEffect(() => {
        TopRated();
    }, []);

    return (
        <>
            <Swiper className="mySwiper">
                {movie.map(item => (
                    <SwiperSlide className="item_card" key={item.id}>
                        <h3> {item.title} </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
