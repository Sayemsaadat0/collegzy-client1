import {createBrowserRouter} from "react-router-dom"; 
import Main from "../Component/Layout/Main";
import Home from "../Component/Page/Home/Home";
import ErrorPage from "../Component/Shared/ErrorPage/ErrorPage";
import Best3CollegeDetails from "../Component/Page/Home/Best3Colleges/Best3CollegeDetails";
import Colleges from "../Component/Page/Colleges/Colleges";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element: <Home></Home>
        },
        {
            path : '/details',
            element: <Best3CollegeDetails></Best3CollegeDetails>
        },
        {
            path : '/colleges',
            element: <Colleges>ss</Colleges>
        }
      ]
    },
  ]);


  export default router