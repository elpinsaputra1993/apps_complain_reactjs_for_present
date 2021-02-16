import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbox from "./Chatbox";

import AuthService from "../services/auth.service";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { usernameInput: "", passwordInput: "" };
  }

  handleUsernameChange = (e) => {
    // setusernameInput(e.target.value);
    this.setState({ usernameInput: e.target.value });
  };

  handlePasswordChange = (e) => {
    // setPasswordInput(e.target.value);
    this.setState({ passwordInput: e.target.value });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();

    const cek = AuthService.login(
      this.state.usernameInput,
      this.state.passwordInput
    );

    if (cek) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      //go to www.website.com/todo
      //   history.push("/todo");
      alert("Anda berhasil masuk sistem internal...");
      // setTimeout(function () {
      //   window.location.href = "http://localhost:3000/sign-up";
      this.props.history.push("/");
      window.location.reload();
      // }, 300);
    } else {
      //bad combination
      alert("Username atau password anda salah...");
    }
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="container-fluid col-md-4">
          <div className="card mx-auto ">
            <div className="card-header">
              <div className="col">
                <h3>Form Login</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="col">
                <form autoComplete="off" onSubmit={this.handleLoginSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameInput"
                      placeholder="Enter username"
                      value={this.state.usernameInput}
                      onChange={this.handleUsernameChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      autoComplete="new-password"
                      placeholder="Enter password"
                      value={this.state.passwordInput}
                      onChange={this.handlePasswordChange}
                    />
                  </div>

                  {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}

                  <div className="col-md-4">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Chatbox />
      </div>
    );
  }
}
