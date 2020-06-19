import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { GlobalStyle } from "./assets/stylesheets/GlobalStyle";
import { Provider } from "react-redux";
import { grid } from "./assets/stylesheets/grid";
import configureStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <GridThemeProvider gridTheme={grid}>
        <App />
      </GridThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
