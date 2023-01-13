
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { movieApi } from '../axios';
import { useState, useEffect } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function Genre() {
  const [images] = useState('https://image.tmdb.org/t/p/w342');
  const [popularList, setPopularList] = useState([]);
  const [movie, setMovie] = useState([]);
  async function genre() {
    const itemList = await movieApi.genre('movie')
    const popularList = await movieApi.popular('movie')
    const popularResults = popularList.data.results
    const bannerList = itemList.data.genres;
    setPopularList(popularResults)
    setMovie(bannerList)
  }

  console.log(popularList)

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
        <ul class="ganre_list">
          {popularList && popularList.map(item => (
            <li class="list_card">
              <picture>
              <img src={`${images}${item.poster_path}`} alt="background_image"/>
              </picture>
              <p class="tit">{item.title} </p>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
