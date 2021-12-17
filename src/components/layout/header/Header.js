import React from "react";
import SocialBar from "../navigation/SocialBar";
import "./Header.scss";
import Footer from "../footer/Footer";

const Header = () => {
  return (
    <header className="App-header">
      <p>
        <code>Just Wait! Something Great is Coming.</code>
      </p>
      <SocialBar />
      <Footer />
    </header>
  );
};

export default Header;
