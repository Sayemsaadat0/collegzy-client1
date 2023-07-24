import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Layout/Main";
import Home from "../Component/Page/Home/Home";
import ErrorPage from "../Component/Shared/ErrorPage/ErrorPage";
import Best3CollegeDetails from "../Component/Page/Home/Best3Colleges/Best3CollegeDetails";
import Colleges from "../Component/Page/Colleges/Colleges";
import Admission from "../Component/Page/Admission/Admission";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import MyCollege from "../Component/Page/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoutes";
import Profile from "../Component/Page/Profile/Profile";

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
        path: "/details/:id",
        element: <PrivateRoute><Best3CollegeDetails></Best3CollegeDetails>,</PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://collegey-server.vercel.app/college/${params.id}`),
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/mycollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/profile",
        element: <Profile>,</Profile>
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
