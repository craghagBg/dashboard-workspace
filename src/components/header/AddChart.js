import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

const AddChart = ({ pairNames, selectHandler }) => {
  const [pair, setPair] = useState(pairNames[0]);
  return (
    <Dropdown alignRight>
      <Dropdown.Toggle className="chart-icon">📈</Dropdown.Toggle>
      <Dropdown.Menu>
        {pairNames.map((pair, key) => {
          return (
            <Dropdown.Item key={key} value={pair}>
              {pair}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

AddChart.propTypes = {
  pairNames: PropTypes.array.isRequired
};

export default AddChart;
