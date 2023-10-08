import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-apge";
import Root from "./Components/Root";
import Home from "./Pages/Home";
import PreviewsService from "./Pages/PreviewsService";
import SeeAll from "./Pages/SeeAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Card.json')
      },
      {
        path: "/previews-service",
        element: <PreviewsService></PreviewsService>
      },
      {
        path: "/seeAll",
        element: <SeeAll></SeeAll>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);