import React, { Fragment } from "react";
import DisplayMovies from "../users/DisplayMovies";
import SearchMovies from "../users/SearchMovies";


const Movies = () => (
  <Fragment>
    <SearchMovies />
    <DisplayMovies />
  </Fragment>
);

export default Movies;
