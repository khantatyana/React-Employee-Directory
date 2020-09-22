import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>
    <div style={{
      position: "-webkit-sticky",
      position: "sticky",
      top: "0",
      opacity: "9"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        backgroundImage: "linear-gradient(120deg,#448877,#fbc531)", 
        width: "115%"

        }}>Employee Directory</h1>
    </div>
    {props.children}
  </div>;
}

export default Container;
