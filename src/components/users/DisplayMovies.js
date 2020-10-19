import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";
import MovieContext from "../../context/movie/movieContext";

const DisplayMovies = () => {
  const movieContext = useContext(MovieContext);
  const { loading, movies } = movieContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default DisplayMovies;
