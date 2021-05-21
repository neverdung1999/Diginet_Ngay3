import React from "react";
import "./navbar.css";

function Index(props) {
  const { showTabbar, value, showTab } = props;

  const closeNavbar = () => {
    props.closeNavbar(false);
  };

  const activeTabbar = (index) => {
    if (index === 0) {
      props.setShowTab1(true);
      props.setTitle1("TAB1");
    } else {
      props.setShowTab1(false);
      props.setTitle1("TAB2");
    }
  };

  return (
    <div className="navbar" style={showTabbar ? null : { display: "none" }}>
      <div className="navbar_content">
        <div className="navbar_content-top"></div>
        <div className="navbar_content-bottom">
          {value.map((item, index) => {
            return (
              <div
                key={index}
                className="content_bottom-item"
                onClick={() => activeTabbar(index)}
                style={
                  index === 0
                    ? showTab
                      ? { backgroundColor: "rgb(141, 200, 255)" }
                      : null
                    : !showTab
                    ? { backgroundColor: "rgb(141, 200, 255)" }
                    : null
                }
              >
                <i className={item.icon} id="navbar_bottom-i"></i>
                <p id="navbar_bottom-p">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="navbar_outsite" onClick={() => closeNavbar()}></div>
    </div>
  );
}

export default Index;
