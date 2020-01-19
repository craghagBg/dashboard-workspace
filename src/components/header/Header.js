import React from "react";
import { connect } from "react-redux";
import * as pairsActions from "../../redux/actions/pairsActions";
import * as chartsActions from "../../redux/actions/chartsActions";
import * as alertActions from "../../redux/actions/alertActions";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.createAlertHandler = this.createAlertHandler.bind(this);
    this.selectChartHandler = this.selectChartHandler.bind(this);
  }

  componentDidMount() {
    const { charts, actions } = this.props;

    if (charts.length === 0) {
      actions.loadCharts().catch(error => {
        alert("Loading charts data failed" + error);
      });
    }
  }

  createAlertHandler(pair) {
    const { actions } = this.props;
    actions.createAlert(pair);
  }

  selectChartHandler(event) {
    const { actions } = this.props;
    actions.addPair(event.target.textContent);
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
          charts.length &&
          addChart({
            pairNames,
            selectChartHandler: this.selectChartHandler
          })}
        {createAlert &&
          charts.length &&
          createAlert({
            pairNames,
            createAlertHandler: this.createAlertHandler
          })}
      </Navbar>
    );
  }
}

Header.propTypes = {
  addChart: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
  charts: PropTypes.array.isRequired,
  alerts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    charts: state.charts,
    alerts: state.alerts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharts: bindActionCreators(chartsActions.loadCharts, dispatch),
      createAlert: bindActionCreators(alertActions.createAlert, dispatch),
      addPair: bindActionCreators(pairsActions.addPair, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
