import React, { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import PaymentModel from "../PayementModel/Payment.Component";

const MovieInfo = () => {
  // State to manage modal open/close status
  const [ isOpen, setIsOpen ] = useState(false);

  // State to manage the price of the movie
  const [price, setPrice] = useState(0);

  // Fetching movie details from context
  const { movie } = useContext(MovieContext);

  // Get the genres of the movie
  const genres = movie.genres?.map((genre) => genre.name).join(", ");

  // Function to open modal and set price for renting
  const rentMovie = () => {
    setIsOpen(true);
    setPrice(1);
  };

  // Function to open modal and set price for buying
  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />

      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>

        <div className="text-white flex flex-col gap-2 ">
          <h4>4.4k ratinh</h4>

          <h4>Kanada, English, Hindi, Telgu, Marathi</h4>

          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>

        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            onClick={rentMovie}
            className="bg-red-500  p-3 text-white font-semibold rounded-lg"
          >
            Rent $1
          </button>

          <button
            onClick={buyMovie}
            className="bg-red-500  p-3 text-white font-semibold rounded-lg"
          >
            Buy $999
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
