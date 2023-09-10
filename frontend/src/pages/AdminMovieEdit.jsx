import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const AdminMovieEdit = () => {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch("/api/movies/" + id);
      const json = await response.json();
      setMovies(json);
    };

    fetchMovie();
  }, []);

  return <div>{id}</div>;
};
