import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RockPaperScissor from "./RockPaperScissor/RockPaperScissor.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Game/Game.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <RockPaperScissor />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

const rootDiv = document.getElementById("root");

ReactDOM.createRoot(rootDiv).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
