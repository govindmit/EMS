import React from "react";
import Navbar from "../Header/Navbar";
import "../../assets/css/employee.css";
import MenuBar from "./MenuBar";

const EmployerDashboarde = () => {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);

  console.log("&&&&&&&&&&",user);
  return (
    <>
      <Navbar user={data}/>
      <MenuBar />
    </>
  );
};

export default EmployerDashboarde;
