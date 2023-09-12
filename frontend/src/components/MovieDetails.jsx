import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  return (
    <Link to={"/movies/" + movie.nameId}>
      <div className="flex flex-col gap-4">
        <img width="100%" src={movie.cover_url} />
        <div className="grid grid-flow-col items-center">
          <div>{movie.title}</div>
          <div className="border-2 border-white rounded-full w-[50px] h-[50px] text-sm text-center leading-none grid place-content-center justify-self-end">
            <div>
              PG <br /> {movie.pg}
            </div>
          </div>
        </div>

        <Link
          to={"/movies/" + movie.nameId + "#showtimes"}
          className="bg-[#d40e7d] text-white text-md font-normal rounded-md py-[15px] text-center"
        >
          Showtimes
        </Link>
      </div>
    </Link>
  );
};

export default MovieDetails;
