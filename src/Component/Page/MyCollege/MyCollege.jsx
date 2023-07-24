import Container from "../../../Container/Container";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";

const MyCollege = () => {
    const [rating, setRating] = useState(0);
    return (
        <Container>

            <div className="px-2 mb-10 mt-10">
                <div className="hero h-screen"
                    style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">college.name</h1>
                            <p className="mb-5">college.details</p>
                            <p className="mb-5">College.Events</p>
                            <p className="mb-5">college.details</p>
                          
                               <div className="flex justify-center">
                               <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                    isRequired
                                />
                               </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default MyCollege;