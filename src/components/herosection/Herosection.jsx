import React from "react";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import "./Herosection.css";

function Herosection() {
  return (
    <>
      <div className="hero__container">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default Herosection;
