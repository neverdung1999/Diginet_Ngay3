import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tab1.css";
import data from "../../data";
import Navbar from "../navbar/Navbar";

function Tab1(props) {
  const [showTab, setShowTab] = useState(true);
  const [title, setTitle] = useState("TAB1");
  const [showTabbar, setShowTabbar] = useState(false);
  const [showUiSearch, setShowUiSearch] = useState(false);

  const value = [
    {
      id: 1,
      name: "TAB1",
      icon: "far fa-calendar-alt",
    },
    {
      id: 2,
      name: "TAB2",
      icon: "fas fa-mobile-alt",
    },
  ];

  const showTab1 = (e) => {
    if (e === 0) {
      setShowTab(true);
      setTitle("TAB1");
    } else {
      setShowTab(false);
      setTitle("TAB2");
    }
  };

  const openTabbar = () => {
    setShowTabbar(true);
  };

  const closeNavbar = () => {
    setShowTabbar(false);
  };

  const setShowTab1 = (e) => {
    setShowTab(e);
    setShowTabbar(false);
  };

  const setTitle1 = (e) => {
    setTitle(e);
  };

  const showSearch = () => {
    setShowUiSearch(!showUiSearch);
  };

  return (
    <div className="container">
      {/* <GlobalLoading /> */}
      <div
        className="header"
        style={
          showTabbar
            ? { marginLeft: "65%", borderRadius: "none", transition: ".5s" }
            : { marginLeft: "0%", transition: ".5s" }
        }
      >
        <div className="header_top">
          <div className="header_left">
            <i
              className="fas fa-bars"
              id="header_left-i"
              onClick={() => openTabbar()}
            ></i>
            <div className="header_left-title">
              <p id="header_left-p">{title}</p>
            </div>
          </div>
          <div className="header-right">
            <Link to="/uiUser" style={{ color: "white" }}>
              <i className="far fa-comment" id="header_right-i"></i>
            </Link>
            <Link to="/notification" style={{ color: "white" }}>
              <i className="far fa-bell" id="header_right-i"></i>
            </Link>
            <Link to="/uiUser" style={{ color: "white" }}>
              <i className="far fa-user" id="header_right-i"></i>
            </Link>
            <i
              className="fas fa-search"
              id="header_right-i"
              onClick={() => showSearch()}
            ></i>
          </div>
        </div>
      </div>

      <div
        className="body"
        style={
          showTabbar
            ? { marginLeft: "65%", transition: ".5s" }
            : { marginLeft: "0%", transition: ".5s" }
        }
      >
        <div
          class="header_bottom"
          style={
            showUiSearch
              ? { transform: "translateY(0px)", transition: ".5s" }
              : { transform: "translateY(-50px)", transition: ".5s" }
          }
        >
          <div class="header_search">
            <div class="header_search-div">
              <div class="search_div-left">
                <input
                  type="text"
                  placeholder="Search..."
                  id="search_div-input"
                />
              </div>
              <div class="search_div-right">
                <i class="fas fa-search" id="search_div-i"></i>
              </div>
            </div>
          </div>
        </div>
        {showTab
          ? data.map((value, index) => {
              return (
                <Link
                  to={`/news/${value._id}`}
                  key={index}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    className="body_item1"
                    id={showUiSearch ? "showUiSearchCss" : "hideUiSearchCSs"}
                    style={
                      index % 2 !== 0 ? { flexDirection: "row-reverse" } : null
                    }
                  >
                    <div className="body_item1-img">
                      <img
                        src={value.extra_info.lead_image_url}
                        alt=""
                        id="item1_img"
                        style={
                          index % 2 !== 0
                            ? {
                                borderTopRightRadius: "10px",
                                borderBottomRightRadius: "10px",
                              }
                            : {
                                borderTopLeftRadius: "10px",
                                borderBottomLeftRadius: "10px",
                              }
                        }
                      />
                    </div>
                    <div
                      className="body_item1-content"
                      style={
                        index % 2 !== 0
                          ? {
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                            }
                          : {
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }
                      }
                    >
                      <div className="item1_content-category">
                        <span id="category_span">HOME</span>
                      </div>
                      <div className="item1_content-title">
                        <p id="title_p">{value.title.substring(0, 70)}...</p>
                      </div>
                      <div className="item1_content-description">
                        <p id="description_p">
                          {value.description.substring(0, 70)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </div>

      <div
        className="footer"
        style={
          showTabbar
            ? { marginLeft: "65%", borderRadius: "none", transition: ".5s" }
            : { marginLeft: "0%", transition: ".5s" }
        }
      >
        {value.map((item, index) => {
          return (
            <div
              key={index}
              className={showTab ? "footer_tab1" : "footer_tab2"}
              onClick={() => showTab1(index)}
              style={
                index === 0
                  ? showTab
                    ? !showTabbar
                      ? {
                          borderBottom: "3px solid rgb(77 147 255)",
                          borderBottomLeftRadius: " 10px",
                        }
                      : {
                          borderBottom: "3px solid rgb(77 147 255)",
                          borderRadius: "none",
                        }
                    : null
                  : !showTab
                  ? {
                      borderBottom: "3px solid rgb(77 147 255)",
                      borderBottomRightRadius: " 10px",
                    }
                  : null
              }
            >
              <div className="footer_icon">
                <i className={item.icon} id="footer_icon"></i>
              </div>
              <div className="footer_title">
                <p id="footer_title">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Navbar
        showTabbar={showTabbar}
        showTab={showTab}
        closeNavbar={closeNavbar}
        value={value}
        setShowTab1={setShowTab1}
        setTitle1={setTitle1}
      />
    </div>
  );
}

export default Tab1;
