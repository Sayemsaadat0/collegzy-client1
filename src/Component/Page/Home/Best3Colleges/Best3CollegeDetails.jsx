import { useLoaderData } from "react-router-dom";
import Container from "../../../../Container/Container";
import DetailsCard from "./DetailsCard";

const Best3CollegeDetails = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);
  const {
    admission_process,
    college_name,
    details,
    event_details,
    image,
    research_work,
    sports_category,
  } = collegeData;
  return (
    <Container>
      <div className="px-2 mb-10 mt-10">
        <DetailsCard
          img={image}
          intro={details}
          name={college_name}
        ></DetailsCard>
        <div className="px-2 py-10  grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="bg-green-100 p-2">
            <h3 className="font-semibold text-2xl underline uppercase ">
              Admission Process
            </h3>
            <div className="px-10">
              <ul className="list-disc">
                {admission_process.map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* event details */}
          <div>
            <h3 className="font-semibold text-2xl underline uppercase  bg-yellow-100">
              Event Details
            </h3>
            <div className="px-10">
              <ul className="list-disc">
                {event_details.map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Sports Category */}
          <div>
            <h3 className=" font-semibold text-2xl underline uppercase  bg-indigo-100">
              Sports Details
            </h3>
            <div className="px-10">
              <ul className="list-disc">
                {sports_category.map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* research works*/}
          <div>
            <h3 className=" font-semibold text-2xl underline uppercase  bg-indigo-300">
              research works
            </h3>
            <div className="px-10">
              <ul className="list-disc">
                {research_work.map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Best3CollegeDetails;
