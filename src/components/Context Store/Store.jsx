import React from 'react'
import { useState } from 'react'
import MoviesData from '../MoviesData'
import myContext from './MyContext';
import { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_MOVIE':
    return {
      ...state,
      movies: state.movies.filter((movie) => movie.id !== action.payload),
    };
    case 'SET_USER':
    return {
      ...state,
      ProfPic: action.payload
    };
    default:
    return state;
  }
}
function Store({children}) {
  const initialState = {
    movies:MoviesData,
    ProfPic:null,
  };
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
       <myContext.Provider value={{state,dispatch}}>
            {children}
        </myContext.Provider>
    </div>
  )
}

export default Store;