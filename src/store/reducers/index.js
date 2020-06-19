import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import quizForm from "./quizForm";

export default history =>
  combineReducers({
    router: connectRouter(history),
    quizForm
  });
