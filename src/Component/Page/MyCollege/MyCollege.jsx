import React, { useState, useEffect } from "react";
import Container from "../../../Container/Container";
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const MyCollege = () => {
    const [rating, setRating] = useState(0);
    const [collegeData, setCollegeData] = useState({});

    useEffect(() => {
        fetch('https://collegey-server.vercel.app/admission')
            .then(response => response.json())
            .then(data => setCollegeData(data))
    }, []);

    return (
        <Container>
            <div className="px-2 mb-10 mt-10">
                <div className="hero h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hH2zkJM/Add-a-subheading.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div> 
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md"> 
                        <h2>My Admmited College </h2>
                            <h1 className="mb-5 text-5xl font-bold">College Name</h1>
                            <p className="mb-5">Details</p>
                            <p className="mb-5">Events</p>
                            <p className="mb-5">Sports</p>
                            <div className="flex justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                    isRequired/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyCollege;
