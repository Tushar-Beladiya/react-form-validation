import React from "react";
import Button from "../Element/Button/Button";
import H2 from "../Element/H2/H2";
import Ptag from "../Element/Ptag/Ptag";

import "./Information.css";

const Information = () => {
  const info = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis elit, blandit vel libero at, maximus efficitur justo.Phasellus ac tempus magna, ac condimentum leo.",
    `<span className="span__class">Eu Ultrices:</span> Integerscelerisque nibh turpis, sit amet accumsan magna condimentum sed. Pellentesque iaculis pulvinar porttitor. Nulla pharetra ipsum tortor.`,
  ];

  const displayData = () => {
    return info.map((data) => {
      return <Ptag text={data} />;
    });
  };

  return (
    <>
      <div className="info-box">
        <article className="info__article">
          <header className="info__header">
            <H2 text="Information" />
          </header>
          {displayData()}
          <Button className="btn_account" text="Have an Account" />
        </article>
      </div>
    </>
  );
};

export default Information;
