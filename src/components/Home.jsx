import React from 'react';
import Slider from './ImgSlider.jsx';
import Cards from './Cards.jsx';
import MoviesList from './MoviesList.jsx';
import homeBackground from '../assets/home-background.png';
import Header from './Header.jsx';
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-[calc(100vh-70px)] max-sm:gap-24 w-full flex flex-col overflow-x-hidden px-12 max-sm:px-5'
    >
      <Slider />
      <Cards />
      <MoviesList />
    </div>
  );
}

export default Home;
