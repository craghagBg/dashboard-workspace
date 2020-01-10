import React from "react";
import AddChart from "./AddChart";
import { connect } from "react-redux";
import * as chartActions from "../../redux/actions/chartActions";
import * as alertActions from "../../redux/actions/alertActions";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { bindActionCreators } from "redux";
import CreateAlert from "./CreateAlert";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.createAlertHandler = this.createAlertHandler.bind(this);
    this.selectChartHandler = this.selectChartHandler.bind(this);
  }

  componentDidMount() {
    const { charts, actions } = this.props;

    if (charts.chartsData.length === 0) {
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
    this.props.actions.setCurrentChart(event.target.textContent);
  }

  render() {
    const { chartsData } = this.props.charts;
    const pairNames = chartsData.map(chart => chart.title);
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
        {window.location.pathname === "/dashboard" && chartsData.length > 0 && (
          <AddChart
            pairNames={pairNames}
            selectChartHandler={this.selectChartHandler}
          />
        )}
        {window.location.pathname === "/dashboard" && chartsData.length > 0 && (
          <CreateAlert
            pairNames={pairNames}
            createAlertHandler={this.createAlertHandler}
          />
        )}
      </Navbar>
    );
  }
}

Header.propTypes = {
  charts: PropTypes.shape({
    chartsData: PropTypes.array.isRequired,
    currentChartName: PropTypes.string.isRequired
  }),
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
      loadCharts: bindActionCreators(chartActions.loadCharts, dispatch),
      createAlert: bindActionCreators(alertActions.createAlert, dispatch),
      setCurrentChart: bindActionCreators(
        chartActions.setCurrentChart,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
