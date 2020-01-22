import React from "react";
import DashboardContainer from "./DashboardContainer";
import HeaderContainer from "../header/HeaderContainer";
import AddChart from "../header/AddChart";
import CreateAlert from "../header/CreateAlert";

const DashboardPage = () => {
  const addChart = props => <AddChart {...props} />;
  const createAlert = props => <CreateAlert {...props} />;

  return (
    <>
      <HeaderContainer addChart={addChart} createAlert={createAlert} />
      <DashboardContainer />
    </>
  );
};
export default DashboardPage;
