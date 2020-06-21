import { UPDATE_ROOMS_DATA } from "../types";

export default function(currentState = [], { type, payload }) {
  switch (type) {
    case UPDATE_ROOMS_DATA: {
      return [...payload];
    }
    default:
      return currentState;
  }
}
