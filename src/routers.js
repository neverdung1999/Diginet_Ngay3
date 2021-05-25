import React from "react";
import { Route, Switch } from "react-router-dom";
import News from "../src/components/news/News";
import Home from "../src/components/home/Home";
import UiUser from "../src/components/uiUser/UiUser";
import Notification from "./components/notification/Notification";

function routers(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news/:id" exact component={News} />
        <Route path="/uiUser" exact component={UiUser} />
        <Route path="/notification" exact component={Notification} />
      </Switch>
    </div>
  );
}

export default routers;
