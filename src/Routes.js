import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import StatusData from "./StatusData/StatusData";
import FormData from "./FormData/FormData";
import FormData2 from "./FormData/FormData2";
import Home from "./Home/Home";
import history from "./history";
import InformasiData from "./InformasiData/InformasiData";
import InformasiStatus from "./InformasiData/InformasiStatusPelaporan";
import DetailPelapor from "./InformasiData/DetailPelapor";
import FormLogin from "./components/formLogin";
import NotFound from "./components/Notfound";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/StatusData" component={StatusData} />
          <Route exact path="/FormData" component={FormData} />
          <Route exact path="/FormData2" component={FormData2} />
          <Route exact path="/InformasiData" component={InformasiData} />
          <Route exact path="/InformasiStatus" component={InformasiStatus} />
          <Route exact path="/data_pelapor/:idx" component={DetailPelapor} />
          <Route exact path="/FormLogin" component={FormLogin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
