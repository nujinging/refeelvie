
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {movieApi} from '../axios';
import { useState, useEffect } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function Genre() {
  const [movie, setMovie] = useState([]);
  async function genre() {
      const itemList = await movieApi.genre('movie')
      const bannerList = itemList.data.genres;
      setMovie(bannerList)
  }

  console.log(movie)

  useEffect(() => {
      genre();
  }, []);

    return (
      <>
      <div className="item_container">
      <Swiper slidesPerView={'auto'} className="mySwiper genre_title">
          {movie && movie.map(item => (
            <SwiperSlide className="genre_item" key={item.id}>
              <h3> {item.name} </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </>
    );
  }
