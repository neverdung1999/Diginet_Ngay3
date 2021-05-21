import React from "react";
import LoadingGif from "../../../uploads/loading.gif";
import "./globalLoading.css";

function GlobalLoading(props) {
  const { showLoadingGlobal, loadingGlobal } = props;

  return (
    <div
      className="backgroundLoading"
      style={showLoadingGlobal || loadingGlobal ? null : { display: "none" }}
    >
      <img
        src={LoadingGif}
        alt="Loading"
        className="backgroundLoading_imgLoading"
      />
    </div>
  );
}

export default GlobalLoading;
