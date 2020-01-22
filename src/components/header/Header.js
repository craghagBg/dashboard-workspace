import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import PropTypes from "prop-types";

const Header = ({
  pairNames,
  addChart,
  createAlert,
  createChartHandler,
  createAlertHandler
}) => (
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
      addChart({
        pairNames,
        selectChartHandler: createChartHandler
      })}
    {createAlert &&
      createAlert({
        pairNames,
        createAlertHandler: createAlertHandler
      })}
  </Navbar>
);

Header.propTypes = {
  addChart: PropTypes.func,
  createAlert: PropTypes.func,
  createChartHandler: PropTypes.func,
  createAlertHandler: PropTypes.func,
  pairNames: PropTypes.array
};

export default Header;
