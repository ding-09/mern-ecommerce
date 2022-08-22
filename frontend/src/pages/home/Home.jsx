import React from 'react';
import Card from '../../components/cards/home';
import { HomePage } from './style';
import homeData from './data';

const Home = () => {
  const gridPos = ['hero', 'women', 'men', 'kids', 'sale'];
  return (
    <HomePage>
      {homeData.map((data, index) => (
        <Card data={data} key={index} gridPos={gridPos[index]}/>
      ))}
    </HomePage>
  );
};

export default Home;
