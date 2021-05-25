import React from "react";
import Home from "../../components/home/Home";

function HomePage(props) {
  const { history } = props;
  return (
    <div>
      <Home history={history} />
    </div>
  );
}

export default HomePage;
