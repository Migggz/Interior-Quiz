import { UPDATE_MOODS_DATA } from "../types";

export default function(currentState = [], { type, payload }) {
  switch (type) {
    case UPDATE_MOODS_DATA: {
      return [...payload];
    }
    default:
      return currentState;
  }
}
