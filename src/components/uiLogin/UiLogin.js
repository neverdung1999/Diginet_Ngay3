import React, { useState } from "react";
import "./uiLogin.css";
import GlobalLoading from "../loading/globalLoading/GlobalLoading";

function UiLogin(props) {
  const { openUiLogin } = props;
  const [showLoadingGlobal, setShowLoadingGlobal] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [colorErrorPassword, setColorErrorPassword] = useState(false);
  const [mouseEnterLeave, onMouseEnterLeave] = useState(true);
  const [valueElementEmail, setValueElementEmail] = useState("");
  const [valueElementPassword, setValueElementPassword] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");

  const chageData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      setValueElementEmail(value);
      messageEmail !== "" ? setMessageEmail("") : setMessageEmail(messageEmail);
      value !== ""
        ? validateEmail(value)
          ? setColorError(false)
          : setColorError(true)
        : setColorError(false);
    } else {
      setValueElementPassword(value);
      messagePassword !== ""
        ? setMessagePassword("")
        : setMessagePassword(messagePassword);
      value !== ""
        ? value.length >= 6
          ? setColorErrorPassword(false)
          : setColorErrorPassword(true)
        : setColorErrorPassword(false);
    }
  };

  const closeFormLogin = () => {
    props.closeFormLogin(false);
  };

  const submitForm = () => {
    if (valueElementEmail === "") {
      setMessageEmail("Email không được bỏ trống !");
    }
    if (valueElementPassword === "") {
      setMessagePassword("Mật khẩu không được bỏ trống !");
    }
    if (valueElementPassword === "" && valueElementEmail === "") {
      setMessageEmail("Email không được bỏ trống !");
      setMessagePassword("Mật khẩu không được bỏ trống !");
    }
    if (
      !colorError &&
      !colorErrorPassword &&
      valueElementEmail !== "" &&
      valueElementPassword !== ""
    )
      setShowLoadingGlobal(true);
    setTimeout(() => {
      setShowLoadingGlobal(false);
    }, 2000);
  };

  const handleBlur = (e) => {
    console.log(e);
  };

  return (
    <div>
      <GlobalLoading showLoadingGlobal={showLoadingGlobal} />
      <div
        className="backgroundUser_login"
        style={openUiLogin ? null : { display: "none" }}
        onClick={mouseEnterLeave ? () => closeFormLogin() : null}
      >
        <form>
          <div
            className="loginForm"
            onMouseEnter={() => onMouseEnterLeave(false)}
            onMouseLeave={() => onMouseEnterLeave(true)}
          >
            <div className="loginForm_title">
              <p id="loginForm_title-p">đăng nhập</p>
            </div>
            <div className="loginForm_input">
              <div className="loginForm_input-item">
                <div className="input_login">
                  <div
                    className="input_icon"
                    style={
                      (colorError
                        ? { backgroundColor: "rgb(255, 235, 235)" }
                        : null) ||
                      (messageEmail
                        ? { backgroundColor: "rgb(255, 235, 235)" }
                        : null)
                    }
                  >
                    <i
                      className="far fa-envelope"
                      id="loginForm_icon"
                      style={
                        (colorError ? { color: "red" } : null) ||
                        (messageEmail ? { color: "red" } : null)
                      }
                    ></i>
                  </div>
                  <div className="input_ip">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      id="loginForm_input"
                      onChange={chageData}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              {colorError ? (
                <p id="LoginForm_input-message">
                  Tài khoản là email ( exp: abc@gmail.com )
                </p>
              ) : null}

              <p id="LoginForm_input-message">
                {messageEmail ? messageEmail : ""}
              </p>

              <div className="loginForm_input-item">
                <div className="input_login">
                  <div
                    className="input_icon"
                    style={
                      (colorErrorPassword
                        ? { backgroundColor: "rgb(255, 235, 235)" }
                        : null) ||
                      (messagePassword
                        ? { backgroundColor: "rgb(255, 235, 235)" }
                        : null)
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
                      name="password"
                      type="password"
                      placeholder="Password"
                      id="loginForm_input"
                      onChange={chageData}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              {colorErrorPassword ? (
                <p id="LoginForm_input-message">
                  Mật khẩu phải bao gồm 6 ký tự trở lên ( exp: 123456 )
                </p>
              ) : null}
              <p id="LoginForm_input-message">
                {messagePassword ? messagePassword : ""}
              </p>
            </div>

            <div className="loginForm_button">
              <button
                type="button"
                id="loginForm_button-btnlogin"
                onClick={() => submitForm()}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  function validateEmail(email) {
    //return true if result true
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export default UiLogin;
