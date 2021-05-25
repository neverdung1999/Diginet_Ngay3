import React from "react";
import Notification from "../../components/notification/Notification";

function NotificationPage(props) {
  const { history } = props;
  return (
    <div>
      <Notification history={history} />
    </div>
  );
}

export default NotificationPage;
