import React, { useState } from "react";
import GlobalLoading from "../loading/globalLoading/GlobalLoading";
import "./uiRegister.css";
import UiMessageSuccess from "../uiMessageSuccess/UiMessageSuccess";

function UiRegister(props) {
  const { openUiRegister } = props;
  const [openUiMessage, setOpenUiMessage] = useState(false);
  const [colorErrorEmail, setColorErrorEmail] = useState(false);
  const [colorErrorPassword, setColorErrorPassword] = useState(false);
  const [colorErrorAgainPassword, setColorErrorAgainPassword] = useState(false);
  const [mouseEnterLeave, setMouseEnterLeave] = useState(true);
  const [valueInputName, setValueInputName] = useState("");
  const [valueInputEmail, setValueInputEmail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valueInputAgainPassword, setValueInputAgainPassword] = useState("");
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageAgainPassword, setMessageAgainPassword] = useState("");
  const [showLoadingGlobal, setShowLoadingGlobal] = useState(false);


  const changeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") {
      setValueInputName(value);
      messageName !== "" ? setMessageName("") : setMessageName(messageName);
    }
    if (name === "email") {
      setValueInputEmail(value);

      messageEmail !== "" ? setMessageEmail("") : setMessageEmail(messageEmail);
      value !== ""
        ? validateEmail(value)
          ? setColorErrorEmail(false)
          : setColorErrorEmail(true)
        : setColorErrorEmail(false);
    }
    if (name === "password") {
      setValueInputPassword(value);

      messagePassword !== ""
        ? setMessagePassword("")
        : setMessagePassword(messagePassword);

      value !== ""
        ? value.length >= 6
          ? setColorErrorPassword(false)
          : setColorErrorPassword(true)
        : setColorErrorPassword(false);
    }
    if (name === "againPassword") {
      setValueInputAgainPassword(value);

      messageAgainPassword !== ""
        ? setMessageAgainPassword("")
        : setMessageAgainPassword(messageAgainPassword);

      value !== ""
        ? valueInputPassword === value
          ? setColorErrorAgainPassword(false)
          : setColorErrorAgainPassword(true)
        : setColorErrorAgainPassword(false);
    }
  };

  const closeFormRegister = () => {
    props.closeFormRegister(false);
  };

  const onCloseUiMessage = () => {
    setOpenUiMessage(false);
  };

  const submitForm = () => {
    if (valueInputName === "") {
      setMessageName("H??? t??n kh??ng ???????c b??? tr???ng !");
    }
    if (valueInputEmail === "") {
      setMessageEmail("Email kh??ng ???????c b??? tr???ng !");
    }
    if (valueInputPassword === "") {
      setMessagePassword("M???t kh???u kh??ng ???????c b??? tr???ng !");
    }
    if (valueInputAgainPassword === "") {
      setMessageAgainPassword("M???t kh???u kh??ng ???????c b??? tr???ng !");
    }
    if (
      !colorErrorEmail &&
      !colorErrorPassword &&
      !colorErrorAgainPassword &&
      valueInputName !== "" &&
      valueInputEmail !== "" &&
      valueInputPassword !== "" &&
      valueInputAgainPassword !== ""
    ) {
      setShowLoadingGlobal(true);
      setTimeout(() => {
        setShowLoadingGlobal(false);
        setOpenUiMessage(true);
      }, 2000);
    }
  };

  return (
    <div>
      <UiMessageSuccess
        openUiMessage={openUiMessage}
        onCloseUiMessage={onCloseUiMessage}
      />
      <GlobalLoading showLoadingGlobal={showLoadingGlobal} />;
      <div
        className="backgroundUser_register"
        style={
          openUiRegister
            ? { transform: "translateY(0px)" }
            : { transform: "translateY(850px)", transitionDelay: ".5s" }
        }
        onClick={mouseEnterLeave ? () => closeFormRegister() : null}
      >
        <div
          className="registerForm"
          onMouseEnter={() => setMouseEnterLeave(false)}
          onMouseLeave={() => setMouseEnterLeave(true)}
          style={
            openUiRegister
              ? { transform: "translateY(0px)", transition: ".5s" }
              : { transform: "translateY(620px)", transition: ".5s" }
          }
        >
          <div className="registerForm_title">
            <p id="loginForm_title-p">????ng k??</p>
          </div>
          <div className="registerForm_input">
            <div className="loginForm_input-item">
              <div className="input_login">
                <div
                  className="input_icon"
                  style={messageName ? { backgroundColor: "#ffebeb" } : null}
                >
                  <i
                    className="far fa-user"
                    id="loginForm_icon"
                    style={messageName ? { color: "red" } : null}
                  ></i>
                </div>
                <div className="input_ip">
                  <input
                    type="text"
                    name="name"
                    placeholder="H??? t??n"
                    id="loginForm_input"
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>

            <p id="LoginForm_input-message">
              {messageName ? messageName : null}
            </p>

            <div className="loginForm_input-item">
              <div className="input_login">
                <div
                  className="input_icon"
                  style={
                    (colorErrorEmail ? { backgroundColor: "#ffebeb" } : null) ||
                    (messageEmail ? { backgroundColor: "#ffebeb" } : null)
                  }
                >
                  <i
                    className="far fa-envelope"
                    id="loginForm_icon"
                    style={
                      (colorErrorEmail ? { color: "red" } : null) ||
                      (messageEmail ? { color: "red" } : null)
                    }
                  ></i>
                </div>
                <div className="input_ip">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="loginForm_input"
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
            {colorErrorEmail ? (
              <p id="LoginForm_input-message">
                ?????nh d???ng Email kh??ng ????ng ( exp: abc@gmail.com )
              </p>
            ) : null}
            <p id="LoginForm_input-message">
              {messageEmail ? messageEmail : null}
            </p>

            <div className="loginForm_input-item">
              <div className="input_login">
                <div
                  className="input_icon"
                  style={
                    (colorErrorPassword
                      ? { backgroundColor: "#ffebeb" }
                      : null) ||
                    (messagePassword ? { backgroundColor: "#ffebeb" } : null)
                  }
                >
                  <i
                    className="fas fa-lock"
                    id="loginForm_icon"
                    style={
                      (colorErrorPassword ? { color: "red" } : null) ||
                      (messagePassword ? { color: "red" } : null)
                    }
                  ></i>
                </div>
                <div className="input_ip">
                  <input
                    type="password"
                    name="password"
                    placeholder="M???t kh???u"
                    id="loginForm_input"
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>

            {colorErrorPassword ? (
              <p id="LoginForm_input-message">
                M???t kh???u ph???i tr??n 6 k?? t??? ( exp: 123456 )
              </p>
            ) : null}
            <p id="LoginForm_input-message">
              {messagePassword ? messagePassword : null}
            </p>

            <div className="loginForm_input-item">
              <div className="input_login">
                <div
                  className="input_icon"
                  style={
                    (colorErrorAgainPassword
                      ? { backgroundColor: "#ffebeb" }
                      : null) ||
                    (messageAgainPassword
                      ? { backgroundColor: "#ffebeb" }
                      : null)
                  }
                >
                  <i
                    className="fas fa-lock"
                    id="loginForm_icon"
                    style={
                      (colorErrorAgainPassword ? { color: "red" } : null) ||
                      (messageAgainPassword ? { color: "red" } : null)
                    }
                  ></i>
                </div>
                <div className="input_ip">
                  <input
                    type="password"
                    name="againPassword"
                    placeholder="X??c nh???n m???t kh???u"
                    id="loginForm_input"
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>

            {colorErrorAgainPassword ? (
              <p id="LoginForm_input-message">
                M???t kh???u nh???p l???i kh??ng tr??ng kh???p
              </p>
            ) : null}
            <p id="LoginForm_input-message">
              {messageAgainPassword ? messageAgainPassword : null}
            </p>
          </div>
          <div className="Register_button">
            <button
              type="submit"
              id="loginForm_button-btnlogin"
              onClick={() => submitForm()}
            >
              ????ng k??
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export default UiRegister;
