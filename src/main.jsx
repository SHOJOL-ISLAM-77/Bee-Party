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
import SeeAll from "./Pages/SeeAll";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import AuthProvider from "./Provider/AuthProvider";
import SeeDetails from "./Pages/SeeDetails";
import PrivetRout from "./PrivateRoute";
import WeAer from "./Pages/WeAre";
import PrivateRoute from "./PrivateRoute";
import Blog from "./Pages/Blog";

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
        path: "/seeDetails/:id",
        element: <PrivetRout><SeeDetails></SeeDetails></PrivetRout>,
        loader: () => fetch('/Card.json')
      },
      {
        path: "/weAre",
        element: <PrivateRoute> <WeAer></WeAer></PrivateRoute>,
        loader: () => fetch('/WeAre.json')
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        loader: () => fetch('/blog.json')
      },
      {
        path: "/seeAll",
        element: <SeeAll></SeeAll>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);