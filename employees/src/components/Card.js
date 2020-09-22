import React from "react";

function Card(props) {
  return (
    <div className="card text-center" style={{backgroundImage: "linear-gradient(120deg,#448877,#fbc531)"}}>
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
