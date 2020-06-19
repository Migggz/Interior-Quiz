import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import RoomsPage from "./RoomPage";
import MoodsPage from "./MoodsPage";
import FurnituresPage from "./FurnituresPage";
import BrandsPage from "./BrandsPage";
import ColorsPage from "./ColorsPage";
import ResultsPage from "./ResultsPage";

const MapComponents = {
  "step-1": RoomsPage,
  "step-2": MoodsPage,
  "step-3": FurnituresPage,
  "step-4": BrandsPage,
  "step-5": ColorsPage
};

export default function QuizForm() {
  const quizData = useSelector(state => state.quizForm);

  return (
    <Switch>
      {Object.keys(quizData).map((step, index) => {
        const Component = MapComponents[step];
        const prevStep = quizData[`step-${index}`];

        return (
          <PrivateRoute
            isPrevCompleted={!index || prevStep.completed}
            exact
            key={step}
            path={quizData[step].route}
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

      <Redirect to="/rooms" />
    </Switch>
  );
}
