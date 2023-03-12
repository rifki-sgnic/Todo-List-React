import React from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const user = useOutletContext();

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;
