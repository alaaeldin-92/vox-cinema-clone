import React from "react";
import SelectCinema from "../components/SelectCinema";
import HeroCarousel from "../components/HeroCarousel";
import AllMovies from "../components/AllMovies";

const Home = () => {
  return (
    <div>
      <SelectCinema />
      <HeroCarousel />
      <AllMovies />
    </div>
  );
};

export default Home;
