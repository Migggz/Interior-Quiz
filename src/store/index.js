import { createStore, compose } from "redux";
import createRootReducer from "./reducers";

// Redux Devtools || normal compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Export Store
export default function configureStore(options) {
  const store = createStore(createRootReducer(), composeEnhancers());
  return store;
}
