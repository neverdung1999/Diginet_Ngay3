import React from "react";
import UiUser from "../../components/uiUser/UiUser";

function UiUserPage(props) {
  const { history } = props;
  return (
    <div>
      <UiUser history={history} />
    </div>
  );
}

export default UiUserPage;
