
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {movieApi} from './../axios';
import { useState, useEffect } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
    const [movie, setMovie] = useState([]);
    async function popularTv() {
        const itemList = await movieApi.popularTv('movie')
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const bannerList = itemList.data.results.filter(value => korean.test(value.title) && korean.test(value.overview)).splice(0, 5);
        setMovie(bannerList)
    }

    useEffect(() => {
        popularTv();
    }, []);

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper home_banner">
                {movie.map(item => (
                    <SwiperSlide className="item_card" key={item.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path})` }}>
                        <div className="banner_txt">
                            <h2 className="tit"> {item.title} </h2>
                            <p> {item.overview}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
