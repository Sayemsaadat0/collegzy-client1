import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useRouteError } from
    'react-router-dom';
import { FaGoogle } from 'react-icons/fa';


import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const defaultError = useRouteError()

    const location = useLocation()
    const navigate = useNavigate();
    const { signinUser, googleSignIn } = useContext(AuthContext)

    const from = location.state?.from?.pathname || `/`

    const handleSignin = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target
        const email = form.email.value

        const password = form.password.value
        if (password.length < 6) {
            setError('password must contain 6 character')
        }
        else {
            setError('')
        }

        console.log(email, password)
        signinUser(email, password)
            .then(result => {
                const loggedUser = result.user

                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className=" bg-gradient-to-tr from-blue-300 to-fuchsia-300  flex  justify-center py-12 sm:px-6  lg:px-8  h-screen">


                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900 mb-10">
                            Sign in
                        </h2>
                    </div>
                    <div className=" flex flex-col py-10   shadow-lg sm:rounded-lg px-2
                hover:shadow-black w-[75%] mx-auto 
                ">
                        <form onSubmit={handleSignin} className="space-y-6 " action="#" method="POST">
                            <div>
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" required className="appearance-none block w-full  py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />


                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm" />
                                </div>

                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-outline w-full">
                                    Login
                                </button>
                                <p className='mt-4'>not have an account ? <Link className='underline text-fuchsia-500' to='/register'>Register here</Link></p>
                                <p className='text-red-500 font-semibold'>
                                    {error}
                                </p>

                            </div>
                        </form>
                        <button onClick={handleGoogle} className="btn btn-outline  mt-10 ">
                            <FaGoogle className='text-4xl'></FaGoogle>
                            Login With Google</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;