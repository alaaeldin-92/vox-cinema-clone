import React, { useEffect, useState, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import Header from "../components/Admin/Header";
import Footer from "../components/Footer";
import NewMovieForm from "../components/Admin/NewMovieForm";

import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlinePlus,
} from "react-icons/ai";

const Admin = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  const [activeTab, setActiveTab] = useState("movies");

  const handleAddMovie = () => {};

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
      <Header />

      <div className="max-w-[1200px] my-[120px] p-2 mx-auto grid grid-cols-6 gap-6">
        <div className="col-span-1">
          <div className="flex flex-col gap-5 sticky top-[40px]">
            {" "}
            <div
              className={`cursor-pointer ${
                activeTab === "movies" ? "activeAdminTab" : ""
              } `}
              onClick={() => {
                setActiveTab("movies");
              }}
            >
              Movies ({movies && Object.values(movies).length})
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "revenue" ? "activeAdminTab" : ""
              } `}
              onClick={() => {
                setActiveTab("revenue");
              }}
            >
              Revenue
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "bookings" ? "activeAdminTab" : ""
              } `}
              onClick={() => {
                setActiveTab("bookings");
              }}
            >
              Bookings
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "account" ? "activeAdminTab" : ""
              } `}
              onClick={() => {
                setActiveTab("account");
              }}
            >
              Account
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "settings" ? "activeAdminTab" : ""
              } `}
              onClick={() => {
                setActiveTab("settings");
              }}
            >
              Settings
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="flex flex-row gap-8 mb-[60px] h-[60px]">
            <div className="bg-[#1a1b1d] pl-[20px] pr-[200px] flex flex-row gap-[10px] items-center">
              <AiOutlineSearch />
              <span>Search</span>
            </div>
            <div className="flex flex-row gap-4 mx-auto">
              <div className="font-black text-sm">Sort by</div>
              <div className="flex flex-row gap-2 items-center border-[1px] border-[#474749] p-4">
                <div>Recommmended</div>
                <AiFillCaretDown />
              </div>
            </div>
            <div
              className="bg-[#d40e7d] text-white mx-auto text-md px-[14px] font-bold flex gap-2 items-center"
              onClick={handleAddMovie}
            >
              <div>Add Movie</div>
              <AiOutlinePlus />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {movies &&
              movies.map((movie) => (
                <Link to={"movies/" + movie.nameId} key={movie._id}>
                  <img width="100%" src={movie.cover_url} />
                  <div className="grid grid-flow-col items-center mt-[16px]">
                    <div>{movie.title}</div>
                    <div className="border-2 border-white rounded-full w-[50px] h-[50px] text-sm text-center leading-none grid place-content-center justify-self-end">
                      <div>
                        PG <br /> {movie.pg}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <NewMovieForm />
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
