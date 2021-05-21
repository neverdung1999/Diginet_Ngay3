import React, { useState } from "react";
import "./news.css";
import data from "../../data";
import parse from "html-react-parser";
import { useHistory } from "react-router-dom";

function News(props) {
  const { id } = props.match.params;
  const item = data.filter((item) => item._id === id);
  const itemMain = item[0];
  const history = useHistory();
  const [openUiRead, setOpenUiRead] = useState(false);
  const [openUiShare, setOpenUiShare] = useState(false);
  const [sizeContent, setSizeContent] = useState(18);
  const [sizeContentH1, setSizeContentH1] = useState(30);
  const [colorDarkLight, setColorDarkLight] = useState(false);

  const goBackHome = () => {
    history.goBack();
  };

  const showUiRead = () => {
    setOpenUiRead(true);
  };

  const closeUiRead = () => {
    setOpenUiRead(false);
  };

  const showUiShare = () => {
    setOpenUiShare(true);
  };

  const closeUiShare = () => {
    setOpenUiShare(false);
  };

  const sizeSmall = () => {
    setSizeContent(14);
    setSizeContentH1(25);
  };

  const sizeMedium = () => {
    setSizeContent(18);
    setSizeContentH1(28);
  };

  const sizeLarge = () => {
    setSizeContent(20);
    setSizeContentH1(33);
  };

  const setBackgroundDark = () => {
    setColorDarkLight(true);
  };

  const setBackgroundLight = () => {
    setColorDarkLight(false);
  };

  return (
    <div className="container">
      <div
        className="backgroundNews"
        style={colorDarkLight ? { backgroundColor: "#333333" } : null}
      >
        <div
          className="headerNews"
          style={
            colorDarkLight
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        >
          <div className="headerNews_left" onClick={() => goBackHome()}>
            <i
              className="fas fa-arrow-left"
              id="headerNews-icon"
              style={colorDarkLight ? { color: "white" } : { color: "black" }}
            ></i>
          </div>
          <div className="headerNews_right">
            <i
              className="fas fa-sort-alpha-up"
              id="headerNews-icon"
              style={colorDarkLight ? { color: "white" } : { color: "black" }}
              onClick={() => showUiRead()}
            ></i>
            <i
              className="fas fa-share-alt"
              id="headerNews-icon"
              style={colorDarkLight ? { color: "white" } : { color: "black" }}
              onClick={() => showUiShare()}
            ></i>
          </div>
        </div>
        <div className="bodyNews">
          <div className="bodyNews_img">
            <img
              src={itemMain.extra_info.lead_image_url}
              alt=""
              id="bodyNews_img"
            />
          </div>
          <div
            className="bodyNews_content"
            style={colorDarkLight ? { backgroundColor: "#333333" } : null}
          >
            <div
              className="bodyNews_content-description"
              style={
                colorDarkLight
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
              }
            >
              <h1
                style={
                  colorDarkLight
                    ? { fontSize: sizeContentH1, color: "white" }
                    : { fontSize: sizeContentH1, color: "black" }
                }
              >
                {itemMain.extra_info.title}
              </h1>
              <div
                className="content_description"
                style={
                  colorDarkLight
                    ? {
                        borderTop: "1px solid white",
                        borderBottom: "1px solid white",
                      }
                    : {
                        borderTop: "1px solid black",
                        borderBottom: "1px solid black",
                      }
                }
              >
                <div className="content_description-category">Home</div>
                <div className="content_description-time">
                  {itemMain.updatedAt}
                </div>
              </div>
              <div
                className="content_news"
                style={
                  colorDarkLight
                    ? { fontSize: sizeContent, color: "white" }
                    : { fontSize: sizeContent, color: "black" }
                }
              >
                {parse(itemMain.extra_info.content)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------------  UI READ -------------- --> */}

      <div className="uiRead" style={openUiRead ? null : { display: "none" }}>
        <div className="uiRead_top" onClick={() => closeUiRead()}></div>
        <div className="uiRead_bottom">
          <div className="uiRead_bottom-title">
            <p id="bottom_tile-p">giao diện đọc</p>
          </div>
          <div className="uiRead_bottom-size">
            <div className="bottom-left">
              <p>Cỡ chữ</p>
            </div>
            <div className="bottom-right">
              <button
                type="button"
                id="riht-button"
                className={sizeContent === 14 ? "colorActive" : "colorNoActive"}
                onClick={() => sizeSmall()}
              >
                Nhỏ
              </button>
              <button
                type="button"
                id="riht-button"
                className={sizeContent === 18 ? "colorActive" : "colorNoActive"}
                onClick={() => sizeMedium()}
              >
                Vừa
              </button>
              <button
                type="button"
                id="riht-button"
                className={sizeContent === 20 ? "colorActive" : "colorNoActive"}
                onClick={() => sizeLarge()}
              >
                Lớn
              </button>
            </div>
          </div>
          <div className="uiRead_bottom-uiColor">
            <div className="bottom-left">
              <p>Giao diện</p>
            </div>
            <div className="bottom-right">
              <button
                type="button"
                id="riht-button"
                className={colorDarkLight ? "colorActive" : "colorNoActive"}
                onClick={() => setBackgroundDark()}
              >
                Tối
              </button>
              <button
                type="button"
                id="riht-button"
                className={!colorDarkLight ? "colorActive" : "colorNoActive"}
                onClick={() => setBackgroundLight()}
              >
                Sáng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------------  UI SHARE -------------- --> */}

      <div
        className="uiShare"
        style={openUiShare ? null : { display: "none" }}
        onClick={() => closeUiShare()}
      >
        <div className="uiShare_content">
          <div className="uiShare_content-top">Chia sẻ bài viết</div>
          <div className="uiShare_content-bottom">
            <i className="fab fa-facebook" id="facebook"></i>
            <i className="fab fa-twitter" id="twitter"></i>
            <i className="fab fa-linkedin" id="linkedin"></i>
            <i className="fab fa-telegram" id="telegram"></i>
            <i className="fas fa-envelope" id="envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
