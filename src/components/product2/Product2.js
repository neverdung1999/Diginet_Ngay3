import React, { useState, useEffect } from "react";
import "./product2.css";
import NumberFormat from "react-number-format";
import Slider from "../slider/Slider";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Product2(props) {
  const { showUiSearch, showTabbar, dataProduct, showContentTab } = props;
  const [timeLoading, setTimeLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let number = -4;
    let arr = [];
    const a = dataProduct.length / 4;
    for (let i = 0; i < a; i++) {
      number += 4;
      const b = [...dataProduct].splice(number, 4);
      arr.push(b);
    }
    setData(arr);
    setTimeout(() => {
      setTimeLoading(false);
    }, 2500);
  }, [dataProduct]);

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
        <Placeholder
          dataProduct={dataProduct}
          showContentTab={showContentTab}
        />
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

      {/* ------------------------------------ BODY TOP ------------------------------------*/}

      <div
        className="product2_main"
        style={
          showUiSearch
            ? { transform: "translateY(0px)", transition: ".5s" }
            : { transform: "translateY(-50px)", transition: ".5s" }
        }
      >
        <Slider />
      </div>

      {/* ------------------------------------ END BODY TOP ------------------------------------*/}

      {data.map((item, index) => {
        const price = item[0]?.extra_info?.price;
        const originPrice = item[0]?.extra_info?.originPrice;
        const discount = Math.floor((1 - price / originPrice) * 100);
        return (
          <div
            key={index}
            className="product2_item"
            style={
              showUiSearch
                ? { transform: "translateY(0px)", transition: ".5s" }
                : { transform: "translateY(-50px)", transition: ".5s" }
            }
          >
            <div className="product2_item-left">
              <div className="item_left-item">
                <div className="left_item-top">
                  <div className="item_top-discount">-{discount}%</div>
                  <img
                    src={item[0]?.images[0]?.src}
                    id="item_top-img"
                    alt="img"
                  />
                </div>
                <div className="left_item-bottom">
                  <div className="item_bottom-title">{item[0].title}</div>
                  <div className="item_bottom-price">
                    <NumberFormat
                      id="bottom_price-price"
                      value={item[0]?.extra_info?.price}
                      thousandSeparator={true}
                      displayType={"text"}
                      suffix={" đ"}
                    />
                    <NumberFormat
                      id="bottom_price-discount"
                      value={item[0]?.extra_info?.originPrice}
                      thousandSeparator={true}
                      displayType={"text"}
                      suffix={" đ"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div key={index} className="product2_item-right">
              {item.map((value, index) => {
                const price = value.extra_info.price;
                const originPrice = value.extra_info.originPrice;
                let discount = 0;
                if (originPrice !== 0) {
                  discount = Math.floor((1 - price / originPrice) * 100);
                }
                const { title = "", images = [] } = value;
                return (
                  <div key={index}>
                    {index !== 0 ? (
                      <div key={index} className="item_right-wrapper">
                        <div className="item_right-item">
                          <div className="right_item-img">
                            <img
                              src={images[0]?.src}
                              id="right_item-img"
                              alt="img"
                            />

                            {discount !== 0 ? (
                              <div className="item_img-discount">
                                -{discount}%
                              </div>
                            ) : null}
                          </div>
                          <div className="right_item-content">
                            <div className="item_content-title">{title}</div>
                            <NumberFormat
                              className="item_content-price"
                              value={value?.extra_info?.price}
                              thousandSeparator={true}
                              displayType={"text"}
                              suffix={" đ"}
                            />
                            {discount !== 0 ? (
                              <div
                                id="bottom_price-discount"
                                style={{ marginTop: "5px" }}
                              >
                                <NumberFormat
                                  id="bottom_price-discount"
                                  value={value?.extra_info?.originPrice}
                                  thousandSeparator={true}
                                  displayType={"text"}
                                  suffix={" đ"}
                                />
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product2;
