import React, { useEffect, useState } from "react";
import "./tab3.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Tab3(props) {
  const { showUiSearch, showTabbar, data, showContentTab, isActiveTab } = props;
  let rmData = [];
  let dataFinal = [];
  const dataFirst = data[0];
  const [timeLoading, setTimeLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setTimeLoading(false);
    }, 2500);
  });

  if (data.length % 2 === 0) {
    dataFinal = data[data.length - 1];
    rmData = data.filter(
      (e) => e._id !== dataFirst._id && e._id !== dataFinal._id
    );
  } else {
    rmData = data.filter((e) => e._id !== dataFirst._id);
  }

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

      {/* ------------------------------------------------------------------- */}

      <div className="tab3_main">
        <Link
          to={{
            pathname: `/news/${dataFirst._id}`,
            state: {
              dataFirst: dataFirst,
              id: showContentTab,
              isActiveTab: isActiveTab,
            },
          }}
          style={{ color: "black" }}
        >
          <div
            className="tab3_main-img"
            style={
              showUiSearch
                ? { transform: "translateY(0px)", transition: ".5s" }
                : { transform: "translateY(-50px)", transition: ".5s" }
            }
          >
            <img
              src={dataFirst?.extra_info?.image}
              id="tab3_main-img"
              alt="img"
            />
            <div className="main_img-bottom"></div>
            <div className="main_img-top">
              <div className="img_top-top">{dataFirst?.extra_info?.title}</div>
              <div className="img_top-bottom">
                <p id="img_top-time">{titleCategories}</p>
                <p id="img_top-time">
                  {moment(dataFirst.updatedAt).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="img_top-logo">
                <img
                  src="https://kenh14cdn.com/channel-icon/kenh14-152.png"
                  id="img_top-logo"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className="tab3_item">
        {rmData.map((item, index) => {
          return (
            <div
              className="tab3_item-left"
              style={
                showUiSearch
                  ? { transform: "translateY(0px)", transition: ".5s" }
                  : { transform: "translateY(-60px)", transition: ".5s" }
              }
              key={index}
            >
              <Link
                to={{
                  pathname: `/news/${item._id}`,
                  state: {
                    item: item,
                    id: showContentTab,
                    isActiveTab: isActiveTab,
                  },
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="item_left-top">
                  <img
                    src={item?.extra_info?.image}
                    id="left_top-img"
                    alt="img"
                  />
                </div>
                <div className="item_left-bottom">
                  <div className="left_bottom-top">
                    {item?.extra_info?.title}
                  </div>
                  <div className="left_bottom-bottom">{item.description}</div>
                </div>
                <div className="item_left-category">{titleCategories}</div>
              </Link>
            </div>
          );
        })}

        {/* ------------------------------------------------------------------- */}

        {dataFinal.length !== 0 ? (
          <div className="tab3_main" style={{ padding: 0, marginTop: "-8px" }}>
            <Link
              to={{
                pathname: `/news/${dataFinal._id}`,
                state: {
                  dataFirst: dataFinal,
                  id: showContentTab,
                  isActiveTab: isActiveTab,
                },
              }}
              style={{ color: "black" }}
            >
              <div
                className="tab3_main-img"
                style={
                  showUiSearch
                    ? { transform: "translateY(0px)", transition: ".5s" }
                    : { transform: "translateY(-50px)", transition: ".5s" }
                }
              >
                <img
                  src={dataFinal?.extra_info?.image}
                  id="tab3_main-img"
                  alt="img"
                />
                <div className="main_img-bottom"></div>
                <div className="main_img-top">
                  <div className="img_top-top">
                    {dataFinal?.extra_info?.title}
                  </div>
                  <div className="img_top-bottom">
                    <p id="img_top-time">{titleCategories}</p>
                    <p id="img_top-time">
                      {moment(dataFinal.updatedAt).format("DD/MM/YYYY")}
                    </p>
                  </div>
                  <div className="img_top-logo">
                    <img
                      src="https://kenh14cdn.com/channel-icon/kenh14-152.png"
                      id="img_top-logo"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Tab3;
