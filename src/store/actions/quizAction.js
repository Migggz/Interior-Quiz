export const UPDATE_QUIZ_FORM = "UPDATE_QUIZ_FORM";

export const updateQuizForm = data => dispatch => {
  dispatch({
    type: UPDATE_QUIZ_FORM,
    payload: data
  });
};
