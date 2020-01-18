import React, { useState } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";

const List = ({ pairNames, asset, focusWidgetHandler, selectChartHandler }) => {
  const [x] = useState(initialConstants.listPosition_x + 100 * +asset.id);
  const [y] = useState(initialConstants.listPosition_y + 100 * +asset.id);
  const [width] = useState(initialConstants.listWidth);
  const [height] = useState(initialConstants.listHeight);
  return (
    <>
      {pairNames.length > 0 && (
        <Rnd
          className={`d-flex p-2 primery-bg select default ${
            asset.active ? "list-active" : "list"
          }`}
          default={{ x, y, width, height }}
          bounds=".dashboard-container"
          enableResizing="false"
          onClick={focusWidgetHandler}
        >
          <select
            className="selectpicker mx-auto border-0 default"
            onChange={selectChartHandler}
            value={asset.pair}
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
  focusWidgetHandler: PropTypes.func.isRequired,
  selectChartHandler: PropTypes.func.isRequired
};

export default List;
