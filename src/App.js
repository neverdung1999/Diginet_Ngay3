import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import BackgroundLogo from "./components/loading/backgroundLogo/BackgroundLogo";
import LoadingFirst from "./components/loading/loadingFirst/LoadingFirst";
import routers from "./routersTest";

function App(props) {
  const [showLogo, setShowLogo] = useState(true);
  const [showData, setShowData] = useState(false);
  const [showLogoContainer, setShowLogoContainer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
      setShowLogoContainer(true);
    }, 500);

    setTimeout(() => {
      setShowLogoContainer(false);
      setShowData(true);
    }, 500);
  }, []);

  const showRouters = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <div>
      <LoadingFirst showLogo={showLogo} />
      <Router>
        {showLogoContainer ? (
          <div className="containerLoadingLogo">
            <BackgroundLogo />
          </div>
        ) : null}
        {showData ? showRouters(routers) : null}
      </Router>
    </div>
  );
}

export default App;
