import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const NewMovieForm = () => {
  const { dispatch } = useContext(MoviesContext);

  const [nameId, setnameId] = useState("");
  const [title, settitle] = useState("");
  const [cover_url, setcover_url] = useState("");
  const [yt_url, setyt_url] = useState("");
  const [pg, setpg] = useState("");
  const [language, setlanguage] = useState("");
  const [description, setdescription] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movie = {
      nameId,
      title,
      cover_url,
      yt_url,
      pg,
      language,
      description,
    };

    console.log(movie);

    const response = await fetch("/api/movies", {
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
      setnameId("");
      settitle("");
      setcover_url("");
      setyt_url("");
      setpg("");
      setlanguage("");
      setdescription("");

      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_MOVIE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Movie Name ID:</label>
      <input
        type="text"
        onChange={(e) => setnameId(e.target.value)}
        value={nameId}
        className={emptyFields.includes("nameId") ? "error" : ""}
      />

      <label>Movie Title:</label>
      <input
        type="text"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Cover url: </label>
      <input
        type="text"
        onChange={(e) => setcover_url(e.target.value)}
        value={cover_url}
        className={emptyFields.includes("cover_url") ? "error" : ""}
      />

      <label>YouTube url: </label>
      <input
        type="text"
        onChange={(e) => setyt_url(e.target.value)}
        value={yt_url}
        className={emptyFields.includes("yt_url") ? "error" : ""}
      />

      <label>Parental Guidance: </label>
      <input
        type="text"
        onChange={(e) => setpg(e.target.value)}
        value={pg}
        className={emptyFields.includes("pg") ? "error" : ""}
      />

      <label>Language: </label>
      <input
        type="text"
        onChange={(e) => setlanguage(e.target.value)}
        value={language}
        className={emptyFields.includes("language") ? "error" : ""}
      />

      <label>Description: </label>
      <input
        type="text"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <button>Add Movie</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NewMovieForm;
