import React, { useState, useEffect } from "react";
import "./notification.css";

function Notification(props) {
  const { history } = props;
  const [id, setId] = useState(null);

  useEffect(() => {
    if (history?.location?.state !== undefined) {
      setId(history?.location?.state?.id);
    }
  }, [history?.location?.state]);

  const closeFormNoti = () => {
    {
      history.location.state !== undefined
        ? history.push({ pathname: "/", id: id })
        : history.push("/");
    }
  };

  return (
    <div className="container">
      <div className="backgroundNoti">
        <div className="backgroundNoti_top">
          <i
            className="fas fa-arrow-left"
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
