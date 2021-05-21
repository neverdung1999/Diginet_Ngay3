import React from "react";
import { Route, Switch } from "react-router-dom";
import News from "../src/components/news/News";
import Tab1 from "../src/components/Tab1/Tab1";
import UiUser from "../src/components/uiUser/UiUser";

function routers(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Tab1} />
        <Route path="/news/:id" exact component={News} />
        <Route path="/uiUser" exact component={UiUser} />
      </Switch>
    </div>
  );
}

export default routers;
