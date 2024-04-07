import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Map from "./Map";
import MainFloor from "./MainFloor";
import ThirdFloor from "./ThirdFloor";
import Secondfloor from "./Secondfloor";
import GroundFloor from "./GroundFloor";
import WestWing from "./WestWing";
import WildWest from "./WildWest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "map",
    element: <Map />,
  },
  {
    path: "main",
    element: <MainFloor />,
  },
  {
    path: "secondFloor",
    element: <Secondfloor />,
  },
  {
    path: "thirdFloor",
    element: <ThirdFloor />,
  },
  {
    path: "groundFloor",
    element: <GroundFloor />,
  },
  {
    path: "westWing",
    element: <WestWing />,
  },
  {
    path: "wildWest",
    element: <WildWest />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
