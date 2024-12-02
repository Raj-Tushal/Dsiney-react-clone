import React from 'react'
import disney from '../assets/viewers-disney.png';
import marvel from '../assets/viewers-marvel.png';
import pixar from '../assets/viewers-pixar.png';
import national from '../assets/viewers-national.png';
import disneyVideo from '../assets/videos/1564674844-disney.mp4'
import marvelVideo from '../assets/videos/1564676115-marvel.mp4'
import pixarVideo from '../assets/videos/1564676714-pixar.mp4'
import natGeogVideo from '../assets/videos/1564676296-national-geographic.mp4'

function Cards() {
  return (
    <div className=' w-full h-40 mt-10   max-sm:mt-0 flex flex-wrap justify-between gap-5 py-3'>
      <Poster img={disney} video={disneyVideo}/>
      <Poster   img={marvel} video={marvelVideo}/>
      <Poster img={pixar} video={pixarVideo}/>
      <Poster  img={national} video={natGeogVideo}/>
    </div>
  )
}

export default Cards;

export function Poster({ img, video }) {
  return (
    <div
      className="w-1/5 max-sm:w-[45%] h-full bg-[#12141e] rounded-xl flex justify-center items-center  p-5
                 hover:border-4 hover:border-[#393b48] transition-transform duration-300 transform hover:scale-110 relative"
    >
      {/* Image */}
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover rounded-xl transition-opacity duration-300 hover:opacity-0"
      />

      {/* Video */}
      <video
        src={video}
        className="w-full h-full object-cover rounded-xl absolute top-0 left-0 opacity-0 hover:opacity-100"
        muted
        loop
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => e.target.pause()}
      ></video>
    </div>
  );
}
