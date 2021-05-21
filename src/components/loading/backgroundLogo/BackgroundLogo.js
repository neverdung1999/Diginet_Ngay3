import React from "react";
import logo from "../../../uploads/logoDropbox.png";
import "./backgroundLogo.css";

function BackgroundLogo(props) {
  return (
    <div className="backgroundLogo">
      <img src={logo} id="backgroundLogo_img" />
    </div>
  );
}

export default BackgroundLogo;
