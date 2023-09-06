import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { v4 as uuid } from "uuid";

const Splider = ({ ariaLabel, options, itemsList, ComponentProp }) => {
  return (
    <Splide
      aria-label={ariaLabel}
      options={options}
      //   aria-label="Delivery-Collections"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      //   options={
      //     {
      // width: "100%",
      // type: "loop",
      // drag: "free",
      // padding: { left: 10, right: 20 },
      // gap: "100px",
      // padding: { right: 20 },
      // arrows: false,
      // pagination: false,
      // rewind: true,
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
      // }
      //   }
    >
      {itemsList.map((item) => {
        return (
          <SplideSlide>
            <ComponentProp item={item} key={uuid()} />
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

export default Splider;
