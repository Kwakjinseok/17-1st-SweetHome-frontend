import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainInSignIn from "./mainInSignIn/mainInSignIn";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = { emailValue: "", passwordValue: "" };
  }

  handleChangeValue = (e) => {
    e.target.className.includes("email")
      ? this.setState({ emailValue: e.target.value })
      : this.setState({ passwordValue: e.target.value });
  };

  handleLogin = () => {
    const { emailValue, passwordValue } = this.state;

    fetch("http://10.58.1.199:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.access_token) {
          localStorage.setItem("token", result.access_token);
          alert("회원가입 성공");
          this.props.history.push("/communitymain/posting");
        } else {
          alert("아이디나 비밀번호를 확인해주세요.");
        }
      });
  };

  render() {
    return (
      <div className="SignIn">
        <MainInSignIn
          handleChangeValue={this.handleChangeValue}
          handleLogin={this.handleLogin}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
        />
      </div>
    );
  }
}

export default withRouter(SignIn);
