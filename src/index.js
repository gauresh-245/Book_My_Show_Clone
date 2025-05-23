import React from "react";
import ReactDOM from "react-dom/client";

import styles from "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


//Flow of the Pages 

/*
index.js => App.js => Call the Route ("/home") HomePage Componenet =>  Default_Layout

This is done by HOC(High Order Component)
*/