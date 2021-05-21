import React from "react";
import "./notification.css";
import { useHistory } from "react-router-dom";

function Notification(props) {
  const history = useHistory();
  const closeFormNoti = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <div className="backgroundNoti">
        <div className="backgroundNoti_top">
          <i
            class="fas fa-arrow-left"
            id="backgroundNoti_top-icon"
            onClick={() => closeFormNoti()}
          ></i>
          Thông báo
          <div></div>
        </div>
        <div className="backgroundNoti_bottom"></div>
      </div>
    </div>
  );
}

export default Notification;
