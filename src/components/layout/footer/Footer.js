import React from "react";
import "./Footer.scss";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="App-footer">
      <p>Copyright &copy; 2011 - {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
