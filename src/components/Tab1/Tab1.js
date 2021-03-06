import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tab1.css";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Tab1(props) {
  const { showUiSearch, showTabbar, data, showContentTab, isActiveTab } = props;
  const [timeLoading, setTimeLoading] = useState(true);
  let titleCategories = null;

  useEffect(() => {
    setTimeout(() => {
      setTimeLoading(false);
    }, 2500);
  });

  data.forEach((value, index) => {
    const tagCategories = value.source_id.source.categories[index].tag;
    const tagContent = value.content_tags[0];
    const titleCategory = value.source_id.source.categories[index].title;
    if (tagCategories === tagContent) {
      titleCategories = titleCategory;
    }
  });

  return (
    <div
      className="body"
      style={
        showTabbar
          ? { marginLeft: "65%", transition: ".5s" }
          : { marginLeft: "0%", transition: ".5s" }
      }
    >
      {timeLoading && (
        (
        <Placeholder data={data} showContentTab={showContentTab} />
      )
      )}
      <div
        className="header_bottom"
        style={
          showUiSearch
            ? { transform: "translateY(0px)", transition: ".5s" }
            : { transform: "translateY(-50px)", transition: ".5s" }
        }
      >
        <div className="header_search">
          <div className="header_search-div">
            <div className="search_div-left">
              <input
                type="text"
                placeholder="Search..."
                id="search_div-input"
              />
            </div>
            <div className="search_div-right">
              <i className="fas fa-search" id="search_div-i"></i>
            </div>
          </div>
        </div>
      </div>
      {data.map((value, index) => {
        return (
          <Link
            to={{
              pathname: `/news/${value._id}`,
              state: {
                item: value,
                id: showContentTab,
                isActiveTab: isActiveTab,
              },
            }}
            key={index}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="body_item1"
              id={showUiSearch ? "showUiSearchCss" : "hideUiSearchCSs"}
              style={index % 2 !== 0 ? { flexDirection: "row-reverse" } : null}
            >
              <div className="body_item1-img">
                <img
                  src={value?.extra_info?.lead_image_url}
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
                  <span id="category_span">{titleCategories}</span>
                </div>
                <div className="item1_content-title1">{value.title}</div>
                <div className="item1_content-description1">
                  {value.description}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Tab1;
