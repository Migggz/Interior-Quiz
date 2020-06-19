import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ showResults, isPrevCompleted, ...props }) => {
  const render = showResults
    ? props.render
    : isPrevCompleted
    ? props.render
    : () => <Redirect to="/rooms" />;

  return <Route {...props} render={render} />;
};

export default PrivateRoute;
