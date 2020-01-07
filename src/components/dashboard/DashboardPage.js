import React from "react";
import { connect } from "react-redux";
import * as chartActions from "../../redux/actions/chartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
// import { toast } from "react-toastify";
import ChartWidget from "../widgets/ChartWidget";
import Select from "../widgets/Select";

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
          debugger;
          this.setState({ currentChart: this.props.charts[0] });
        })
        .catch(error => {
          alert("Loading charts data failed" + error);
        });
    }
  }

  selectHandler(event) {
    event.preventDefault();
    const currentChart = this.props.charts.find(chart => {
      if (chart.title === event.target.value) {
        return chart;
      }
    });
    this.setState({ currentChart });
  }

  render() {
    debugger;
    return (
      <>
        {this.props.loading && <Spinner className="text-center p-3" />}
        {this.props.charts.length > 0 && (
          <div className="dashboard-container">
            {this.state.currentChart && (
              <ChartWidget chartData={this.state.currentChart} />
            )}
            {this.state.currentChart && (
              <Select
                pairNames={this.props.charts.map(chart => chart.title)}
                changeHandler={this.selectHandler}
              />
            )}
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
