import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>
        <Link to={"/"}>CARTA</Link>
      </h1>
    </nav>
  );
};

export default Header;
