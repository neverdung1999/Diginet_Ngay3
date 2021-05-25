import React, { useState } from "react";
import "./uiMessageSuccess.css";

function UiMessageSuccess(props) {
  const { openUiMessage } = props;
  const [status, setStatus] = useState(true);

  const onCloseMessage = () => {
    props.onCloseUiMessage(true);
  };

  return (
    <div>
      <div
        className="backgroundUiMessageSuccess"
        onClick={status ? () => onCloseMessage() : null}
        style={openUiMessage ? null : { display: "none" }}
      >
        <div
          className="backgroundUiMessageSuccess_form"
          onMouseEnter={() => setStatus(false)}
          onMouseLeave={() => setStatus(true)}
        >
          Chúc mừng bạn đã đăng ký thành công tài khoản, kiểm tra hộp thư email
          bạn đã đăng ký nhé!
        </div>
      </div>
    </div>
  );
}

export default UiMessageSuccess;
