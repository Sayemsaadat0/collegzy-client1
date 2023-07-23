import {createBrowserRouter} from "react-router-dom"; 
import Main from "../Component/Layout/Main";
import Home from "../Component/Page/Home/Home";
import ErrorPage from "../Component/Shared/ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element: <Home></Home>
        }
      ]
    },
  ]);


  export default router