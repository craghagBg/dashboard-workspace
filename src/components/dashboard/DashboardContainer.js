import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteAlert } from "../../redux/actions/alertActions";
import { deletePair } from "../../redux/actions/pairActions";
import PropTypes from "prop-types";
import Spinner from "../common/spiner/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import List from "../widgets/List";
import Notification from "../widgets/Notification";

const DashboardContainer = ({ loading, charts, pairs, alerts, actions }) => {
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

  const closeAlert = id => actions.deleteAlert(id);
  const closeChart = id => actions.deletePair(id);

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
                  closeHandler={closeChart.bind(null, asset.id)}
                />
              )}
              <List
                pairNames={charts.map(pair => pair.title)}
                asset={asset}
                focusWidgetHandler={focusWidgetHandler.bind(null, asset.id)}
                selectChartHandler={selectChartHandler.bind(null, asset.id)}
              />
            </div>
          );
        })
      )}
      {alerts.length > 0 && (
        <Notification alerts={alerts} closeHandler={closeAlert.bind(null)} />
      )}
    </div>
  );
};

DashboardContainer.propTypes = {
  charts: PropTypes.array.isRequired,
  pairs: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    deleteAlert: PropTypes.func.isRequired,
    deletePair: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    pairs: state.pairs,
    alerts: state.alerts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteAlert: bindActionCreators(deleteAlert, dispatch),
      deletePair: bindActionCreators(deletePair, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
