import React, { useState } from "react";

export const Profile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isEducationSection, setEducationSection] = useState(false);
  const [educationDetails, setEducationDetails] = useState([]);
  const [profile, setProfile] = useState({});
  console.log(name, email, isEducationSection);
  return (
    <div>
      <h3>Profile Details</h3>
      <form>
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="button" onClick={(e) => setEducationSection(true)}>
          ADD EDUCATION DETAILS
        </input>
        <input type="submit"> SAVE DETAILS </input>
      </form>
    </div>
  );
};

export default Profile;
