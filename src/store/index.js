import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

// History
export const history = createBrowserHistory();

// Redux Devtools || normal compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middlewares
const middleware = [routerMiddleware(history), thunk];

// Export Store
export default function configureStore(options) {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
