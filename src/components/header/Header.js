import React from "react";
import { connect } from "react-redux";
import { addPair } from "../../redux/actions/pairActions";
import { createAlert } from "../../redux/actions/alertActions";
import { loadCharts } from "../../redux/actions/chartActions";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class Header extends React.Component {
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
      <Navbar>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
        {addChart &&
          charts.length > 0 &&
          addChart({
            pairNames,
            selectChartHandler: this.createChartHandler
          })}
        {createAlert &&
          charts.length > 0 &&
          createAlert({
            pairNames,
            createAlertHandler: this.createAlertHandler
          })}
      </Navbar>
    );
  }
}

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
