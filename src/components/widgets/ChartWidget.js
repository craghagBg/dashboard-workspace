import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Chart from "./Chart";
import PropTypes from "prop-types";

const ChartWidget = ({ data }) => {
  const [x] = useState(10);
  const [y] = useState(10);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);

  const resizeHandler = (e, direction, ref) => {
    setWidth(
      parseInt(ref.style.width.substr(0, ref.style.width.length - 2), 10)
    );
    setHeight(
      parseInt(ref.style.height.substr(0, ref.style.height.length - 2), 10)
    );
  };

  const style = {
    overflow: "auto",
    boxShadow:
      "0 10px 10px 0 rgba(0, 0, 0, 0.12), 0 20px 20px 0 rgba(0, 0, 0, 0.219)",
    borderRadius: "3px",
    border: "double 2px #1f1e36"
  };
  return (
    <Rnd
      style={style}
      default={{ x, y, width, height }}
      bounds="parent"
      onResizeStop={resizeHandler}
    >
      <Chart data={data} width={width} height={height} />
    </Rnd>
  );
};

ChartWidget.propTypes = {
  data: PropTypes.array.isRequired
};

export default ChartWidget;
