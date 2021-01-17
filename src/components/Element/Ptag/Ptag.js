import React from "react";

import "./Ptag.css";

function Ptag({ text, className }) {
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
}

export default Ptag;
