import React, { useEffect, useState, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlinePlus,
} from "react-icons/ai";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllMoviesSkeleton from "../../components/Admin/AllMoviesSkeleton";

const Admin = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [orderbyActive, setOrderByActive] = useState(false);
  const toggleOrderBy = () => {
    setOrderByActive(!orderbyActive);
  };

  const [activeTab, setActiveTab] = useState("movies");
  const [filteredList, setFilteredList] = useState(null);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = movies;
    console.log(updatedList[0].title);
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (
        item.title
          .replace(/[^a-z0-9]/gi, "")
          .toLowerCase()
          .indexOf(query.toLowerCase()) !== -1
      );
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const json = await response.json();

      // if (response.ok) {
      //   dispatch({ type: "SET_MOVIES", payload: json });
      //   setFilteredList(json);
      // }

      if (response.ok) {
        const timer = setTimeout(() => {
          dispatch({ type: "SET_MOVIES", payload: json });
          setFilteredList(json);
        }, 1000);
        return () => clearTimeout(timer);
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
            <div className="search-movie">
              <label
                htmlFor="search"
                className="relative left-[30px] top-[20px]"
              >
                <AiOutlineSearch />
              </label>
              <input
                placeholder="Search for a movie"
                style={{ padding: "25px 0px", paddingLeft: "40px" }}
                id="search"
                onChange={filterBySearch}
              ></input>
            </div>

            <div className="flex flex-row gap-8 items-center mx-auto  border-[1px] border-[#474749] p-6">
              <div>Most Recent</div>
              <AiFillCaretDown />
            </div>

            <Link
              className="cursor-pointer bg-[#d40e7d] text-white mx-auto text-md px-[14px] font-bold flex gap-2 items-center"
              to="/admin/movies/add"
            >
              <div>Add Movie</div>
              <AiOutlinePlus />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {!movies && <AllMoviesSkeleton />}

            {movies &&
              filteredList.map((movie) => (
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
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
