import React from "react";
import { connect } from "react-redux";
import * as chartActions from "../../redux/actions/chartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";

class DashboardPage extends React.Component {
  componentDidMount() {
    const { charts, actions } = this.props;

    if (charts.length === 0) {
      actions.loadCharts().catch(error => {
        alert("Loading charts data failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.props.loading && <Spinner className="text-center p-3" />}
        {this.props.charts.length > 0 && (
          <div className="dashboard-container">
            <ChartWidget chartData={this.props.charts[0]} />
          </div>
        )}
      </>
    );
  }
}

DashboardPage.propTypes = {
  charts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharts: bindActionCreators(chartActions.loadCharts, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
