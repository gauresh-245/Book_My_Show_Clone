import React from "react";



// src: The src prop is the URL of the image passed from the parent component (EntertainemntCardSlider).
// This img tag renders the image for the entertainment card.
const EntertainmentCardComponent = ({ src }) => {
  return (
    <div className="w-full h-30 px-2">
      <img src={src} alt="Entertainment" className="w-full h-full rounded-xl" />
    </div>

  

  );
};

export default EntertainmentCardComponent;
