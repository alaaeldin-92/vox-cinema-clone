import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieDetails from "./MovieDetails";

const AllMovies = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_MOVIES", payload: json });
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className="mx-auto max-w-[900px] grid grid-cols-3 gap-16">
        {movies &&
          movies.map((movie) => <MovieDetails movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
};

export default AllMovies;
