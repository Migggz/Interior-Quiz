import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  showResults,
  firstStep,
  isPrevCompleted,
  ...props
}) => {
  const render = showResults
    ? props.render
    : isPrevCompleted
    ? props.render
    : () => <Redirect to={firstStep.route} />;

  return <Route {...props} render={render} />;
};

export default PrivateRoute;
