import { UPDATE_FURNITURES_DATA } from "../types";

export default function(currentState = [], { type, payload }) {
  switch (type) {
    case UPDATE_FURNITURES_DATA: {
      return [...payload];
    }
    default:
      return currentState;
  }
}
