import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import MovieContext from "../../context/movie/movieContext";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const { getMovie, loading, movie } = movieContext;

  useEffect(() => {
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    Title,
    backdrop_path,
    poster_path,
    Description,
    id,
    status,
    homepage,
    vote_average,
    vote_count,
    budget,
    tagline
  } = movie;
  let movieImageUrl = 'https://image.tmdb.org/t/p/original/' + backdrop_path;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={movieImageUrl}
            className="square-img"
            alt=""
            style={{ width: "250px" }}
          />
          <h1>{Title}</h1>
          <p> {tagline}</p>
        </div>
        <div>
    
            <Fragment>
              <p>{Description}</p>
            </Fragment>
        
          <a href={movieImageUrl} className="btn btn-dark my-1">
            Play
          </a>
          <ul>




            <li>
              {homepage && (
                <Fragment>
                  <strong>Website: </strong> {homepage}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Rating: {vote_average}</div>
        <div className="badge badge-success">Votes: {vote_count}</div>
        <div className="badge badge-light">Status: {status}</div>
        <div className="badge badge-dark">Budget in $: {budget}</div>
      </div>
    </Fragment>
  );
};

export default Movie;
