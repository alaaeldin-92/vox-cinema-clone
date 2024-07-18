import React, { useEffect, useRef, useState, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSkeleton from "./AdminSkeleton";

const Admin = () => {
  const { movies, dispatch } = useContext(MoviesContext);

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const orderType = useRef(null);
  const orderParameter = useRef(null);
  const searchRef = useRef(null);

  const [activeTab, setActiveTab] = useState("movies");
  const [filteredList, setFilteredList] = useState(null);

  const filterBySearch = (event) => {
    setSearchText(event.target.value);
    setLoading(true);

    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = movies;
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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  };

  const handleOrderBy = (e) => {
    setLoading(true);

    let updatedList = movies;

    if (orderType.current.value === "asc") {
      if (orderParameter.current.value === "mostRecent") {
        updatedList = [...movies].sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        );
      }
    } else {
      // descending

      if (orderParameter.current.value === "mostRecent") {
        updatedList = [...movies].sort((a, b) =>
          b.createdAt.localeCompare(a.createdAt)
        );
      }

      // updatedList.sort((a, b) =>
      //   b[orderParameter] > a[orderParameter] ? 1 : -1
      // );
    }

    setFilteredList(updatedList);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchMovies = async () => {
      const response = await fetch(
        "https://vox-web-service.onrender.com/api/movies"
      );
      const json = await response.json();

      // if (response.ok) {
      //   dispatch({ type: "SET_MOVIES", payload: json });
      //   setFilteredList(json);
      // }

      if (response.ok) {
        const timer = setTimeout(() => {
          dispatch({ type: "SET_MOVIES", payload: json });
          setFilteredList(json);
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <AdminHeader />

      <div className="max-w-[1200px] my-[100px] p-2 mx-auto grid grid-cols-6 gap-6">
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

        <div className="col-span-5  ">
          <div className="flex flex-row gap-8 mb-[60px] h-[50px] place-content-between">
            <div className="relative">
              <input
                placeholder="Search for a movie"
                style={{
                  paddingLeft: "45px",
                  maxHeight: "200px",
                  height: "50px",
                }}
                id="search"
                ref={searchRef}
                onChange={filterBySearch}
              />
              <label
                htmlFor="search"
                className="absolute left-[15px] top-[18px]"
              >
                <AiOutlineSearch />
              </label>

              <label
                htmlFor="search"
                className="absolute right-[15px] top-[18px]"
              >
                {searchText && (
                  <AiOutlineClose
                    className="text-sm"
                    onClick={(e) => {
                      searchRef.current.value = "";
                      setSearchText("");
                      handleOrderBy(e);
                    }}
                  />
                )}
              </label>
            </div>

            <select
              className="custom-select"
              name="orderParameter"
              ref={orderParameter}
              onChange={handleOrderBy}
            >
              <option value="mostRecent">Most Recent</option>
              <option value="bestSeller">Best Seller</option>
            </select>

            <select
              className="custom-select"
              name="orderType"
              ref={orderType}
              onChange={handleOrderBy}
            >
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>

            <Link
              className="cursor-pointer bg-[#d40e7d] text-white text-md px-[14px] font-bold flex gap-2 items-center"
              to="/admin/movies/add"
            >
              <div>Add Movie</div>
              <AiOutlinePlus />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {loading && <AdminSkeleton />}

            {!loading &&
              filteredList.map((movie) => (
                <Link to={"/admin/movies/" + movie.nameId} key={movie._id}>
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
