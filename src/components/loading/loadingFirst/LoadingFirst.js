import React from "react";
import "./loadingFirst.css";
import FirstLoading from "../../../uploads/loadingXoayTron.gif";

function LoadingFirst(props) {
  const { showLogo } = props;
  return (
    <div
      className="backgroundFirstLoading"
      style={showLogo ? null : { display: "none" }}
    >
      <img src={FirstLoading} alt="" id="backgroundFirstLoading_img" />
    </div>
  );
}

export default LoadingFirst;
