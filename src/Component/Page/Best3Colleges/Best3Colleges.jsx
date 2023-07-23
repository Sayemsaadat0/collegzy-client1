import React, { useEffect, useState } from "react";
import Container from "../../../Container/Container";

const Best3Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("Best3Colleges.json")
            .then((res) => res.json())
            .then((data) => setColleges(data));
    }, []);

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                {colleges.map((college) => (
                    <div key={college._id} className="card card-compact bg-base-100 shadow-lg shadow-purple-200 hover:bg-blue-100 text-center">
                        <figure>
                            <img className="w-full" src={college.image} alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="text-xl font-bold text-center">{college.college_name}</h2>
                            <p>Admission Date: {college.admission_date}</p>
                            <p>Research history : {college.research_history}</p>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">Events</div>
                                <div className="badge badge-outline">Sports</div>
                            </div>
                            <div className="card-actions w-full">
                                <button className="btn w-full">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Best3Colleges;