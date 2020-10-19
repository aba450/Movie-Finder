import {
    
    SET_LOADING,
    SEARCH_MOVIES,
    GET_MOVIE,
    CLEAR_MOVIES
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
    case SEARCH_MOVIES:
            return {
              ...state,
              movies: action.payload,
              loading: false,
            };
    case GET_MOVIE:
              return {
                ...state,
                movie: action.payload,
                loading: false,
              };
    case CLEAR_MOVIES:
            return {
                  ...state,
                  movies: [],
                  loading: false,
                };
    case SET_LOADING:
        return {
          ...state,
          loading: true,
        };

      default:
        return state;
    }
  };
  