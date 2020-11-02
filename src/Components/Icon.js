import React from "react";
import { ImCross } from "react-icons/im";
import { BiCircle } from "react-icons/bi";

const Icon = ({ name }) => {
  switch (name) {
    case "Cross":
      return <ImCross className="cross" />;
    case "Circle":
      return <BiCircle className="circle" />;
      default: 
      return <h1></h1>
  }
};

export default Icon; 