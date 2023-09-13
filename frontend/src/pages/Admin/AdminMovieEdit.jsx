import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Admin/Header";
import Footer from "../../components/Footer";
import { BiImage } from "react-icons/bi";
import { MoviesContext } from "../../context/MoviesContext";

export const AdminMovieEdit = () => {
  const { dispatch } = useContext(MoviesContext);

  const inputFileRef = useRef(null);
  const imageRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [file, setFile] = useState([]);

  const [title, settitle] = useState("");
  const [cover_url, setcover_url] = useState("");
  const [yt_url, setyt_url] = useState("");
  const [pg, setpg] = useState("");
  const [language, setlanguage] = useState("");
  const [description, setdescription] = useState("");

  const [genre, setgenre] = useState("");
  const [runningTime, setrunningTime] = useState("");
  const [releaseDate, setreleaseDate] = useState("");
  const [starring, setstarring] = useState("");

  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovie = async () => {
      const response = await fetch("/api/movies/" + id);
      const json = await response.json();

      settitle(json[0].title);
      setcover_url(json[0].cover_url);
      setyt_url(json[0].yt_url);
      setpg(json[0].pg);
      setlanguage(json[0].language);
      setdescription(json[0].description);
      setgenre(json[0].genre);

      setLoading(false);
    };
    fetchMovie();
  }, []);

  const handleFileUpload = async (e) => {
    const fileUpload = new FormData();
    fileUpload.set("avatar", e.target.files[0]);

    // upload file
    try {
      let response = await fetch("/api/movies/upload", {
        method: "POST",
        body: fileUpload,
      });
      let json = await response.json();

      if (response.ok) {
        imageRef.current.src = "http://localhost:3000/assets/" + json.fileName;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileUpload = new FormData();
    fileUpload.set("avatar", file);

    setError(null);
    setEmptyFields([]);

    try {
      const movie = {
        nameId: title.replace(/\s+/g, "-"),
        title,
        cover_url: imageRef.current.src,
        yt_url,
        pg,
        language,
        description,
      };

      const response = await fetch("/api/movies/" + id, {
        method: "PATCH",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      if (response.ok) {
        dispatch({ type: "UPDATE_MOVIE", payload: json });
        window.location.assign("http://localhost:3000/admin");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleDelete = async (e) => {
    try {
      const movie = {
        nameId: title.replace(/\s+/g, "-"),
      };

      const response = await fetch("/api/movies/" + id, {
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_MOVIE", payload: json });
        window.location.assign("http://localhost:3000/admin");
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <Header />

      {!loading && (
        <section className="max-w-[900px] mx-auto flex flex-col gap-6 my-[120px]">
          <form className="grid grid-cols-5 gap-8">
            <div className="col-span-2 flex flex-col gap-8">
              <div className="flex gap-4">
                <h1 className="text-[28px] font-bold">
                  <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    id="title"
                  />
                </h1>
              </div>
              <div
                className="movie-cover"
                onClick={() => {
                  inputFileRef.current.click();
                }}
              >
                <img
                  ref={imageRef}
                  src={cover_url}
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
                <div className="col-span-1">PG:</div>
                <div className="col-span-3">
                  <input
                    onChange={(e) => setpg(e.target.value)}
                    value={pg}
                    id="pg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1">Genre:</div>
                <div className="col-span-3">
                  <input
                    onChange={(e) => setgenre(e.target.value)}
                    value={genre}
                    id="genre"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1">YouTube:</div>
                <div className="col-span-3">
                  <input
                    onChange={(e) => setyt_url(e.target.value)}
                    value={yt_url}
                    id="yt_url"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1">Running Time:</div>
                <div className="col-span-3">
                  <input
                    onChange={(e) => setrunningTime(e.target.value)}
                    value={runningTime}
                    id="runningTime"
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
                  />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-1">Description:</div>
                <div className="col-span-3">
                  <textarea
                    className="p-4"
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    style={{ height: "150px" }}
                    id="description"
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

          <button
            onClick={handleSubmit}
            className="action secondary mt-[20px] mx-auto text-center text-lg font-bold w-[40%] p-[15px]"
          >
            Update Details
          </button>
          <button
            onClick={handleDelete}
            className="action secondary  mb-[20px] mx-auto text-center text-lg font-bold w-[40%] p-[15px]"
            style={{ backgroundColor: "black", border: "none" }}
          >
            Delete Movie
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};
