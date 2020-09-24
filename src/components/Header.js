import React from "react";

function Header() {
  return (
    <header className="header">
        <h1 className="gradient" style={{ 
          textAlign: "left", 
          // backgroundImage: "linear-gradient(120deg,pink,blue)", 
          width: "120%"
  
          }}>Employee Directory
          
          </h1>
          <span>You can sort employees by First Name, Last Name, Age, Phone number, Email and Country from A to Z and from 0 to 9</span>
      </header>
  );
}

export default Header;