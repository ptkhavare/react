import React from "react";
import "./Card.css";

function Card(props) {
  //all classNames from the components.
  const classes = 'card ' + props.className;
  // porps children is reserved, content between opening and closing, available by default
  return <div className={classes}>{props.children}</div>;
}
export default Card;
