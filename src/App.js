import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Movies from "./components/pages/Movies"
import Movie from "./components/users/Movie"


import MovieState from "./context/movie/MovieState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movie/:id" component={Movie} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
