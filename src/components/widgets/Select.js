import React, { useState } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";

const Select = ({ pairNames, changeHandler }) => {
  const [x] = useState(20);
  const [y] = useState(20);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(60);

  const resizeHandler = (e, direction, ref) => {
    setWidth(
      parseInt(ref.style.width.substr(0, ref.style.width.length - 2), 10)
    );
    setHeight(
      parseInt(ref.style.height.substr(0, ref.style.height.length - 2), 10)
    );
  };

  return (
    <>
      {pairNames.length > 0 && (
        <Rnd
          className="d-flex p-2 primery-bg select"
          default={{ x, y, width, height }}
          bounds="parent"
          enableResizing="false"
          onResizeStop={resizeHandler}
        >
          <select
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
          </select>
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
