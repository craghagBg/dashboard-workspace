import React from "react";
import { connect } from "react-redux";
import { addPair } from "../../redux/actions/pairActions";
import { createAlert } from "../../redux/actions/alertActions";
import { loadCharts } from "../../redux/actions/chartActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "./Header";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createAlertHandler = this.createAlertHandler.bind(this);
    this.createChartHandler = this.createChartHandler.bind(this);
  }

  componentDidMount() {
    const { charts, actions } = this.props;

    if (charts.length === 0) {
      actions.loadCharts().catch(error => {
        alert("Loading charts data failed" + error);
      });
    }
  }

  createId = () => {
    let id;
    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
    while (true) {
      id = Math.floor(Math.random() * Math.floor(100));
      if (!this.props.pairs.find(pair => pair.id === id)) return id;
    }
  };

  createAlertHandler(pair) {
    const { actions } = this.props;
    actions.createAlert(pair);
  }

  createChartHandler(event) {
    const { actions } = this.props;
    actions.addPair(this.createId(), event.target.textContent);
  }

  render() {
    const { charts, addChart, createAlert } = this.props;
    const pairNames = charts.map(chart => chart.title);
    return (
      <>
        {charts && charts.length > 0 ? (
          <Header
            pairNames={pairNames}
            addChart={addChart}
            createAlert={createAlert}
            createChartHandler={this.createChartHandler}
            createAlertHandler={this.createAlertHandler}
          />
        ) : (
          <Header />
        )}
      </>
    );
  }
}

HeaderContainer.propTypes = {
  addChart: PropTypes.func,
  createAlert: PropTypes.func,
  charts: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  pairs: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    loadCharts: PropTypes.func.isRequired,
    createAlert: PropTypes.func.isRequired,
    addPair: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    alerts: state.alerts,
    pairs: state.pairs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharts: bindActionCreators(loadCharts, dispatch),
      createAlert: bindActionCreators(createAlert, dispatch),
      addPair: bindActionCreators(addPair, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
