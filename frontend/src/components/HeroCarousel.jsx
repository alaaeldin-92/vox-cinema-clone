import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { v4 as uuid } from "uuid";

const HeroCarousel = () => {
  const itemsList = [
    {
      link: "https://uae.voxcinemas.com/back-to-school-promo",
      src: "http://localhost:3000/assets/Overarching_Campaign_visual_2_1692686238.jpg",
    },
    {
      link: "https://uae.voxcinemas.com/movies/the-equalizer-3#showtimes",
      src: "http://localhost:3000/assets/The-Equalizer-3_1693403014.jpg",
    },
    {
      link: "https://uae.voxcinemas.com/movies/rdx-malayalam#showtimes",
      src: "http://localhost:3000/assets/RDX_EN_1693403150.png",
    },
    {
      link: "https://uae.voxcinemas.com/movies/blue-beetle#showtimes",
      src: "http://localhost:3000/assets/BLBT_VOX_HB_EN_1692713710.jpg",
    },
    {
      link: "https://uae.voxcinemas.com/movies/jawan-hindi#showtimes",
      src: "http://localhost:3000/assets/Jawan-pre_1692090704.jpg",
    },
    {
      link: "",
      src: "http://localhost:3000/assets/F_B_Sweetinc_30off_880x440_copy_1693805184.jpg",
    },
  ];

  return (
    <Splide
      aria-label="hero-carousel"
      options={{
        width: "100%",
        perPage: 3,

        // type: "loop",
        // drag: "free",
        // padding: { left: 10, right: 20 },
        // gap: "100px",
        // padding: { right: 20 },
        // arrows: false,
        // pagination: false,
        rewind: true,
        // gap: "60px",
        // breakpoints: {
        //   580: {
        //     perPage: 2,
        //     gap: "100px",
        //   },
        //   640: {
        //     perPage: 3,
        //     gap: "250px",
        //   },
        //   768: {
        //     perPage: 3,
        //     gap: "300px",
        //   },
        //   1024: {
        //     perPage: 3,
        //   },
        //   1280: {
        //     perPage: 4,
        //   },
        //   2000: {
        //     perPage: 4,
        //     gap: "0px",
        //   },
        // },
      }}
    >
      {itemsList.map((item) => {
        return (
          <SplideSlide>
            {item.link && (
              <a href={item.link}>
                <img src={item.src} key={uuid()} />
              </a>
            )}

            {!item.link && <img src={item.src} key={uuid()} />}
          </SplideSlide>
        );
      })}

      {/* <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div> */}
    </Splide>
  );
};

export default HeroCarousel;
