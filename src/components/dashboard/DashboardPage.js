import React from "react";
import { connect } from "react-redux";
import * as chartActions from "../../redux/actions/chartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../spiner/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import List from "../widgets/List";
import Notification from "../widgets/Notification";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.selectChartHandler = this.selectChartHandler.bind(this);
  }

  selectChartHandler(event) {
    this.props.actions.setCurrentChart(event.target.value);
  }

  render() {
    const { loading, charts, alerts } = this.props;

    return (
      <div className="dashboard-container">
        {loading && <Spinner className="text-center p-3" />}
        {charts.chartsData.length > 0 && <ChartWidget charts={charts} />}
        {charts.chartsData.length > 0 && (
          <List
            pairNames={charts.chartsData.map(chart => chart.title)}
            selectChartHandler={this.selectChartHandler}
          />
        )}
        {alerts.length > 0 && <Notification alerts={this.props.alerts} />}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  charts: PropTypes.shape({
    chartsData: PropTypes.array.isRequired,
    currentChartName: PropTypes.string.isRequired
  }),
  alerts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    alerts: state.alerts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharts: bindActionCreators(chartActions.loadCharts, dispatch),
      setCurrentChart: bindActionCreators(
        chartActions.setCurrentChart,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
