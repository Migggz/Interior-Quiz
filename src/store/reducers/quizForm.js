import { UPDATE_QUIZ_FORM } from "../actions/quizAction";

export const QUIZ_FORM = {};

export default function(currentState = QUIZ_FORM, { type, payload }) {
  switch (type) {
    case UPDATE_QUIZ_FORM: {
      return payload;
    }
    default:
      return currentState;
  }
}
