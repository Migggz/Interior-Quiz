import { fetchCollection } from "../../firebase";

export const fetchData = collectionName => {
  return dispatch => {
    return fetchCollection(collectionName).then(data => {
      dispatch({
        type: `UPDATE_${collectionName.toUpperCase()}_DATA`,
        payload: data
      });
    });
  };
};
