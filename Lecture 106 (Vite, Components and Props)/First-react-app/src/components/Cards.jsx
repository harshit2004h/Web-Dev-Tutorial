import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <h2>{props.title}</h2>
      <img src={props.src} height="150" style={{margin: "5px"}}/>
      <p>{props.desc}</p>
    </div>
  );
};

export default Cards;
