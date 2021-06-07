import React, { useState, useEffect } from "react";
import "./news.css";
import parse from "html-react-parser";
import moment from "moment";
import axios from "axios";
import BackgroundLogo from "../loading/backgroundLogo/BackgroundLogo";

function News(props) {
  const { state, history } = props;
  const data = [];
  const [openUiRead, setOpenUiRead] = useState(false);
  const [openUiShare, setOpenUiShare] = useState(false);
  const [sizeContent, setSizeContent] = useState(18);
  const [sizeContentH1, setSizeContentH1] = useState(30);
  const [colorDarkLight, setColorDarkLight] = useState(false);
  const [timeBackground, setTimeBackground] = useState(true);
  const [objectState, setObjectState] = useState({
    showContentTab: null,
    dataFirst: null,
    item: null,
    isActiveTab: null,
  });

  useEffect(() => {
    if (!state) {
      axios({
        method: "get",
        url: "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A20%2C%22start%22%3A0%2C%22where%22%3A%7B%22tag%22%3A%5B%22609e2238bbca91001079bbc6%22%5D%2C%22type%22%3A%5B%22photo%22%2C%22video%22%2C%22news%22%2C%22event%22%2C%22link%22%2C%22pdf%22%2C%22mp4%22%5D%2C%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22key%22%3A%22POST_CONTENT_crtooduucr%22%2C%22active%22%3Atrue%2C%22_cache%22%3Afalse%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D",
        data: null,
      })
        .then((res) => {
          setTimeBackground(false);
          const dataApi = res?.data?.data?.contentFilter;
          const id = props?.history?.location?.pathname?.slice(6);
          const dataChoose = dataApi.find((e) => e._id === id);
          testing({
            item: dataChoose,
          });
        })
        .catch((err) => console.log(err));
    } else {
      setTimeBackground(false);
      testing({
        showContentTab: state.id,
        dataFirst: state.dataFirst,
        item: state.item,
        isActiveTab: state.isActiveTab,
      });
    }
  }, [props, state]);


  const testing = (obj) => {
    if (!obj) return;
    setObjectState(obj);
  };

  if (objectState.dataFirst) {
    data.push(objectState.dataFirst);
  }
  if (objectState.item) {
    data.push(objectState.item);
  }

  const goBackHome = () => {
    history.push({
      pathname: "/",
      id: objectState.showContentTab,
      isActiveTab: objectState.isActiveTab,
    });
  };

  const showUiRead = () => {
    setOpenUiRead(!openUiRead);
  };

  const closeUiRead = () => {
    setOpenUiRead(false);
  };

  const showUiShare = () => {
    setOpenUiShare(!openUiShare);
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
    <div>
      <BackgroundLogo timeBackground={timeBackground} />
      {data.length > 0 ? (
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
                  style={
                    colorDarkLight ? { color: "white" } : { color: "black" }
                  }
                ></i>
              </div>
              <div className="headerNews_right">
                <i
                  className="fas fa-sort-alpha-up"
                  id="headerNews-icon"
                  style={
                    colorDarkLight ? { color: "white" } : { color: "black" }
                  }
                  onClick={() => showUiRead()}
                ></i>
                <i
                  className="fas fa-share-alt"
                  id="headerNews-icon"
                  style={
                    colorDarkLight ? { color: "white" } : { color: "black" }
                  }
                  onClick={() => showUiShare()}
                ></i>
              </div>
            </div>
            <div className="bodyNews">
              <div className="bodyNews_img">
                <img
                  src={data[0]?.extra_info?.lead_image_url}
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
                    {data[0]?.extra_info?.title}
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
                      {moment(data[0].updatedAt).format(
                        "DD [Thg] MM YYYY, HH:mm"
                      )}
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
                    {parse(data[0]?.extra_info?.content)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- --------------  UI READ -------------- --> */}

          <div
            className="uiRead"
            style={
              openUiRead
                ? { transform: "translateY(0%)" }
                : { transform: "translateY(100%)", transitionDelay: ".5s" }
            }
          >
            <div className="uiRead_top" onClick={() => closeUiRead()}></div>
            <div
              className="uiRead_bottom"
              style={
                openUiRead
                  ? { transform: "translateY(0%)", transition: ".5s" }
                  : { transform: "translateY(101%)", transition: ".5s" }
              }
            >
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
                    className={
                      sizeContent === 14 ? "colorActive" : "colorNoActive"
                    }
                    onClick={() => sizeSmall()}
                  >
                    Nhỏ
                  </button>
                  <button
                    type="button"
                    id="riht-button"
                    className={
                      sizeContent === 18 ? "colorActive" : "colorNoActive"
                    }
                    onClick={() => sizeMedium()}
                  >
                    Vừa
                  </button>
                  <button
                    type="button"
                    id="riht-button"
                    className={
                      sizeContent === 20 ? "colorActive" : "colorNoActive"
                    }
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
                    className={
                      !colorDarkLight ? "colorActive" : "colorNoActive"
                    }
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
            style={
              openUiShare
                ? { transform: "translateY(0%)" }
                : { transform: "translateY(100%)", transitionDelay: ".5s" }
            }
            onClick={() => closeUiShare()}
          >
            <div
              className="uiShare_content"
              style={
                openUiShare
                  ? { transform: "translateY(0%)", transition: ".5s" }
                  : { transform: "translateY(313%)", transition: ".5s" }
              }
            >
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default News;
