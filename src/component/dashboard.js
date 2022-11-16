import React from "react";
import Navbar from "./Header/Navbar";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);

  return (
    <>
      <Navbar />
      <h1>
        {data.name}
        {data.lastName}
      </h1>
    </>
  );
};

export default Dashboard;
