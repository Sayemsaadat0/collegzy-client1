import React, { useState, useEffect } from "react";
import Container from "../../../Container/Container";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    // Fetch user profile data from the server
    fetch("https://collegey-server.vercel.app/admission")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data returned by the server is an array of user profiles
        setProfileData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <div className="px-4 w-full h-screen">
        <p className="mt-10">User Profiles</p>
        {profileData.map((profile, index) => (
          <div className="flex justify-center items-center mt-4" key={index}>
            {/* div 1 */}
            <div>
              <img
                className="w-72"
                src={profile.image}
                alt={`Profile of ${profile.name}`}
              />
            </div>
            {/* div 2 */}
            <div className="ms-10">
              <h2 className="text-3xl">Profile Name  : {profile.candidateName}</h2>
              <p className="text-xl">Email : {profile.email}</p>
              <p className="text-xl">Address : {profile.address}</p>
              <p className="text-xl">Phone: {profile.phoneNumber}</p>
              <p className="text-xl">Email: {profile.email}</p>
              <p className="text-xl">Date Of Birth: {profile.dob}</p>
              <p className="text-xl">Subject: {profile.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Profile;
