import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import NavTabs from "./components/NavTabs";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
