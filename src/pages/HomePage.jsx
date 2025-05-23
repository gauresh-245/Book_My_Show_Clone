import React, { useEffect, useState } from "react";
import axios from "axios";

//Layout HOC
import Default_layout from "../layout/Default_layout";

// Components Which we want
import PosterSliderComponent from "../components/PosterSlider/PosterSliderComponent";
import EntertainemntCardSlider from "../components/Entertainment/EntertainemntCardSlider";
import HeroCarouselComponent from "../components/HeroCarousel/HeroCarouselComponent";

const HomePage = () => {
  //We're use state to store All Movies,

  const [recomendedMovies, setRecomendedMovies] = useState([]);

  const [premierMovies, setPremierMovies] = useState([]);

  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  //This is way we're writing an API (To call API's)
  //get.apiName('/' ,async () => {})

  //Now In similar We go something useEffect in React.  (To call API's)
  //useEffect:

  useEffect(() => {
    //This is the API request which we guys are calling.
    // Async and Await = We're connecting to the database which will take much more time inorder to fetch some info.
    const requestTopReactedMovies = async () => {
      try {
        //We're using await to connect with database becoz it need to be waited for some times.
        //We're using axios inOrder to work with your API
        const getTopReactedMovies = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=5ae346605d72737c8ec00bfee614e4c2"

          
            //    "/movie/top_rated"(Another Way to define)
        );
        //Now I need to assign this on Top Reated Movies

        //We don't want entire file we just want results
        setRecomendedMovies(getTopReactedMovies.data.results);

        // Log the fetched data to verify its structure
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };
    requestTopReactedMovies();
  }, []);


  useEffect(() => {


    const requestPremierMovies = async () => {
      try{



          const getPremierMovies = await axios.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=5ae346605d72737c8ec00bfee614e4c2"

            //   "/movie/upcoming"(Another Way to define)
          );

          
          
          setPremierMovies(getPremierMovies.data.results);
      }
      catch(err){
        console.log("Error fetching Premier movies ",err)
      }
    };
    requestPremierMovies();
  },[]);



  useEffect(() => {
   
     const requestOnlineStreamMovies = async () => {

      try{

        const getOnlineStreamMovies = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=5ae346605d72737c8ec00bfee614e4c2"


              //   "/movie/popular"(Another Way to define)
        );


        setOnlineStreamEvents(getOnlineStreamMovies.data.results);
      }

      catch(err){
        console.log("Error fetching Premier movies ",err)
      }
     };
     requestOnlineStreamMovies();

  },[])

  return (
    <>

       <HeroCarouselComponent />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        {/* Include the Entertainment Card Slider component */}
        <EntertainemntCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="rupay" />
          </div>

          <PosterSliderComponent
            title="Premiers"
            subtitle="Brand new realses every friday "
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSliderComponent
          title="Online Streaming Events"
          subtitle="Brand new realses every friday "
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Default_layout(HomePage);
