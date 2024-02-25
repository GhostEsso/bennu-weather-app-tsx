import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Panel from "./Panel";
import Temperature from "./Temperature";
import Hr from "./Hr";
import "./SecondPage.css";

const SecondPage: React.FC = () => {
  return (
    <div className="secondPage">
      <Navbar />
      <Title />
      <Panel />
      <Temperature />
      <Hr />
    </div>
  );
};

export default SecondPage;
