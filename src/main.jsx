import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import JesusTalk from "./components/jesusTalk.jsx";
import ErrorPage from "./components/errorPage.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Recipes from "./components/recipes.jsx";
import CreatePost from "./components/createPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jesus",
        element: <JesusTalk />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
