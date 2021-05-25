import React from "react";
import News from "../../components/news/News";

function NewsPage(props) {
  const { history } = props;
  const state = history.location.state;
  return (
    <div>
      <News state={state} history={history} />
    </div>
  );
}

export default NewsPage;
