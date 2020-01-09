import React from "react";
import { connect } from "react-redux";
import * as chartActions from "../../redux/actions/chartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import List from "../widgets/List";
import Notification from "../widgets/Notification";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChart: null
    };

    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    const { charts, actions } = this.props;

    if (charts.length === 0) {
      actions
        .loadCharts()
        .then(() => {
          this.setState({ currentChart: this.props.charts[0] });
        })
        .catch(error => {
          alert("Loading charts data failed" + error);
        });
    }
  }

  selectHandler(event) {
    event.preventDefault();
    const { charts, actions } = this.props;

    const currentChart = charts.chartsData.find(chart => {
      if (chart.title === event.target.value) {
        return chart;
      }
    });
    actions.setCurrentChart(currentChart.title);
  }

  render() {
    return (
      <div className="dashboard-container">
        {this.props.loading && <Spinner className="text-center p-3" />}
        {this.props.charts.chartsData.length > 0 && (
          <div>
            {this.state.currentChart && (
              <ChartWidget chartData={this.state.currentChart} />
            )}
            {this.props.alerts.length > 0 && (
              <Notification alerts={this.props.alerts} />
            )}
            {this.props.alerts > 0 && (
              <List
                pairNames={this.props.charts.chartsData.map(
                  chart => chart.title
                )}
                changeHandler={this.selectHandler}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  charts: PropTypes.object.isRequired,
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
