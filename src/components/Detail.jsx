import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import myContext from "./Context Store/MyContext";
import { useContext } from "react";

function Detail() {
  const {specificIndex} = useParams();
  const {state} = useContext(myContext);
  const specificMovie = state.movies.find((movie,index) => index == specificIndex);
  console.log(specificMovie);
  return (
    <div className="relative">
      <Header  isDetailPage={true}/>

      {/* Details Home */}
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${specificMovie.poster
        })` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-9  text-white text-3xl w-full h-1/2   px-20 flex flex-col gap-2
          max-sm:h-full max-sm:justify-center max-sm:items-start max-sm:px-8 max-sm:gap-8">
        {/* MovieTitle */}
          <h1 className="font-bold text-6xl pb-4 tracking-wider  max-sm:tracking-wide">{specificMovie.title}</h1>

          {/* options */}
          <div className="w-full h-1/4 flex gap-4  items-center py-3 
          max-sm:h-fit ">

            <div className="flex items-center h-full text-sm tracking-widest rounded-md p-5 gap-2 px-5 font-bold bg-white text-black
            max-sm:h-fit max-sm:w-fit hover:bg-gray-300 ">
            <i class="fa-solid fa-play"></i>
              <h1>WATCH </h1>
            </div>

            <div className="flex items-center text-sm rounded-md border-2 border-white tracking-widest h-full p-5 px-5 gap-5 font-bold bg-black text-white
            max-sm:h-fit max-sm:w-fit hover:bg-gray-950 ">
            <i class="fa-solid fa-play"></i>
              <h1 >TRAILER</h1>
            </div>

            <div className="rounded-full bg-black w-12 h-12 border-2 border-white flex justify-center items-center max-sm:hidden">+</div>
            <div></div>
          </div>

          {/* overview */}
          <ul className="flex gap-8  text-sm list-disc font-semibold max-sm:flex max-sm:flex-wrap 
          max-sm:gap-6 ">
              <li className="list-none">{specificMovie.releaseYear
              }</li>
              <li>{specificMovie.duration
              }</li>
              <li>Family</li>
              <li> Fantasy</li>
              <li>{specificMovie.genre
              }</li>
          </ul>

          {/* plot */}
          <p className="text-2xl  text-start max-sm:w-full max-sm:tracking-wider tracking-wide  w-[70%]">{specificMovie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
