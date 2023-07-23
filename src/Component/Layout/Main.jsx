import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footar from "../Shared/Footar";

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet> 
          <Footar></Footar>
        </div>
    );
};

export default Main;