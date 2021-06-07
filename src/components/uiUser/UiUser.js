import React, { useState, useEffect } from "react";
import UiLogin from "../uiLogin/UiLogin";
import UiRegister from "../uiRegister/UiRegister";
import "./uiUser.css";

function UiUser(props) {
  const { history } = props;
  const [openUiLogin, setOpenUiLogin] = useState(false);
  const [openUiRegister, setOpenUiRegister] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (history?.location?.state !== undefined) {
      setId(history?.location?.state?.id);
    }
  }, [history?.location?.state]);

  const openFormLogin = () => {
    setOpenUiLogin(true);
  };

  const closeFormLogin = (e) => {
    setOpenUiLogin(e);
  };

  const openFormRegister = () => {
    setOpenUiRegister(true);
  };

  const closeFormRegister = (e) => {
    setOpenUiRegister(e);
  };

  const goBackHome = () => {
    history.location.state !== undefined
      ? history.push({ pathname: "/", id: id })
      : history.push("/");
  };

  return (
    <div className="container">
      <div className="loginPage">
        <div className="loginPage_content">
          <div className="loginPage_top">
            <i
              className="fas fa-arrow-circle-left"
              id="loginPage_top-iconBack"
              onClick={() => goBackHome()}
            ></i>
          </div>
          <div className="loginPage_bottom">
            <div className="loginPage_bottom-function">
              <div className="fuction_login" onClick={() => openFormLogin()}>
                <p id="loginPage_bottom-p">đăng nhập</p>
              </div>
              <div
                className="fuction_register"
                onClick={() => openFormRegister()}
              >
                <p id="loginPage_bottom-p">đăng ký</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UiLogin openUiLogin={openUiLogin} closeFormLogin={closeFormLogin} />
      <UiRegister
        openUiRegister={openUiRegister}
        closeFormRegister={closeFormRegister}
      />
    </div>
  );
}

export default UiUser;
