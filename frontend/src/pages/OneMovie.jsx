import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SelectCinema from "../components/SelectCinema";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OneMovie = () => {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovie = async () => {
      const response = await fetch("/api/movies/" + id);
      const json = await response.json();
      setMovies(json);
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <Header />
      <hr className="dashed my-[40px]"></hr>

      {/* <SelectCinema /> */}

      {movies === null && <div>Loading</div>}

      {movies !== null &&
        movies.map((movie) => (
          <section className="max-w-[900px] mx-auto flex flex-col gap-6 my-[60px]">
            <div className="flex gap-4">
              <h1 className="text-[28px] font-bold">{movie.title}</h1>
              <div className="border-2 border-white rounded-full w-[45px] h-[45px] text-[12px] font-bold text-center leading-none grid place-content-center justify-self-end">
                PG <br /> {movie.pg}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <img width="100%" src={movie.cover_url} />
              </div>
              <div className="col-span-3 flex flex-col gap-5 max-w-[500px] mx-auto">
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Genre:</div>
                  <div className="col-span-3">{movie.genre}</div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Running Time:</div>
                  <div className="col-span-3">{movie.runningTime}</div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Release Date:</div>
                  <div className="col-span-3">{movie.releaseDate}</div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Starring:</div>
                  <div className="col-span-3">{movie.starring}</div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Languages:</div>
                  <div className="col-span-3">{movie.language}</div>
                </div>
                <div className="grid grid-cols-4">
                  <div className="col-span-1">Description:</div>
                  <div className="col-span-3">{movie.description}</div>
                </div>

                <Link
                  to={"#showtimes"}
                  className="action secondary my-[40px] mx-auto text-center text-md font-bold w-[200px] p-[10px]"
                >
                  View Showtimes
                </Link>
              </div>
            </div>

            <hr className="dashed my-[40px]"></hr>

            <iframe
              width="100%"
              height="500"
              src={"https://www.youtube.com/embed/" + movie.yt_url}
              title="Barbie | Official Trailer | Middle East"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <hr className="dashed my-[40px]"></hr>
          </section>
        ))}

      <Footer />
    </div>
  );
};

export default OneMovie;
