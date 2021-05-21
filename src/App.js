import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import BackgroundLogo from "./components/loading/backgroundLogo/BackgroundLogo";
import LoadingFirst from "./components/loading/loadingFirst/LoadingFirst";
import UiMessageSuccess from "./components/uiMessageSuccess/UiMessageSuccess";
import ListRouter from "./routers";

function App(props) {
  const [showLogo, setShowLogo] = useState(true);
  const [showData, setShowData] = useState(false);
  const [showLogoContainer, setShowLogoContainer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
      setShowLogoContainer(true);
    }, 2000);

    setTimeout(() => {
      setShowLogoContainer(false);
      setShowData(true);
    }, 3000);
  }, []);

  return (
    <div>
      {/* <UiMessageSuccess /> */}
      <LoadingFirst showLogo={showLogo} />
      <Router>
        {showLogoContainer ? (
          <div className="containerLoadingLogo">
            <BackgroundLogo />
          </div>
        ) : null}

        {showData ? <ListRouter /> : null}
      </Router>
    </div>
  );
}

export default App;
