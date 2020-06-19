import React, { Fragment } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import RoomsPage from "./RoomsPage";
import MoodsPage from "./MoodsPage";
import FurnituresPage from "./FurnituresPage";
import BrandsPage from "./BrandsPage";
import ColorsPage from "./ColorsPage";
import ResultsPage from "./ResultsPage";
import StepsNavigation from "../components/StepsNavigation";

const MapComponents = [
  RoomsPage,
  MoodsPage,
  FurnituresPage,
  BrandsPage,
  ColorsPage
];

export default function QuizForm() {
  const router = useSelector(state => state.router);
  const quizData = useSelector(state => state.quizForm);
  const quizSteps = quizData.steps;

  const currentStepIndex =
    router.location.pathname === quizSteps[0].route
      ? 0
      : quizSteps.findIndex(step => step.route === router.location.pathname);

  const nextBtnRoute = quizSteps[currentStepIndex <= 0 ? 0 : currentStepIndex]
    .completed
    ? quizData.completed
      ? "/results"
      : quizSteps[currentStepIndex + 1].route
    : false;

  const prevBtnRoute =
    currentStepIndex <= 0 ? false : quizSteps[currentStepIndex - 1].route;

  return (
    <Fragment>
      <Switch>
        {quizSteps.map((step, index) => {
          const Component = MapComponents[index];
          const prevStep = quizSteps[index - 1];

          return (
            <PrivateRoute
              isPrevCompleted={prevStep ? prevStep.completed : true}
              firstStep={quizSteps[0]}
              exact
              key={"Step - " + index}
              path={step.route}
              render={props => <Component {...props} />}
            />
          );
        })}

        <PrivateRoute
          showResults={quizData.completed}
          exact
          path="/results"
          render={props => <ResultsPage {...props} />}
        />

        <Redirect from="/" to={quizSteps[0].route} />
      </Switch>
      <StepsNavigation
        nextBtnRoute={nextBtnRoute}
        prevBtnRoute={prevBtnRoute}
      />
    </Fragment>
  );
}
