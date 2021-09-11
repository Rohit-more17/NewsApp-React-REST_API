import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    document.body.style.backgroundColor = "#2F4F4F";
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" key="General">
            <News catagory="general"></News>
          </Route>

          <Route exact path="/business" key="Buisness">
            <News catagory="business"> </News>
          </Route>

          <Route exact path="/sports" key="Sports">
            <News catagory="sports"></News>
          </Route>

          <Route exact path="/entertainment" key="Entertainment">
            <News catagory="entertainment"></News>
          </Route>

          <Route exact path="/technology" key="Technology">
            <News catagory="technology"></News>
          </Route>

          
        </Switch>
      </Router>
    );
  }
}
