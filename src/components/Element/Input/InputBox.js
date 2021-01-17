import React from "react";

function InputBox({ type, onChange, onBlur, ref, name }) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
      />
    </>
  );
}

export default InputBox;
