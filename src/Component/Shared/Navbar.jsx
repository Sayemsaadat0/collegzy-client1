import { Link, NavLink } from "react-router-dom";
import Container from "../../Container/Container";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext) 
    console.log(user);

    const handlelogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const [navbar, setNavbar] = useState(false);
    const navOptions = <div className="flex flex-col md:flex-row items-center gap-4">
        <NavLink
            to='/'
            className=" hover:text-indigo-300">
            Home
        </NavLink>

        <NavLink to='/colleges'
            className=" hover:text-indigo-300">
            Colleges
        </NavLink>

        <NavLink
            to='/admission'
            className=" hover:text-indigo-300">
            Admission
        </NavLink>

        <NavLink
            to='/mycollege'
            className=" hover:text-indigo-300">
            My College
        </NavLink>
    </div>
    return (
        <Container>
            <nav className="w-full shadow  bg-transparent">
                <div className="justify-between mx-auto  md:items-center md:flex max-w-screen-2xl px-2">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <img className="h-10" src="https://i.ibb.co/GpL70C1/collegzy.png" alt="" />
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}     >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 "
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}>

                            <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {navOptions}
                            </ul>
                            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                                <Link
                                    className="px-4 py-2 btn w-full" >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        user ? <div>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} className="btn btn-outline m-1">display Name</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu border rounded-box w-[120%] ">
                                    <Link className="btn mb-2" to=''>Profile</Link >
                                    <button className="btn " onClick={handlelogout}>Log out</button>
                                </ul>
                            </div>
                        </div> : <div className="hidden space-x-2 md:inline-block">
                            <Link to='/login'
                                className="px-4 py-2 btn">
                                Login
                            </Link>
                        </div>

                    }
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;

