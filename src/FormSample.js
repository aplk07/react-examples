import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { get } from "lodash";

import "./form.css";

export default function App() {
  const {
    register,
    handleSubmit,
    trigger,
    errors,
    getValues,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      education: [{ school: "", course: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = (data) => {
    console.log(data);
  };

  const removeDetails = (index) => {
    const data = getValues();
    if (data.education.length > 1) remove(index);
  };

  const addEducationDetail = async () => {
    const data = getValues();
    if (data.education.length > 0) {
      await data.education.map(async (item, index) => {
        const result = await trigger([
          `education[${index}].course`,
          `education[${index}].school`,
        ]);
        console.log(index, "oo", data.education.length, result);
        if (data.education.length - 1 === index && result) {
          append({ school: "", course: "" });
        }
      });
    }
  };

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

        {fields.map((item, index) => {
          return (
            <div className="education-deatils" key={item.id}>
              <input
                name={`education[${index}].school`}
                placeholder="name of the school"
                ref={register({ required: "This field is required" })}
              />
              {get(errors, `education[${index}].school.message`, "")}
              <br />
              <br />
              <input
                name={`education[${index}].course`}
                placeholder="name of the Course"
                ref={register({ required: "This field is required" })}
              />
              {get(errors, `education[${index}].course.message`, "")}
              <br />
              <br />

              {getValues().education && getValues().education.length > 1 && (
                <button type="button" onClick={() => removeDetails(index)}>
                  Delete
                </button>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => {
            addEducationDetail();
          }}
        >
          ADD EDUCATION DETAILS
        </button>
        <br />
        <br />

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
