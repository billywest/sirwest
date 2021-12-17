import React from "react";
import SocialBar from "../navigation/SocialBar";
import logo from "../../../assets/img/sirwest-brand.svg";
import "./Header.scss";
import Footer from "../footer/Footer";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>Just Wait! Something Great is Coming.</code>
      </p>
      <SocialBar />
      <Footer />
    </header>
  );
};

export default Header;
