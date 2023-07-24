import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import DetailsCard from "../Home/Best3Colleges/DetailsCard";
import Container from "../../../Container/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <Container>
      <div>
        <DetailsCard
          name={"Explore Our College"}
          intro={
            "Discover a diverse range of institutions and their unique offerings."
          }
          img={"https://i.ibb.co/yN5zd7S/Untitled-design-3.png"}
        ></DetailsCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-10 mb-20 mt-20">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="card card-compact bg-base-100 shadow-lg shadow-purple-200 hover:bg-blue-100 text-center"
          >
            <figure>
              <img className="w-full" src={college.image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="text-xl font-bold text-center">
                {college.college_name}
              </h2>
              <p>
                <span className=" font-bold">Admission Date :</span>{" "}
                {college.admission_date}
              </p>
              <p>
                <span className="font-bold">Research history :</span>{" "}
                {college.research_history}
              </p>
              <div className="font-bold text-2xl">
                <span className="font-bold">Research Count : </span>
                <CountUp end={college.research_count} duration={10} /> +
              </div>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Events</div>
                <div className="badge badge-outline">Sports</div>
              </div>
              <div className="card-actions w-full">
                <Link to={`/details/${college?._id}`} className="btn w-full">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Colleges;
