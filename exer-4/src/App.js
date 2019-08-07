import React, { Component } from "react";

import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <TopMenu />
          <Switch>{this.showRoutes(routes)}</Switch>
          <Footer />
        </div >
      </Router >
    );
  }

  showRoutes = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
