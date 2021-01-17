import React from "react";
import "./Lable.css";

function Lable({ text, className }) {
  return (
    <>
      <label className={className}>{text}</label>
    </>
  );
}

export default Lable;
