import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../spiner/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import List from "../widgets/List";
import Notification from "../widgets/Notification";

const DashboardPage = ({ loading, charts, pairs, alerts }) => {
  if (loading || charts.length === 0)
    return (
      <div className="dashboard-container">
        <Spinner className="text-center p-3" />
      </div>
    );

  const mapAssets = pairs.map((pair, id) => {
    return {
      id,
      pair,
      active: pairs.length - 1 === id,
      chart: charts.find(ch => ch.title === pair)
    };
  });

  const [assets, setAssets] = useState(mapAssets);

  const selectChartHandler = (id, event) => {
    const newAssets = [...assets];
    newAssets.map(asset => {
      if (asset.id === id) {
        asset.pair = event.target.value;
        asset.chart = charts.find(chart => chart.title === event.target.value);
      }
      return asset;
    });

    setAssets(newAssets);
  };

  const focusWidgetHandler = id => {
    const newAssets = [...assets];
    newAssets.map(asset => (asset.active = asset.id === id));
    setAssets(newAssets);
  };

  return (
    <div className="dashboard-container">
      {assets.map(asset => {
        return (
          <div key={asset.id}>
            <ChartWidget
              asset={asset}
              focusWidgetHandler={focusWidgetHandler.bind(null, asset.id)}
            />
            <List
              pairNames={charts.map(pair => pair.title)}
              asset={asset}
              focusWidgetHandler={focusWidgetHandler.bind(null, asset.id)}
              selectChartHandler={selectChartHandler.bind(null, asset.id)}
            />
            );
            {alerts.length > 0 && <Notification alerts={alerts} />}
          </div>
        );
      })}
    </div>
  );
};

DashboardPage.propTypes = {
  charts: PropTypes.array.isRequired,
  pairs: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    pairs: state.pairs,
    alerts: state.alerts,
    loading: state.apiCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(DashboardPage);
