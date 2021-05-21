import React, { useState } from "react";
import "./uiMessageSuccess.css";

function UiMessageSuccess(props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div className="backgroundUiMessageSuccess">
        <div className="backgroundUiMessageSuccess_form"></div>
      </div>
    </div>
  );
}

export default UiMessageSuccess;
