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
        element: <Best3CollegeDetails></Best3CollegeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
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
