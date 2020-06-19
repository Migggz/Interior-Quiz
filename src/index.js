import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { GlobalStyle } from "./assets/stylesheets/GlobalStyle";
import { Provider } from "react-redux";
import { grid } from "./assets/stylesheets/grid";
import configureStore, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <GridThemeProvider gridTheme={grid}>
        <App />
      </GridThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
