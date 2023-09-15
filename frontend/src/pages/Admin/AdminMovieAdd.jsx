import React, { useContext, useState, useRef } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import { BiImage } from "react-icons/bi";

import genre from "../../data/genre.json";

const AdminMovieAdd = () => {
  const { dispatch } = useContext(MoviesContext);

  const [genresItems, setGenres] = useState({
    genres: [],
    response: [],
  });

  const checkboxRef = useRef([]);

  const [title, settitle] = useState("");
  const [yt_url, setyt_url] = useState("");
  const [pg, setpg] = useState("");
  const [starring, setstarring] = useState("");
  const [language, setlanguage] = useState("");
  const [description, setdescription] = useState("");
  const [releaseDate, setreleaseDate] = useState(new Date());
  const [runningTime, setrunningTime] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const inputFileRef = useRef(null);
  const imageRef = useRef(null);

  const [genreActive, setgenreActive] = useState(false);
  const toggleGenreClass = () => {
    setgenreActive(!genreActive);
  };

  const handleFileUpload = async (e) => {
    const fileUpload = new FormData();
    fileUpload.set("avatar", e.target.files[0]);

    // upload file
    try {
      let response = await fetch(
        "https://vox-web-service.onrender.com/api/movies/upload",
        {
          method: "POST",
          body: fileUpload,
        }
      );
      let json = await response.json();

      if (response.ok) {
        imageRef.current.src =
          "https://vox-cinema.netlify.app/assets/" + json.fileName;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenre = (e) => {
    //https://www.geeksforgeeks.org/how-to-get-multiple-checkbox-values-in-react-js/

    // Destructuring
    const { value, checked } = e.target;
    const { genres } = genresItems;

    // Case 1 : The user checks the box
    if (checked) {
      setGenres({
        genres: [...genres, value],
        response: [...genres, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setGenres({
        genres: genres.filter((e) => e !== value),
        response: genres.filter((e) => e !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileUpload = new FormData();
    fileUpload.set("avatar", inputFileRef.current.files[0]);

    setError(null);
    setEmptyFields([]);

    // upload file
    try {
      let response = await fetch(
        "https://vox-web-service.onrender.com/api/movies/upload",
        {
          method: "POST",
          body: fileUpload,
        }
      );
      let json = await response.json();
      if (response.ok) {
        try {
          console.log(description);
          const movie = {
            nameId: title.replace(/\s+/g, "-"),
            title,
            runningTime,
            genres: genresItems.response.join(", "),
            cover_url: imageRef.current.src,
            yt_url: yt_url.split("/").pop(),
            releaseDate,
            pg,
            language,
            description,
            starring,
          };

          response = await fetch("/api/movies", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
              "Content-Type": "application/json",
            },
          });
          json = await response.json();

          if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
          }
          if (response.ok) {
            dispatch({ type: "CREATE_MOVIE", payload: json });
            window.location.assign("https://vox-cinema.netlify.app/admin");
          }
        } catch (e) {
          console.error(e.message);
        }
      } else {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[900px] mx-auto place-items-center flex flex-col gap-20 my-[100px]">
      <Link to="/admin">
        <img
          src="https://d1qg2tinnmsnxd.cloudfront.net/shared/img/vox_logo_dark.svg"
          alt="#"
          className="w-100 h-14 logo-vox"
        ></img>
      </Link>
      <form className="grid grid-cols-5 gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          {/* <div className="flex gap-4">
            <h1 className="text-[28px] font-bold">
              <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                id="title"
                placeholder="Movie Name"
                className={` text-[16px] font-normal ${
                  emptyFields.includes("title") ? "error" : ""
                } `}
              />
            </h1>
          </div> */}
          <div
            onClick={() => {
              inputFileRef.current.click();
            }}
            className={`movie-cover ${
              emptyFields.includes("avatar") ? "border-4 border-[#e7195a]" : ""
            } `}
          >
            <img
              ref={imageRef}
              src="https://vox-cinema.netlify.app/assets/no-image.jpg"
              className="movie-cover-image"
            />
            <div className="movie-cover-overlay">
              <div className="movie-cover-overlay-text">
                <BiImage />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-5 max-w-[500px] mx-auto">
          <div className="grid grid-cols-4">
            <div className="col-span-1">Title:</div>
            <div className="col-span-3">
              <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                id="title"
                className={`${emptyFields.includes("title") ? "error" : ""} `}
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">PG:</div>
            <div className="col-span-3">
              <input
                type="number"
                min="5"
                onChange={(e) => setpg(e.target.value)}
                value={pg}
                className={`${emptyFields.includes("pg") ? "error" : ""} `}
                id="pg"
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Genre:</div>
            <div className="col-span-3">
              <div
                className={`quick-filter ${
                  emptyFields.includes("genres")
                    ? "border border-[#e7195a]"
                    : ""
                } `}
              >
                <div
                  className={`pseudo-multi-select cinemas ${
                    genreActive ? "active" : ""
                  } `}
                  onClick={toggleGenreClass}
                  style={{ width: "100%", maxWidth: "100%" }}
                >
                  <span
                    className="label"
                    data-none="Select Your Genre(s)"
                    data-selected="{0} Genre(s) Selected"
                  >
                    {genresItems.response.length === 0
                      ? "Select Your Genre(s)"
                      : genresItems.response.join(", ")}
                  </span>
                  <div
                    className="dropdown"
                    style={genreActive ? { display: "block" } : {}}
                  >
                    <div className="scroll has-toolbar">
                      <ol className="values">
                        {genre &&
                          genre.map((g, index) => {
                            return (
                              <li key={index}>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="c"
                                    value={g.value}
                                    onChange={handleGenre}
                                    ref={(element) => {
                                      checkboxRef.current.push(element);
                                    }}
                                  />
                                  <span>{g.label}</span>
                                </label>
                              </li>
                            );
                          })}
                      </ol>
                    </div>

                    <div className="toolbar">
                      <a
                        className="action primary outline clear"
                        onClick={() => {
                          setGenres({
                            genres: [],
                            response: [],
                          });
                        }}
                      >
                        Clear All
                      </a>
                      <a className="action primary done">Done</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">YouTube:</div>
            <div className="col-span-3">
              <input
                onChange={(e) => setyt_url(e.target.value)}
                value={yt_url}
                id="yt_url"
                className={`  ${
                  emptyFields.includes("yt_url") ? "error" : ""
                } `}
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Time (min):</div>
            <div className="col-span-3">
              <input
                onChange={(e) => setrunningTime(e.target.value)}
                value={runningTime}
                id="runningTime"
                className={` ${
                  emptyFields.includes("runningTime") ? "error" : ""
                } `}
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Release Date:</div>
            <div className="col-span-3">
              <input
                type="date"
                onChange={(e) => setreleaseDate(e.target.value)}
                value={releaseDate}
                className={` ${
                  emptyFields.includes("releaseDate") ? "error" : ""
                } `}
                id="releaseDate"
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Starring:</div>
            <div className="col-span-3">
              <input
                onChange={(e) => setstarring(e.target.value)}
                value={starring}
                id="starring"
                className={`  ${
                  emptyFields.includes("starring") ? "error" : ""
                } `}
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Languages:</div>
            <div className="col-span-3">
              <input
                onChange={(e) => setlanguage(e.target.value)}
                value={language}
                id="language"
                className={` ${
                  emptyFields.includes("language") ? "error" : ""
                } `}
              />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">Description:</div>
            <div className="col-span-3">
              <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                style={{
                  height: "150px",
                  borderColor: emptyFields.includes("description")
                    ? "#e7195a"
                    : "#474749",
                }}
                id="description"
                className="p-4"
              />
            </div>
          </div>

          <input
            type="file"
            className="invisible w-0 h-0"
            name="avatar"
            ref={inputFileRef}
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
        </div>
      </form>
      <div className="mb-[100px]">
        <button
          onClick={handleSubmit}
          className="w-[400px]  text-center cursor-pointer bg-[#d40e7d] text-white text-md py-[14px] font-bold "
        >
          Submit
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default AdminMovieAdd;
