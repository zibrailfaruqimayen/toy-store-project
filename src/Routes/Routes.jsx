import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import AddToy from "../components/AddToy";
import PriveteRoute from "./PriveteRoute";
import UpdateToy from "../components/UpdateToy";
import ToyDetails from "../components/Home/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-store-server-theta.vercel.app/totalToys"),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PriveteRoute>
            <ToyDetails></ToyDetails>
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-theta.vercel.app/addToy/${params.id}`
          ),
      },
      {
        path: "/mytoys",
        element: (
          <PriveteRoute>
            <MyToys></MyToys>
          </PriveteRoute>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-theta.vercel.app/addToy/${params.id}`
          ),
      },
      {
        path: "/addtoy",
        element: (
          <PriveteRoute>
            <AddToy></AddToy>
          </PriveteRoute>
        ),
      },
    ],
  },
]);

export default router;
