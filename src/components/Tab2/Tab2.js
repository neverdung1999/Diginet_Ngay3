import React, { useEffect, useState } from "react";
import "./tab2.css";
import { Link } from "react-router-dom";
import moment from "moment";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Tab2(props) {
  const { showUiSearch, showTabbar, data, showContentTab, isActiveTab } = props;
  const dataFirst = data[0];
  const [timeLoading, setTimeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeLoading(false);
    }, 2500);
  });

  const setRmDataFirst = data.filter((item) => item._id !== dataFirst._id);

  let titleCategories = null;

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
        <Placeholder data={data} showContentTab={showContentTab} />
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

      {/* ---------------------------------------------------------------- */}

      <div
        className="tab2_main"
        id={showUiSearch ? "showUiSearchCss" : "hideUiSearchCSs"}
      >
        <Link
          to={{
            pathname: `/news/${dataFirst._id}`,
            state: {
              dataFirst: dataFirst,
              id: showContentTab,
              isActiveTab: isActiveTab,
            },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="tab2_main-img">
            <img
              src={dataFirst?.extra_info?.image}
              id="tab2_main-img"
              alt="img"
            />
            <div className="tab2_main-title">
              <div className="main_title-top">
                {dataFirst?.extra_info?.title}
              </div>
              <div className="main_title-bottom">
                <p id="main_title-bottom">{titleCategories}</p>
                <p id="main_title-bottom">
                  {moment(`${dataFirst.updatedAt}`).format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ---------------------------------------------------------------- */}

      {setRmDataFirst.map((item, index) => {
        return (
          <div
            key={index}
            className="tab2_item"
            id={showUiSearch ? "showUiSearchCss" : "hideUiSearchCSs"}
          >
            <Link
              to={{
                pathname: `/news/${item._id}`,
                state: { item: item, id: showContentTab },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="tab2_item-properties">
                <div className="item_properties-on">
                  <div className="item_properties-left">
                    <img
                      src={item?.extra_info?.image}
                      id="item_properties-left"
                      alt="img"
                    />
                  </div>
                  <div className="item_properties-right">
                    <div className="properties_right-top">
                      {titleCategories}
                    </div>
                    <div className="properties_right-body">
                      {item?.extra_info?.title}
                    </div>
                    <div className="properties_right-bottom">
                      {moment(`${item.updatedAt}`).format("L")}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Tab2;
