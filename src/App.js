import "./App.css";
import { Routes  , Route} from "react-router-dom";

import { MovieProvider } from "./components/context/MovieContext";



//Pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Plays from "./pages/Plays";



//React Slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* Another Second Method to Define API

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params = ["api_key"] = "5ae346605d72737c8ec00bfee614e4c2"  /  Third Way To Define[ process.env.REACT_APP_API_KEY ]

*/

function App() {
  return (
    <>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
          <Route path="/plays" element={<Plays />}></Route>
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
