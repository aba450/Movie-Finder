import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";

import {
  CLEAR_MOVIES ,
  SET_LOADING,
  SEARCH_MOVIES,
  GET_MOVIE
} from "../types";


let tmdbApiKey;
if (process.env.NODE_ENV !== "production") {

  tmdbApiKey = process.env.REACT_APP_API_KEY
} else {
  tmdbApiKey = process.env.API_KEY
   
}
const MovieState = (props) => {
  const initialState = {

    loading: false,
    movies: [],
    movie: {}
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);


  const searchMovies = async (text) => {
    //console.log(text)
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c38bb903dbeea0ea6970e15e7fff4f85&query=${text}`
    );
    console.log(res.data.results);
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

    // get movie
    const getMovie = async (id) => {
      setLoading();
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c38bb903dbeea0ea6970e15e7fff4f85&append_to_response=credits`
        );
      console.log(res.data);
  
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
    };


  //clear users
  // To clear the users
  const clearUsers = () => dispatch({ type: CLEAR_MOVIES });
  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <MovieContext.Provider
      value={{
        loading: state.loading,
        movies: state.movies,
        movie: state.movie,
        clearUsers,
        searchMovies,
        getMovie
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
