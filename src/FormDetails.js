import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { get } from "lodash";

import "./form.css";

export default function App() {
  const { register, handleSubmit, trigger, errors, getValues } = useForm();
  const [isEducationSection, setEducationSection] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    education: [],
  });

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = (data, e) => {
    setProfile({
      name: data.name,
      email: data.email,
      education: profile.education,
    });
    // e.target.reset();
  };

  const addEducationDetail = (e) => {
    const data = getValues();
    if (isEducationSection && data.school && data.course) {
      let educationDetails = {
        school: data.school,
        course: data.course,
      };
      profile.education.push(educationDetails);
      document.getElementById("educationDetailsSchool").value = "";
      document.getElementById("educationDetailsCourse").value = "";
    }
  };

  const removeEducation = (index) => {
    let data = profile.education;
    data.splice(index, 1);
    setProfile({
      name: profile.name,
      email: profile.email,
      education: data,
    });
  };

  console.log("profile", profile);

  return (
    <div>
      <h3>PROFILE DETAILS</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="enter the name"
          ref={register({ required: "This field is required" })}
        />
        {get(errors, "name.message", "")}
        <br />
        <br />
        <input
          name="email"
          placeholder="enter the email"
          ref={register({
            required: "This field is required",
            pattern: {
              value: emailPattern,
              message: "Enter valid Email",
            },
          })}
        />
        {get(errors, "email.message", "")}
        <br />
        <br />
        {profile.education.length > 0 &&
          profile.education.map((item, index) => (
            <div key={item.school}>
              <h6>School - {item.school}</h6>
              <h6>Course - {item.course}</h6>
              <button type="button" onClick={() => removeEducation(index)}>
                REMOVE
              </button>
              <br />
              <br />
            </div>
          ))}

        {isEducationSection && (
          <div className="education-deatils">
            <input
              name="school"
              id="educationDetailsSchool"
              placeholder="name of the school"
              ref={register({ required: "This field is required" })}
            />
            {get(errors, "school.message", "")}
            <br />
            <br />
            <input
              name="course"
              id="educationDetailsCourse"
              placeholder="name of the Course"
              ref={register({ required: "This field is required" })}
            />
            {get(errors, "course.message", "")}
            <br />
            <br />

            <button
              type="button"
              onClick={(e) => {
                trigger(["school", "course"]);
                addEducationDetail(e);
              }}
            >
              ADD
            </button>
            <br />
            <br />
          </div>
        )}

        <button
          type="button"
          onClick={() => setEducationSection(!isEducationSection)}
        >
          {isEducationSection ? "CLOSE" : "ADD"} EDUCATION DETAILS
        </button>
        <br />
        <br />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
