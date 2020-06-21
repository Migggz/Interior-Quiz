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

const MapComponents = {
  rooms: RoomsPage,
  moods: MoodsPage,
  furnitures: FurnituresPage,
  brands: BrandsPage,
  colors: ColorsPage
};

export default function QuizForm() {
  const router = useSelector(state => state.router);
  const quizData = useSelector(state => state.quizForm);
  const quizSteps = quizData.steps;
  const quizStepsKeys = Object.keys(quizData.steps);

  const currentRouteIsStep = quizStepsKeys.indexOf(
    router.location.pathname.substring(1)
  );

  let nextBtn, prevBtn;

  if (currentRouteIsStep >= 0) {
    const isCurrentStepCompleted =
      quizSteps[quizStepsKeys[currentRouteIsStep]].completed;
    const isCurrentFirstStep =
      quizSteps[quizStepsKeys[0]].route === router.location.pathname;
    const isCurrentLastStep =
      quizSteps[quizStepsKeys[quizStepsKeys.length - 1]].route ===
      router.location.pathname;

    nextBtn = {
      status: isCurrentStepCompleted
        ? isCurrentLastStep
          ? "show-results"
          : "next"
        : null,
      route: isCurrentStepCompleted
        ? isCurrentLastStep
          ? "/results"
          : quizSteps[quizStepsKeys[currentRouteIsStep + 1]].route
        : false
    };
    prevBtn = {
      status: isCurrentFirstStep ? false : "back",
      route: isCurrentFirstStep
        ? ""
        : quizSteps[quizStepsKeys[currentRouteIsStep - 1]].route
    };
  } else {
    nextBtn = {
      status: "restart-quiz",
      route: quizSteps[quizStepsKeys[0]].route
    };
    prevBtn = {
      status: "back",
      route: quizSteps[quizStepsKeys[quizStepsKeys.length - 1]].route
    };
  }

  return (
    <Fragment>
      <Switch>
        {quizStepsKeys.map((stepKey, index) => {
          const Component = MapComponents[stepKey];
          const prevStep = quizSteps[quizStepsKeys[index - 1]];

          return (
            <PrivateRoute
              isPrevCompleted={prevStep ? prevStep.completed : true}
              firstStep={quizSteps[quizStepsKeys[0]]}
              exact
              key={"Step - " + index + 1}
              path={quizSteps[stepKey].route}
              render={props => <Component {...props} />}
            />
          );
        })}

        <PrivateRoute
          showResults={quizData.completed}
          isPrevCompleted={
            quizSteps[quizStepsKeys[quizStepsKeys.length - 1]].completed
          }
          firstStep={quizSteps[quizStepsKeys[0]]}
          exact
          path="/results"
          render={props => <ResultsPage {...props} />}
        />

        <Redirect from="/" to={quizSteps[quizStepsKeys[0]].route} />
      </Switch>
      <StepsNavigation
        nextBtn={nextBtn}
        prevBtn={prevBtn}
        percentage={
          currentRouteIsStep >= 0
            ? (currentRouteIsStep / quizStepsKeys.length) * 100
            : 100
        }
      />
    </Fragment>
  );
}
