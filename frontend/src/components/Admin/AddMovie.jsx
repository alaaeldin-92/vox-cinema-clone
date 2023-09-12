import React, { createRef, useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const AddMovie = ({ addMovie, setAddMovie }) => {
  const { dispatch } = useContext(MoviesContext);
  const fileInput = createRef();

  const [title, settitle] = useState("");
  const [yt_url, setyt_url] = useState("");
  const [pg, setpg] = useState("");
  const [language, setlanguage] = useState("");
  const [description, setdescription] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // upload file
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);
    console.log(fileInput.current.files[0]);
    try {
      let response = await fetch("/api/movies/upload", {
        method: "POST",
        body: formData,
      });

      const parsedResponse = await response.json();
      if (!response.ok) {
        setError(parsedResponse.error);
        setEmptyFields(parsedResponse.emptyFields);
      }
      if (response.ok) {
        setError(null);
        setEmptyFields([]);

        const movie = {
          nameId: title.replace(/\s+/g, "-"),
          title,
          cover_url:
            "http://localhost:3000/assets/" + fileInput.current.files[0].name,
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
        const json = await response.json();

        if (!response.ok) {
          setError(json.error);
          setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
          settitle("");
          setyt_url("");
          setpg("");
          setlanguage("");
          setdescription("");

          setError(null);
          setEmptyFields([]);
          dispatch({ type: "CREATE_MOVIE", payload: json });
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[999] bg-[#262729] p-20 flex flex-col gap-8 rounded-md ${
        addMovie ? "" : "hidden"
      } `}
    >
      <div className="grid grid-cols-2 ">
        <Link to="/">
          <img
            src="https://d1qg2tinnmsnxd.cloudfront.net/shared/img/vox_logo_dark.svg"
            alt="#"
            class="w-100 h-14 logo-vox"
          ></img>
        </Link>
        <AiOutlineClose
          onClick={() => {
            setAddMovie(false);
          }}
          className="text-[26px] justify-self-end"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid place-items-center grid-cols-3 gap-x-4 gap-y-2"
      >
        <div class="form-item">
          <input
            type="text"
            onChange={(e) => settitle(e.target.value)}
            value={title}
            className={emptyFields.includes("title") ? "error" : ""}
            id="title"
          />
          <label for="title">Movie Title</label>
        </div>

        <div class="form-item">
          <input
            type="text"
            onChange={(e) => setpg(e.target.value)}
            value={pg}
            className={emptyFields.includes("pg") ? "error" : ""}
            id="pg"
          />
          <label for="pg">Parental Guidance</label>
        </div>

        <div class="form-item">
          <input
            type="text"
            onChange={(e) => setyt_url(e.target.value)}
            value={yt_url}
            className={emptyFields.includes("yt_url") ? "error" : ""}
            id="yt_url"
          />
          <label for="yt_url">YouTube Embed URL</label>
        </div>

        <div class="form-item">
          <input
            type="text"
            id="language"
            onChange={(e) => setlanguage(e.target.value)}
            value={language}
            className={emptyFields.includes("language") ? "error" : ""}
          />
          <label for="language">Language</label>
        </div>

        <div class="form-item">
          <input
            id="description"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            className={emptyFields.includes("description") ? "error" : ""}
          />
          <label for="description">Description</label>
        </div>

        <div class="form-item">
          <input
            type="file"
            className={emptyFields.includes("avatar") ? "error" : ""}
            name="avatar"
            ref={fileInput}
          />
        </div>

        <button className="w-[400px] mx-auto text-center cursor-pointer bg-[#d40e7d] text-white text-md py-[14px] font-bold ">
          Submit
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddMovie;
