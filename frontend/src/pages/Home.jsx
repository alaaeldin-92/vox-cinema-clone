import React from "react";
import SelectCinema from "../components/SelectCinema";
import HeroCarousel from "../components/HeroCarousel";
import AllMovies from "../components/AllMovies";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SelectCinema />
      <HeroCarousel />
      <AllMovies />
      <Footer />
    </div>
  );
};

export default Home;
