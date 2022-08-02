import React from 'react';
import Card from '../../components/cards/home';
import { HomePage } from './style';
import homeData from './data';

const Home = () => {
  return (
    <HomePage>
      {homeData.map((data, index) => (
        <Card data={data} key={index}/>
      ))}
    </HomePage>
  );
};

export default Home;
