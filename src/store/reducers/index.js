import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import quizForm from "./quizForm";
import rooms from "./rooms";
import moods from "./moods";
import furnitures from "./furnitures";
import brands from "./brands";
import colors from "./colors";

export default history =>
  combineReducers({
    router: connectRouter(history),
    quizForm,
    rooms,
    moods,
    furnitures,
    brands,
    colors
  });
