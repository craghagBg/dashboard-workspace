import React from "react";
import DashboardContainer from "./DashboardContainer";
import Header from "../header/Header";
import AddChart from "../header/AddChart";
import CreateAlert from "../header/CreateAlert";

const DashboardPage = () => {
  const addChart = props => <AddChart {...props} />;
  const createAlert = props => <CreateAlert {...props} />;

  return (
    <>
      <Header addChart={addChart} createAlert={createAlert} />
      <DashboardContainer />
    </>
  );
};
export default DashboardPage;
