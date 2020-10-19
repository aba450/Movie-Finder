import React, { useState, useContext } from "react";
import MovieContext from "../../context/movie/movieContext";
import AlertContext from "../../context/alert/alertContext"

const SearchMovies = () => {
  const movieContext = useContext(MovieContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const oncChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
        movieContext.searchMovies(text);
      setText("");
    }
  };

  return (
    <div>
        <p>
            <b>Your Search for Movies Ends Here</b>
        </p>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search here ..."
          value={text}
          onChange={oncChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {movieContext.movies.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={movieContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};


export default SearchMovies;
