import React from "react";
import "./tab4.css";
import moment from "moment";
import { Link } from "react-router-dom";

function Tab3(props) {
  const { data, showUiSearch, showTabbar, showContentTab } = props;

  return (
    <div
      className="body"
      style={
        showTabbar
          ? { marginLeft: "65%", transition: ".5s" }
          : { marginLeft: "0%", transition: ".5s" }
      }
    >
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
      <div
        className="tab4_content"
        style={
          showUiSearch
            ? { transform: "translateY(0px)", transition: ".5s" }
            : { transform: "translateY(-45px)", transition: ".5s" }
        }
      >
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              to={{
                pathname: `/news/${item._id}`,
                state: { item: item, id: showContentTab },
              }}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="tab4_content-item">
                <div className="content_item-top">
                  <div className="item_top-top">
                    <div className="top_top-category">
                      <p id="top_top-category">HOME</p>
                    </div>
                    <div className="top_top-time">
                      {moment(item.updatedAt).format("DD [Thg] MM YYYY, HH:mm")}
                    </div>
                  </div>
                  <div className="item_top-body">{item.title}</div>
                  <div className="item_top-bottom">{item.description}</div>
                </div>
                <div className="content_item-bottom">
                  <img
                    src={item?.extra_info?.image}
                    id="content_item-bottom"
                    alt="img"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Tab3;
