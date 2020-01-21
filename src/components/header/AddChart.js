import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

const AddChart = ({ pairNames, selectChartHandler }) => (
  <Dropdown alignRight>
    <Dropdown.Toggle className="default inner">📈</Dropdown.Toggle>
    <Dropdown.Menu>
      {pairNames.map((pair, key) => (
        <Dropdown.Item key={key} value={pair} onClick={selectChartHandler}>
          {pair}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

AddChart.propTypes = {
  pairNames: PropTypes.array.isRequired,
  selectChartHandler: PropTypes.func.isRequired
};

export default AddChart;
