import React from "react";

function Header() {
  return (
    <header className="header">
        <h1 className="gradient" style={{ 
          textAlign: "left", 
          // backgroundImage: "linear-gradient(120deg,pink,blue)", 
          width: "120%"
  
          }}>Employee Directory</h1>
      </header>
  );
}

export default Header;