import React from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

const AddChart = ({ dropdownOpen, toggle }) => (
  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle nav>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA5ElEQVRIie3TPU7DMBgGYKcKKyfoTXoBKg7BDRi4Ty/E3A2pQ6Hq3JEOeViMZIJLPhFXLLxbZL+/VlJqDNzjDa9Yt9ZPWfgT+0XLZFiklG6bJKuJY5PPT9jjLiq+xLkwGPCIviK+yU3CyVc44h27PNM2i21xyInj4sXeuyx8xKo473ODoWh1Cicf7X3GMnDv27vUCDd4GiW7SMQ6m1x+0GKOA16y6PMkMYpRzQEP6GaJ/mAwveO03hfEdpxhEJ4Cyu+u66rc8b34H/dL9HPIkVZVg+gcEVx/opZpa7h6g3+Dvzf4AK1zsJ0NZMZlAAAAAElFTkSuQmCC" />
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

AddChart.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default AddChart;
