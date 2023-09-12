import React, { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";

const AdminMovieAdd = () => {
  const { dispatch } = useContext(MoviesContext);

  const [title, settitle] = useState("");
  const [file, setFile] = useState([]);
  const [yt_url, setyt_url] = useState("");
  const [pg, setpg] = useState("");
  const [language, setlanguage] = useState("");
  const [description, setdescription] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileUpload = new FormData();
    fileUpload.set("avatar", file);

    setError(null);
    setEmptyFields([]);

    // upload file
    try {
      let response = await fetch("/api/movies/upload", {
        method: "POST",
        body: fileUpload,
      });
      let json = await response.json();
      if (response.ok) {
        try {
          const movie = {
            nameId: title.replace(/\s+/g, "-"),
            title,
            cover_url: "http://localhost:3000/assets/" + file.name,
            yt_url: yt_url.split("/").pop(),
            pg,
            language,
            description,
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
            // settitle("");
            // setyt_url("");
            // setpg("");
            // setlanguage("");
            // setdescription("");
            // setError(null);
            // setEmptyFields([]);
            dispatch({ type: "CREATE_MOVIE", payload: json });
            window.location.assign("http://localhost:3000/admin");
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
    <div className="grid place-content-center h-[100vh] max-w-[900px] mx-auto">
      <div className="grid gap-12 place-items-center">
        <Link to="/">
          <img
            src="https://d1qg2tinnmsnxd.cloudfront.net/shared/img/vox_logo_dark.svg"
            alt="#"
            className="w-100 h-14 logo-vox"
          ></img>
        </Link>

        <form className="grid items-center grid-cols-2 gap-x-4 gap-y-2">
          <input
            type="text"
            onChange={(e) => settitle(e.target.value)}
            placeholder="Movie Title"
            value={title}
            className={`addMovieInput ${
              emptyFields.includes("title") ? "error" : ""
            } `}
            id="title"
          />

          {/* <div className="form-item">
            <input
              type="text"
              onChange={(e) => settitle(e.target.value)}
              value={title}
              className={emptyFields.includes("title") ? "error" : ""}
              id="title"
            />
            <label htmlFor="title">Movie Title</label>
          </div> */}

          <input
            type="number"
            min="5"
            onChange={(e) => setpg(e.target.value)}
            placeholder="Parental Guidance"
            value={pg}
            className={`addMovieInput ${
              emptyFields.includes("pg") ? "error" : ""
            } `}
            id="pg"
          />

          {/* <div className="form-item">
            <input
              type="text"
              onChange={(e) => setpg(e.target.value)}
              value={pg}
              className={emptyFields.includes("pg") ? "error" : ""}
              id="pg"
            />
            <label htmlFor="pg">Parental Guidance</label>
          </div> */}

          <input
            type="text"
            onChange={(e) => setyt_url(e.target.value)}
            placeholder="YouTube Link"
            value={yt_url}
            className={`addMovieInput ${
              emptyFields.includes("yt_url") ? "error" : ""
            } `}
            id="yt_url"
          />

          {/* <div className="form-item">
            <input
              type="text"
              onChange={(e) => setyt_url(e.target.value)}
              value={yt_url}
              className={emptyFields.includes("yt_url") ? "error" : ""}
              id="yt_url"
            />
            <label htmlFor="yt_url">YouTube Embed URL</label>
          </div> */}

          <select
            onChange={(e) => setlanguage(e.target.value)}
            value={language}
            className={`addMovieInput ${
              emptyFields.includes("language") ? "error" : ""
            } `}
            id="language"
          >
            <option value="" disabled selected>
              Language
            </option>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Tamil">Tamil</option>
          </select>

          {/* <div className="form-item">
            <input
              type="text"
              id="language"
              onChange={(e) => setlanguage(e.target.value)}
              value={language}
              className={emptyFields.includes("language") ? "error" : ""}
            />
            <label htmlFor="language">Language</label>
          </div> */}

          <textarea
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Movie Description"
            value={description}
            className={`addMovieInput ${
              emptyFields.includes("description") ? "error" : ""
            } `}
            id="description"
            style={{ height: "120px" }}
          ></textarea>

          {/* <div className="form-item">
            <input
              id="description"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              className={emptyFields.includes("description") ? "error" : ""}
            />
            <label htmlFor="description">Description</label>
          </div> */}

          <input
            type="file"
            className={`addMovieInput ${
              emptyFields.includes("avatar") ? "error" : ""
            } `}
            name="avatar"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            style={{ height: "120px" }}
          />

          {/* <div className="form-item">
            <input
              type="file"
              className={emptyFields.includes("avatar") ? "error" : ""}
              name="avatar"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div> */}
        </form>

        <div>
          <button
            onClick={handleSubmit}
            className="w-[400px] col-span-2 text-center cursor-pointer bg-[#d40e7d] text-white text-md py-[14px] font-bold "
          >
            Submit
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminMovieAdd;
