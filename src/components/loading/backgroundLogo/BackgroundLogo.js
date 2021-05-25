import React from "react";
import logo from "../../../uploads/logoDropbox.png";
import "./backgroundLogo.css";

function BackgroundLogo(props) {
  const { timeBackground } = props;
  return (
    <div
      className="containerLoadingLogo"
      style={timeBackground ? null : { display: "none" }}
    >
      <div className="backgroundLogo">
        <img src={logo} id="backgroundLogo_img" />
      </div>
    </div>
  );
}

export default BackgroundLogo;
