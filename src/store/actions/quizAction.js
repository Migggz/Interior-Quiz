import { UPDATE_STEP, UPDATE_FORM_STATUS, RESET_FORM } from "../types";

export const updateQuizForm = (stepKey, selectedData, completed) => (
  dispatch,
  getState
) => {
  const quizForm = getState().quizForm;
  const step = quizForm.steps[stepKey];

  dispatch({
    type: UPDATE_STEP,
    payload: {
      [stepKey]: {
        ...step,
        selected: [...selectedData],
        completed: completed
      }
    }
  });
};

export const updateQuizFormStatus = completed => (dispatch, getState) =>
  dispatch({
    type: UPDATE_FORM_STATUS,
    payload: completed
  });

export const resetForm = () => dispatch => dispatch({ type: RESET_FORM });
