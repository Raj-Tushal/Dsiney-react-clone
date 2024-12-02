import React, { useContext } from 'react'
import myContext from "./Context Store/MyContext";
import { Link } from "react-router-dom";
function MoviesList() {
  const {state} = useContext(myContext);
  console.log(state.movies);
  return (
    <div className="w-full h-54 gap-8  flex flex-col justify-start
     max-sm:justify-start my-8 max-sm:my-24">
      {/* tagLine */}
      <h1 className=" text-white text-xl font-bold">Recommended for you</h1>

      {/* Movies */}
      <div className="w-full h-[60%] flex gap-2  justify-between flex-wrap   ">
       {/* movie */}
      {state.movies.map((movie,index)=>{
        return(
          <div
              className="w-[24%] max-sm:w-[48%] aspect-[3/2] mb-4 rounded-xl  overflow-hidden
              border-4 border-[#393b48] transition-transform duration-300 transform hover:scale-110"
              key={index}
            >
             <Link to={`/detailPage/${index}`}>
             <img
                src={movie.poster}
                alt=""
                className="w-full h-full object-cover"
              />
             </Link>
            </div>
        )
      })}

      </div>
    </div>
  );
}

export default MoviesList;
