import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./common/HomePage";
import AboutPage from "./common/AboutPage";
import PageNotFound from "./common//PageNotFound";
import DashboardPage from "./dashboard/DashboardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
