import React, { useContext } from "react";

// Why MovieContext is Declared Here
// Purpose: MovieContext is declared in the MovieHero component to consume the movie data provided by MovieProvider.
import MovieContext from "../context/MovieContext";
import MovieInfo from "./MovieInfo";

const MovieHero = () => {
  //The useContext hook is used to subscribe to the context. By calling useContext(MovieContext), MovieHero is accessing the current value of MovieContext.

  //This movie object contains details about the current movie, such as its title, overview, genres, and more.
  const { movie } = useContext(MovieContext);

  //We want genres of the movie
  const genres = movie.genres?.map((genre) => genre.name).join(", ");

  //console.log(genres);

  return (
    <>
      {/*Small and Medium Scrren Size ex. mobile and Tab Screen*/}

      <div className="lg:hidden w-full flex items-center justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Cover Poster"
          className="m-4 rounded"
          style={{ width: "calc(100%-2rem)" }}
        ></img>
      </div>

      <div className="flex flex-col gap-3 lg:hidden">
        <div className="flex flex-col-reverse gap-3 px-4 my-3">
          <div className="text-black flex flex-col gap-2 md:px-4">
            <h4>4.4k ratinh</h4>
            <h4>Kanada, English, Hindi, Telgu, Marathi</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
            Rent $149
          </button>

          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
            Buy $999
          </button>
        </div>
      </div>

      {/*Large Scrren Size ex. mobile and Tab Screen*/}

      <div
        className="relative hidden w-full lg:block "
        style={{ height: "28rem" }}
      >
        <div
          className="absolute z-10 w-full h-full  "
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.04) 97.47% , rgb(34,34,34) 100% )",
          }}
        >
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div>
              <MovieInfo movie={movie} />
            </div>
          </div>

          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
          alt="Backdrop poster"
          className="w-full h-full object-cover object-center"
          
          />
          
        </div>
      </div>
    </>
  );
};

export default MovieHero;
