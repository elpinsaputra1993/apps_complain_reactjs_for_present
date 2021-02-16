import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import AuthService from "../services/auth.service";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
    alert("Anda telah keluar sistem internal.");
  }
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="navi">
          <Navbar.Brand href="/">ADMIN PENGADUAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/FormData">Form</Nav.Link>
              {/* <Nav.Link href="/FormData2">Form Data2</Nav.Link> */}
              {/* <Nav.Link href="/StatusData">Status Data</Nav.Link> */}
              {this.state.currentUser && (
                <DropdownButton id="dropdown-basic-button" title="Informasi">
                  <Dropdown.Item href="/InformasiData">
                    Informasi Data
                  </Dropdown.Item>
                  <Dropdown.Item href="/InformasiStatus">
                    Informasi Status Pelaporan
                  </Dropdown.Item>
                </DropdownButton>
              )}
            </Nav>
            <Nav className="justify-content-end">
              {this.state.currentUser ? (
                <Nav.Link href="/" onClick={this.logOut}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link href="/FormLogin">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navigation);
