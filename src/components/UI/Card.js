import React from "react";
// Importing SASS Styles
import "../../scss/Card.scss";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}> {props.children} </div>;
};

export default Card;
