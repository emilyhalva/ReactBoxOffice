import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import StarRating from "./StarRating";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="pink" classname="test" defaultRating={3} /> */}

    
  </React.StrictMode>
);
