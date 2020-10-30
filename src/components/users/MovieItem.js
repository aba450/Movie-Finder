import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { Title, poster_path, overview, backdrop_path, id } }) => {
  let movieImageUrl = 'https://image.tmdb.org/t/p/original/' + backdrop_path;
  return (
    <div className="card text-center">
     <img
        src={movieImageUrl}
        alt=""
        className="square-img"
        style={{ width: "200px" }}
      />

      <h3>{Title}</h3>
      <div>
        <Link to={`/movie/${id}`} className="btn btn-dark btn-sm my-1">
          {" "}
          {Title} {" "}
        </Link>
      </div>
    </div>
  );
};
MovieItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default MovieItem;
