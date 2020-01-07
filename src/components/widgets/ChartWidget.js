import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Chart from "./Chart";
import PropTypes from "prop-types";
import initialState from "../../redux/reducers/initialState";

const ChartWidget = ({ chartData }) => {
  debugger;
  const [x] = useState(initialState.x);
  const [y] = useState(initialState.y);
  const [width, setWidth] = useState(initialState.width);
  const [height, setHeight] = useState(initialState.height);

  const resizeHandler = (e, direction, ref) => {
    setWidth(
      parseInt(ref.style.width.substr(0, ref.style.width.length - 2), 10)
    );
    setHeight(
      parseInt(ref.style.height.substr(0, ref.style.height.length - 2), 10)
    );
  };

  const style = {
    overflow: "hidden",
    boxShadow:
      "0 10px 10px 0 rgba(0, 0, 0, 0.12), 0 20px 20px 0 rgba(0, 0, 0, 0.219)",
    borderRadius: "3px",
    border: "double 2px #1f1e36"
  };
  return (
    <>
      <Rnd
        style={style}
        default={{ x, y, width, height }}
        bounds="parent"
        onResizeStop={resizeHandler}
      >
        <Chart chartData={chartData} width={width} height={height} />
      </Rnd>
    </>
  );
};

ChartWidget.propTypes = {
  chartData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  })
};

export default ChartWidget;
