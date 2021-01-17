import React from "react";

import InputBox from "../Element/Input/InputBox";
import Lable from "../Element/Lable/Lable";
import "./FormGroup.css";

function FormGroup({
  labletext,
  inputText,
  onBlur,
  ref,
  onChange,
  name,
  errors,
}) {
  return (
    <>
      <div className="form-group">
        <Lable text={labletext} />
        <InputBox
          name={name}
          type={inputText}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
        />
        <span className="form_error">{errors && errors}</span>
      </div>
    </>
  );
}

export default FormGroup;
