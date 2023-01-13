import Header from './/Header.js';
import Banner from './/Banner.js';
import ItemList from './/ItemList.js';
import { movieApi } from './../axios';
import { useState, useEffect } from 'react';
import './../App.css';

function App() {
  const [popularList, setPopularList] = useState([]);
  const [topList, setTopList] = useState([]);
  const [dayList, setDayList] = useState([]);
  const [weekList, setWeekList] = useState([]);

  async function Api() {
    const popularList = await movieApi.popular('movie')
    const topList = await movieApi.TopRated('movie')
    const dayList = await movieApi.trending('movie', 'day')
    const weekList = await movieApi.trending('movie', 'week')
    const popularResults = popularList.data.results
    const topResults = topList.data.results
    const dayResults = dayList.data.results
    const weekResults = weekList.data.results
    setPopularList(popularResults)
    setTopList(topResults)
    setDayList(dayResults)
    setWeekList(weekResults)
  }

  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="container">
      <Banner></Banner>
      <div className="item_container">
        <div className="title">
          <h2>지금 상영중이에요!</h2>
        </div>
        <ItemList list={popularList}></ItemList>

        <div className="title">
          <h2>가장 인기있는 컨텐츠</h2>
        </div>
        <ItemList list={topList}></ItemList>

        <div className="title">
          <h2>오늘 가장 많이 찾아 본 컨텐츠</h2>
        </div>
        <ItemList list={dayList}></ItemList>

        <div className="title">
          <h2>이번 주 가장 많이 찾아 본 컨텐츠</h2>
        </div>
        <ItemList list={weekList}></ItemList>
      </div>
    </div>
  );
}

export default App;
