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

        {/* <div className="border-2 border-white rounded-full w-[50px] h-[50px] text-[12px] text-center leading-none grid place-content-center justify-self-end">
          <div>
            PG <br /> {movie.pg}
          </div>
        </div> */}

        <div>Language: {movie.language}</div>
        <Link
          to={"/movies/" + movie.nameId + "#showtimes"}
          className="action secondary mt-[20px]"
        >
          Showtimes
        </Link>
      </div>
    </Link>
  );
};

export default MovieDetails;
