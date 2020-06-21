import { UPDATE_STEP, UPDATE_FORM_STATUS, RESET_FORM } from "../types";

export const QUIZ_FORM = {
  steps: {
    rooms: {
      completed: false,
      selected: [],
      route: "/rooms"
    },
    moods: {
      completed: false,
      selected: [],
      route: "/moods"
    },
    furnitures: {
      completed: false,
      selected: [],
      route: "/furnitures"
    },
    brands: {
      completed: false,
      selected: [],
      route: "/brands"
    },
    colors: {
      completed: false,
      selected: [],
      route: "/colors"
    }
  },
  completed: false
};

export default function(currentState = QUIZ_FORM, { type, payload }) {
  switch (type) {
    case UPDATE_STEP: {
      return {
        ...currentState,
        steps: {
          ...currentState.steps,
          ...payload
        }
      };
    }
    case UPDATE_FORM_STATUS: {
      return {
        ...currentState,
        completed: payload
      };
    }
    case RESET_FORM: {
      return {
        ...QUIZ_FORM
      };
    }
    default:
      return currentState;
  }
}
