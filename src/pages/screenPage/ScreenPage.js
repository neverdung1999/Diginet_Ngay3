import React, { useState } from "react";
import Screen from "../../components/screen/Screen";

function ScreenPage(props) {
  const { history } = props;
  return (
    <div>
      <Screen history={history} />
    </div>
  );
}

export default ScreenPage;
