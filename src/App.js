import React, { useReducer } from "react";

const initialState = {
  profileDetails: {
    name: "",
    email: "",
    educationDetails: {},
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return (state.profileDetails = action.payload);
    default:
      return state;
  }
};

export const Profile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h3>Profile Details</h3>
      <form>
        <input type="text" required />
        <input type="email" required />
        <input type="button"> ADD EDUCATION DETAILS </input>
        <input type="submit"> SAVE DETAILS </input>
      </form>
    </div>
  );
};

export default Profile;
