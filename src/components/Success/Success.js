import React from "react";
import "./Success.css";

function Success() {
  return (
    <>
      <div className="success_main">
        <div className="success__wrapper">
          <div className="success-page-container">
            <h1 className="main__title">Hooray! Successfully registered!</h1>
            <h2 className="description">
              Thank you for registering with us. Our team will contact you on
              how to get started.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
