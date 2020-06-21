import { UPDATE_COLORS_DATA } from "../types";

export default function(currentState = [], { type, payload }) {
  switch (type) {
    case UPDATE_COLORS_DATA: {
      return [...payload];
    }
    default:
      return currentState;
  }
}
