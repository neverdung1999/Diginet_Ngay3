import React, { useState, useEffect } from "react";
import UiLogin from "../uiLogin/UiLogin";
import UiRegister from "../uiRegister/UiRegister";
import "./uiUser.css";
import { useHistory } from "react-router-dom";
import GlobalLoading from "../loading/globalLoading/GlobalLoading";

function UiUser(props) {
  const history = useHistory();
  const [openUiLogin, setOpenUiLogin] = useState(false);
  const [openUiRegister, setOpenUiRegister] = useState(false);
  const [loadingGlobal, setLoaddingGlobal] = useState(false);

  useEffect(() => {
    setLoaddingGlobal(true);
    setTimeout(() => {
      setLoaddingGlobal(false);
    }, 500);
  }, []);

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
    history.push("/");
  };

  return (
    <div className="container">
      <GlobalLoading loadingGlobal={loadingGlobal} />;
      <div className="loginPage">
        <div className="loginPage_content">
          <div className="loginPage_top">
            <i
              class="fas fa-arrow-circle-left"
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
