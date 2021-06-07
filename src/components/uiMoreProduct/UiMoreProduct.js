import React, { useState } from "react";
import "./uiMoreProduct.css";

function UiMoreProduct(props) {
  const { isOpenMoreProduct } = props;
  const [isMouseScreen, setIsMouseScreen] = useState(true);

  const value = [
    {
      id: 10,
      name: "Product1",
      color: "purple",
      icon: "fas fa-glasses",
    },
    {
      id: 11,
      name: "Product2",
      color: "red",
      icon: "fas fa-glasses",
    },
  ];

  const showProduct = (id, item) => {
    props.valueMoreProduct(id, item);
  };

  const closeForm = () => {
    props.setIsOpenForm(false);
  };

  return (
    <div
      className="backgroundMoreProduct"
      style={
        isOpenMoreProduct
          ? { transform: "translateY(0%)" }
          : { transform: "translateY(100%" }
      }
      onClick={isMouseScreen ? () => closeForm() : null}
    >
      <div
        className="backgroundMoreProduct_all"
        style={
          isOpenMoreProduct
            ? { transform: "translateX(0%)", transition: ".6s" }
            : { transform: "translateX(150%)", transition: ".6s" }
        }
      >
        {value.map((item, index) => {
          return (
            <div
              key={index}
              className="backgroundMoreProduct_point"
              onMouseEnter={() => setIsMouseScreen(false)}
              onMouseLeave={() => setIsMouseScreen(true)}
            >
              <p id="backgroundMoreProduct_point-title">{item.name}</p>
              <div
                className="backgroundMoreProduct_point-item"
                onClick={() => showProduct(item.id, item.name)}
                style={{ backgroundColor: `${item.color}` }}
              >
                <i className={item.icon}></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UiMoreProduct;
