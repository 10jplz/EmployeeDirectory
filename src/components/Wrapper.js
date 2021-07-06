import React from "react";
import "../index.css";

function Wrapper(props) {
  return <welcome className="wrapper">{props.children}</welcome>;
}

export default Wrapper;

