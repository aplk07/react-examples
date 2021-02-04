import React from "react";
import get from "lodash/get";
import { useForm, useFieldArray } from "react-hook-form";

import "./form.css";

function App() {
  const { register, control, handleSubmit, errors } = useForm({
    defaultValues: {
      education: [{ school: "", course: "" }],
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: "education",
  });
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>

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
              defaultValue={`${item.school}`} // make sure to set up defaultValue
              ref={register()}
            />
            <input
              name={`education[${index}].course`}
              defaultValue={`${item.course}`} // make sure to set up defaultValue
              ref={register()}
            />
          </div>
        );
      })}
      <section>
        <button
          type="button"
          onClick={() => {
            append({ school: "appendBill", course: "appendLuo" });
          }}
        >
          append
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

export default App;
