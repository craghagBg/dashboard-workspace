import React, { useState } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import initialConstants from "../../initialConstants";

const Select = ({ pairNames, changeHandler }) => {
  const [x] = useState(initialConstants.listPosition_x);
  const [y] = useState(initialConstants.listPosition_y);
  const [width] = useState(initialConstants.listWidth);
  const [height] = useState(initialConstants.listHeight);

  return (
    <>
      {pairNames.length > 0 && (
        <Rnd
          className="d-flex p-2 primery-bg select"
          default={{ x, y, width, height }}
          bounds="parent"
          enableResizing="false"
        >
          {/* <select
            className="selectpicker mx-auto border-0"
            style={{ color: "#fff", backgroundColor: "#1f1e36" }}
            onChange={changeHandler}
          >
            {pairNames.map((pair, key) => {
              return (
                <option key={key} value={pair}>
                  {pair}
                </option>
              );
            })}
          </select> */}
          <Dropdown>
            <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Rnd>
      )}
    </>
  );
};

Select.propTypes = {
  pairNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default Select;
