import { UPDATE_QUIZ_FORM } from "../actions/quizAction";

export const QUIZ_FORM = {
  "step-1": {
    completed: false,
    selected: [],
    route: "/rooms"
  },
  "step-2": {
    completed: false,
    selected: [],
    route: "/moods"
  },
  "step-3": {
    completed: false,
    selected: [],
    route: "/furnitures"
  },
  "step-4": {
    completed: false,
    selected: [],
    route: "/brands"
  },
  "step-5": {
    completed: false,
    selected: [],
    route: "/colors"
  },
  completed: false
};

export default function(currentState = QUIZ_FORM, { type, payload }) {
  switch (type) {
    case UPDATE_QUIZ_FORM: {
      return payload;
    }
    default:
      return currentState;
  }
}
