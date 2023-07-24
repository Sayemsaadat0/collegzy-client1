import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../../Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Best3Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(`https://collegey-server.vercel.app/college?collegeName=${search}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, [search]);

  const handleSearchCollege = (event) => {
    event.preventDefault();
    const collegeName = event.target.college.value;
    setSearch(collegeName);
  };

  return (
    <Container>
      <form
        className="join flex justify-center m-6"
        onSubmit={handleSearchCollege}
      >
        <input
          name="college"
          className="input input-bordered join-item md:w-[30%] "
          placeholder="Find Your College"
        />
        <button type="submit" className="btn md:join-item md:w-[20%]">
          Search College
        </button>
      </form>

      <div className="text-center mt-20 mb-20">
        <SectionTitle
          title={"A Closer Look at the Best Colleges"}
          subTitle={
            "Explore the top-rated colleges and universities, offering exceptional education and unique opportunities for academic and personal growth."
          }
        >
          {" "}
        </SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {colleges.slice(0, 3).map((college) => (
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
              <p>Admission Date: {college.admission_date}</p>
              <p>Research history : {college.research_history}</p>
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

export default Best3Colleges;
