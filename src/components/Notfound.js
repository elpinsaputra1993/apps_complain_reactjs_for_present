import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "../services/auth.service";
export default class Notfound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="container-fluid col-md-6">
          <div className="card mx-auto ">
            <div className="card-body"></div>
            <div className="col">
              <h3>Halaman yang anda akses tidak ditemukan</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
