import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from "components/Home/Home.jsx";
import './App.css';
import { PrivateRoute } from './config/PrivateRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";

const hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miniActive: "",
      sidebar: ""
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter history={hist}>
            <Switch>
              <PrivateRoute exact path="/home" component={Home}/>
              <Redirect to={{ pathname: '/home' }} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;