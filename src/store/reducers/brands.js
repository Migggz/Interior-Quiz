import { UPDATE_BRANDS_DATA } from "../types";

export default function(currentState = [], { type, payload }) {
  switch (type) {
    case UPDATE_BRANDS_DATA: {
      return [...payload];
    }
    default:
      return currentState;
  }
}
