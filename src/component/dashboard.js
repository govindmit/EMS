import React from "react";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);

  return (
    <div>
      <h1>
        {data.name}
        {data.lastName}
      </h1>
    </div>
  );
};

export default Dashboard;
