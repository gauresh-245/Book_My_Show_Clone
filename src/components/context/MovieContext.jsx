import React, { createContext, useState } from "react";


// Context provides a way to share values between components without using props.


//MovieContext will be used to share data (like the current movie, cast, similar movies, etc.) across components in the application without the need to pass props manually at every level.
const MovieContext = createContext();


// MovieProvider is a React component that acts as a wrapper for other components. It is used to share data (like movie details, cast, etc.) across all the components inside it without having to pass the data through props at every level.

// children Prop: The { children } prop represents the components that will be wrapped inside MovieProvider. These are the components that will have access to the movie data.

export const MovieProvider = ({ children }) => {


  const [movie, setMovie] = useState({});  // movie: Holds the details of a specific movie.
  const [cast, setCast] = useState([]); 
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  return (
 
     
    //This value prop is the actual data that is shared with any component that consumes the MovieContext.

    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        cast,
        setCast,
        similarMovies,
        setSimilarMovies,
        recommendedMovies,
        setRecommendedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>

   
  );
};

export default MovieContext;
