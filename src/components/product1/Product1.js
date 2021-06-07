import React, { useEffect, useState } from "react";
import "./product1.css";
import logo from "../../uploads/Yellow-background.png";
import NumberFormat from "react-number-format";
import Slider from "../slider/Slider";
import Placeholder from "../loading/placeHoder/PlaceHorder";

function Product1(props) {
  const { showUiSearch, showTabbar, dataProduct, showContentTab } = props;
  const [timeLoading, setTimeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeLoading(false);
    }, 2500);
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
        className="product1_main"
        style={
          showUiSearch
            ? { transform: "translateY(0px)", transition: ".5s" }
            : { transform: "translateY(-50px)", transition: ".5s" }
        }
      >
        <Slider />
      </div>

      {/* ------------------------------------ END BODY TOP ------------------------------------*/}

      <div
        className="product1_content"
        style={
          showUiSearch
            ? { transform: "translateY(0px)", transition: ".5s" }
            : { transform: "translateY(-50px)", transition: ".5s" }
        }
      >
        {dataProduct
          ? dataProduct.map((item, index) => {
              return (
                <div key={index} className="product1_content-item">
                  <div className="content_item-left">
                    {item?.images[0] !== undefined ? (
                      <img
                        src={item?.images[0]?.src}
                        id="item_left-img"
                        alt="img"
                      />
                    ) : (
                      <img src={logo} id="item_left-img" alt="img" />
                    )}
                  </div>
                  <div className="content_item-right">
                    <div className="item_right-top">{item?.title}</div>
                    <div className="item_right-bottom">
                      <div className="right_bottom-price">
                        <NumberFormat
                          id="right_bottom-price"
                          value={item?.extra_info?.price}
                          thousandSeparator={true}
                          displayType={"text"}
                          suffix={" đ"}
                        />
                        {item?.extra_info?.originPrice !== 0 ? (
                          <NumberFormat
                            id="right_bottom-priceDiscount"
                            value={item?.extra_info?.originPrice}
                            thousandSeparator={true}
                            displayType={"text"}
                            suffix={" đ"}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Product1;
