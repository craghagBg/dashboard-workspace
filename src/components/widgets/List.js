import React, { useState } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";

const List = ({ pairNames, selectChartHandler }) => {
  const [x] = useState(initialConstants.listPosition_x);
  const [y] = useState(initialConstants.listPosition_y);
  const [width] = useState(initialConstants.listWidth);
  const [height] = useState(initialConstants.listHeight);

  return (
    <>
      {pairNames.length > 0 && (
        <Rnd
          className="d-flex p-2 primery-bg list default"
          default={{ x, y, width, height }}
          bounds="parent"
          enableResizing="false"
        >
          <select
            className="selectpicker mx-auto border-0 default"
            onChange={selectChartHandler}
          >
            {pairNames.map((pair, key) => {
              return (
                <option key={key} value={pair}>
                  {pair}
                </option>
              );
            })}
          </select>
        </Rnd>
      )}
    </>
  );
};

List.propTypes = {
  pairNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectChartHandler: PropTypes.func.isRequired
};

export default List;
