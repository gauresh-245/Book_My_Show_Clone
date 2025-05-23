import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for previous and next navigation
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        padding: "px",
        width: "20px",
        height: "20px",
        marginRight: "40px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white", // Arrow color
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        marginLeft: "40px",
        padding: "10px", // Add some padding to make the arrow larger
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const PosterSliderComponent = (props) => {
  //We're fetching all the info or data which is present in HomePage.jsx with the help of props.
  const { posters, title, subtitle, isDark , config } = props;

  // we require settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />, // Use custom next arrow
    prevArrow: <SamplePrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold 
          ${isDark ? "text-white" : "text-black"}`}
        >
          {title}
        </h3>

        <p
          className={`text-sm 
          ${isDark ? "text-white" : "text-gray-800"}`}
        >
          {subtitle}
        </p>
      </div>

      {config && (
        <Slider {...config}>
          {posters.map((poster, index) => (
            <Poster {...poster} key={index} isDark={isDark} />
          ))}
        </Slider>
      )}

      {!config && (
        <Slider {...settings}>
          {posters.map((poster, index) => (
            <Poster {...poster} key={index} isDark={isDark} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSliderComponent;
