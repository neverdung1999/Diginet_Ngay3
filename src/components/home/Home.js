import React, { useState, useEffect } from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";
import { Link } from "react-router-dom";
import axios from "axios";
import BackgroundLogo from "../loading/backgroundLogo/BackgroundLogo";
import UiMoreProduct from "../uiMoreProduct/UiMoreProduct";
import Product1 from "../product1/Product1";
import Product2 from "../product2/Product2";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Home(props) {
  const { history } = props;
  const id = history.location.id;
  const idIsActiveTab = history.location.isActiveTab;
  const [showTabbar, setShowTabbar] = useState(false);
  const [showUiSearch, setShowUiSearch] = useState(false);
  const [showTitleTab, setShowTitleTab] = useState("TAB1");
  const [data, setData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [showContentTab, setShowContentTab] = useState(null);
  const [timeBackground, setTimeBackground] = useState(true);
  const [timeBackground1, setTimeBackground1] = useState(true);
  const [isOpenMoreProduct, setIsOpenMoreProduct] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState(null);

  useEffect(() => {
    async function myCallApi() {
      await axios({
        method: "get",
        url: "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A20%2C%22start%22%3A0%2C%22where%22%3A%7B%22tag%22%3A%5B%22609e2238bbca91001079bbc6%22%5D%2C%22type%22%3A%5B%22photo%22%2C%22video%22%2C%22news%22%2C%22event%22%2C%22link%22%2C%22pdf%22%2C%22mp4%22%5D%2C%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22key%22%3A%22POST_CONTENT_crtooduucr%22%2C%22active%22%3Atrue%2C%22_cache%22%3Afalse%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D",
        data: null,
      })
        .then((res) => {
          setTimeBackground(false);
          setData(res.data.data.contentFilter);
          {
            id ? setShowContentTab(id) : setShowContentTab(1);
          }
          {
            idIsActiveTab ? setIsActiveTab(idIsActiveTab) : setIsActiveTab(1);
          }
          value.forEach((e) => {
            if (e.id === id) {
              setShowTitleTab(e.name);
            }
          });
        })
        .catch((err) => console.log(err));
    }
    myCallApi();

    async function callApiProduct() {
      await axios({
        method: "GET",
        url: "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A12%2C%22start%22%3A0%2C%22where%22%3A%7B%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22type%22%3A%5B%22product%22%5D%2C%22key%22%3A%22PRODUCT_LIST_D9Waiecfj7%22%2C%22active%22%3Atrue%2C%22_cache%22%3Atrue%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D",
        data: null,
      })
        .then((response) => {
          setDataProduct(response?.data?.data?.contentFilter);
          setTimeout(() => {
            setTimeBackground1(false);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    callApiProduct();
  }, [id]);

  const value = [
    {
      id: 1,
      name: "TAB1",
      icon: "far fa-calendar-alt",
    },
    {
      id: 2,
      name: "TAB2",
      icon: "far fa-calendar-alt",
    },
    {
      id: 3,
      name: "TAB3",
      icon: "far fa-calendar-alt",
    },
    {
      id: 4,
      name: "TAB4",
      icon: "far fa-calendar-alt",
    },
  ];

  const openTabbar = () => {
    setShowTabbar(true);
  };

  const closeNavbar = () => {
    setShowTabbar(false);
  };

  const showSearch = () => {
    setShowUiSearch(!showUiSearch);
  };

  const showTab1 = (id, name, index) => {
    setShowContentTab(id);
    setShowTitleTab(name);
    setIsActiveTab(index * 100);
  };

  const showContent = () => {
    switch (showContentTab) {
      case 1:
        return (
          <Tab1
            data={data}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
            isActiveTab={isActiveTab}
          />
        );
      case 2:
        return (
          <Tab2
            data={data}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
            isActiveTab={isActiveTab}
          />
        );
      case 3:
        return (
          <Tab3
            data={data}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
            isActiveTab={isActiveTab}
          />
        );
      case 4:
        return (
          <Tab4
            data={data}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
            isActiveTab={isActiveTab}
          />
        );
      case 10:
        return (
          <Product1
            dataProduct={dataProduct}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
          />
        );
      case 11:
        return (
          <Product2
            dataProduct={dataProduct}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
          />
        );
      default:
        return (
          <Tab1
            data={data}
            showUiSearch={showUiSearch}
            showTabbar={showTabbar}
            showContentTab={showContentTab}
          />
        );
    }
  };

  const setIdTabbar = (id, name, index) => {
    setShowContentTab(id);
    setShowTitleTab(name);
    setIsActiveTab(index * 100);
  };

  const openMoreProduct = () => {
    setIsOpenMoreProduct(!isOpenMoreProduct);
  };

  const valueMoreProduct = (id, name) => {
    setShowContentTab(id);
    setShowTitleTab(name);
    setIsOpenMoreProduct(false);
    setIsActiveTab(-1);
  };

  const setIsOpenForm = (e) => {
    setIsOpenMoreProduct(e);
  };

  return (
    <div>
      {/* {timeBackground1 ? <Placeholder /> : null} */}
      {/* <Placeholder
        data={data}
        dataProduct={dataProduct}
        showContentTab={showContentTab}
      /> */}
      <BackgroundLogo timeBackground={timeBackground} />
      <div className="container">
        <UiMoreProduct
          isOpenMoreProduct={isOpenMoreProduct}
          valueMoreProduct={valueMoreProduct}
          setIsOpenForm={setIsOpenForm}
        />
        <div className="moreProduct" onClick={() => openMoreProduct()}>
          <i className="fas fa-plus" id="moreProduct"></i>
        </div>
        <div
          className="headerContent"
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
                <p id="header_left-p">{showTitleTab}</p>
              </div>
            </div>
            <div className="header-right">
              <Link
                to={{ pathname: "/uiUser", state: { id: showContentTab } }}
                style={{ color: "white" }}
              >
                <i className="far fa-comment" id="header_right-i"></i>
              </Link>
              <Link
                to={{
                  pathname: "/notification",
                  state: { id: showContentTab },
                }}
                style={{ color: "white" }}
              >
                <i className="far fa-bell" id="header_right-i"></i>
              </Link>
              <Link
                to={{ pathname: "/uiUser", state: { id: showContentTab } }}
                style={{ color: "white" }}
              >
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
        {showContent()}
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
                onClick={() => showTab1(item.id, item.name, index)}
                key={index}
                className="footer_tab1"
              >
                <div className="footer_icon">
                  <i
                    className={item.icon}
                    id="footer_icon"
                    style={
                      item.id === showContentTab ? { color: "#4d93ff" } : null
                    }
                  ></i>
                  {item.id === showContentTab ? (
                    <p
                      id="footer_title"
                      style={
                        item.id === showContentTab ? { color: "#4d93ff" } : null
                      }
                    >
                      {item.name}
                    </p>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                </div>
              </div>
            );
          })}
          <div
            className="backgroundChooseTab"
            style={{
              position: "absolute",
              borderRadius: "5px",
              transition: ".2s",
              background: "rgba(77, 147, 255, 0.3)",
              display: isActiveTab === -1 ? "none" : "",
              transform: `translateX(${isActiveTab}%)`,
            }}
          ></div>
        </div>
        <Navbar
          showTabbar={showTabbar}
          closeNavbar={closeNavbar}
          value={value}
          setIdTabbar={setIdTabbar}
          showContentTab={showContentTab}
        />
      </div>
    </div>
  );
}

export default Home;
