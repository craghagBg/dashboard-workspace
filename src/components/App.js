import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./common/HomePage";
import AboutPage from "./common/AboutPage";
import PageNotFound from "./common//PageNotFound";
import DashboardPage from "./dashboard/DashboardPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
