import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieDetails from "./MovieDetails";
import AllMoviesSkeleton from "./AllMoviesSkeleton";

const AllMovies = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const json = await response.json();

      // if (response.ok) {
      //   dispatch({ type: "SET_MOVIES", payload: json });
      // }

      if (response.ok) {
        const timer = setTimeout(() => {
          dispatch({ type: "SET_MOVIES", payload: json });
        }, 1000);
        return () => clearTimeout(timer);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      {!movies && (
        <div className="mx-auto max-w-[900px] grid grid-cols-3 gap-16 my-[120px]">
          <AllMoviesSkeleton />
        </div>
      )}

      <div className="mx-auto max-w-[900px] grid grid-cols-3 gap-16 my-[120px]">
        {movies &&
          movies.map((movie) => <MovieDetails movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
};

export default AllMovies;
