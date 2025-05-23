// This is the default struture of one Poster

import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {

    const { id, poster_path, title, isDark } = props;

  return (

    //This line is indicating when the user clicks on particular(which is pass by props) poster then show them particular movie page in detail.
    <Link to={`/movie/${id}`}>

      <div className="flex flex-col items-start gap-2 px-1 md:px-3">

        <div className="h-40 md:h-80">

          <img
             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="w-full h-full rounded-md"
            alt={title}
          />
        </div>

        <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-700"}`}>{title}</h3>


      </div>
    </Link>
  );
};

export default Poster;
