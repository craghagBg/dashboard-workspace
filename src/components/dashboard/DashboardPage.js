import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../spiner/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import List from "../widgets/List";
import Notification from "../widgets/Notification";

const DashboardPage = ({ loading, charts, pairs, alerts }) => {
  const [assets, setAssets] = useState(null);

  useEffect(() => {
    const mapAssets = pairs.map((pair, id) => {
      return {
        id,
        pair,
        active: pairs.length - 1 === id,
        chart: charts.find(ch => ch.title === pair)
      };
    });
    setAssets(mapAssets);
  }, [loading, charts, pairs, alerts]);

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
      {loading || assets === null || charts.length === 0 ? (
        <Spinner className="text-center p-3" />
      ) : (
        assets.map(asset => {
          return (
            <div key={asset.id}>
              {asset.chart && (
                <ChartWidget
                  asset={asset}
                  focusWidgetHandler={focusWidgetHandler.bind(null, asset.id)}
                />
              )}
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
        })
      )}
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
