import { UPDATE_QUIZ_FORM } from "../actions/quizAction";

export const QUIZ_FORM = {
  steps: [
    {
      completed: true,
      selected: [],
      route: "/rooms"
    },
    {
      completed: true,
      selected: [],
      route: "/moods"
    },
    {
      completed: false,
      selected: [],
      route: "/furnitures"
    },
    {
      completed: false,
      selected: [],
      route: "/brands"
    },
    {
      completed: false,
      selected: [],
      route: "/colors"
    }
  ],
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
