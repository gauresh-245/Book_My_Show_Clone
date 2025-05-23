//  This code defines a React component called MoviePage, which is responsible for displaying detailed information about a specific movie. It fetches and displays the movie details, the cast, similar movies, and recommended movies using data from the The Movie Database (TMDb) API.

import React, { useContext, useEffect, useState } from "react";
import Movie_layout from "../layout/Movie_layout";
import MovieContext from "../components/context/MovieContext";
import axios from "axios";
import PosterSliderComponent from "../components/PosterSlider/PosterSliderComponent";
import { useParams } from "react-router-dom";
import MovieHero from "../components/MovieHero/MovieHero";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast.Component";


const MoviePage = () => {
  // It uses the useParams hook to extract the id parameter from the URL. This id represents the specific movie ID that is used to fetch details about the movie.
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const { cast, setCast } = useContext(MovieContext);

  const { similarMovies, setSimilarMovies } = useContext(MovieContext);

  const { recommendedMovies, setRecommendedMovies } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5ae346605d72737c8ec00bfee614e4c2`
      );

      setMovie(getMovieDate.data);
    };
    requestMovie();
  }, [id]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5ae346605d72737c8ec00bfee614e4c2`
      );

      setCast(getCast.data.cast);
    };

    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=5ae346605d72737c8ec00bfee614e4c2`
      );

      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5ae346605d72737c8ec00bfee614e4c2`
      );

      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  const settingsCast = {
    infinte: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
    ],
  };



    
  

  const settings = {
    infinte: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-3 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the Movie
          </h1>
          <p>{movie.overview}</p>
        </div>
      </div>

      {/* Offer Cards Section */}
      <div className=" lg:ml-20 flex flex-col lg:flex-row gap-6 mt-6">
        {/* Visa Stream Offer Card */}
        <div className="flex items-center gap-3 bg-yellow-100 p-3 border-2 border-yellow-300 rounded-lg">
          <FaCcVisa className="text-yellow-800 text-3xl" />
          <div>
            <h3 className="text-lg font-bold">Visa Stream Offer</h3>
            <p className="text-sm text-gray-700">
              Get 75% off up to INR 200 on all RuPay Cards * on BookMyShow
              Stream
            </p>
          </div>
        </div>

        {/* Film Pass Offer Card */}
        <div className="flex items-center gap-3 bg-blue-100 p-4 border-2 border-blue-300 rounded-lg">
          <FaCcApplePay className="text-blue-800 text-3xl" />
          <div>
            <h3 className="text-lg font-bold">Film Pass Offer</h3>
            <p className="text-sm text-gray-700">
              Get 75% off up to INR 200 on all RuPay Cards * on BookMyShow
              Stream
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Movies Section*/}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          // We're passing this information using props which is store in PosterSliderComponenet

          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          config={settings}
          isDark={false}
        />
      </div>

      <div className="my-8">
        <hr />
      </div>

      {/* Cast Slider (Person who works in the mov*/}

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h2 className=" mx-auto px-4  text-gray-800 font-bold text-2xl mb-7 ">
          Cast and Crew
        </h2>

        <Slider {...settingsCast}>
          {cast.map((castData) => (
            <Cast
              image={castData.profile_path}
              castName={castData.original_name}
              role={castData.character}
            />
          ))}
        </Slider>
      </div>

      <div className="my-8">
        <hr />
      </div>

      {/* Similar Movies Section*/}

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          // We're passing this information using props which is store in PosterSliderComponenet

          title="Similar Movies"
          subtitle="Movies you might like"
          config={settings}
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Movie_layout(MoviePage);
