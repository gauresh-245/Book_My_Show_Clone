import React from "react";
import Slider from "react-slick";
import EntertainmentCardComponent from "./EntertainmentCardComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom arrow components
const NextArrow = (props) => {
  /* We're using object destructuring 
   
  const { className, style, onClick } = props;    It extracts specific properties from the props object, which is passed to the NextArrow and PrevArrow components as an argument.
    

  */

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        marginRight: "40px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i
        className="fa fa-chevron-right"
        style={{ color: "black", fontSize: "45px" }}
      />{" "}
      {/* Using font-awesome for the arrow icon */}
    </div>
  );
};

const PrevArrow = (props) => {
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
        marginLeft:"40px",
        padding: "10px", // Add some padding to make the arrow larger
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left" style={{ color: "black", fontSize:"45px"}} />{" "}
      {/* Using font-awesome for the arrow icon */}
    </div>
  );
};


const EntertainemntCardSlider = () => {

    //All Entertainemnt Images store in a entertainmentImage Array.

  const entertainmentImage = [
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTA1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTgwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTIwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/upskill-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MzUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTMwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NDUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png",
  ];

  // Carousel settings
  const settings = {
    infinite: true, // Makes the carousel infinite
    autoplay: true,
    slidesToShow: 5, // Shows 5 slides at a time.
    slidesToScroll: 5, //Scroll 3 slides at a time when navigating.
    arrows: true, // Show arrow buttons
    initialSlide: 0, //Starting Slide
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true, // Show arrows in responsive mode too
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true, // Show arrows in responsive mode too
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true, // Show arrows in responsive mode too
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {entertainmentImage.map((image, index) => (
          <EntertainmentCardComponent key={index} src={image} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainemntCardSlider;
