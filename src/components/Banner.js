
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {movieApi} from './../axios';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {

    const popularTv = async () => {
        const a = await movieApi.TopRated('movie')
        const b = a.data.results;
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const c =  b.filter(value => korean.test(value.title) && korean.test(value.overview)).splice(0, 5);
        console.log(c)
    }

    popularTv();


    return (
        <>
        
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper home_banner">
                <SwiperSlide>
                    <div className="banner_txt">
                        <h2 className="tit"> 11 </h2>
                        <p> 22 </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
