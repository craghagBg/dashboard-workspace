import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Chart from "./Chart";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";

const ChartWidget = ({ currentChart }) => {
  const [x] = useState(initialConstants.chartPosition_x);
  const [y] = useState(initialConstants.chartPosition_y);
  const [width, setWidth] = useState(initialConstants.chartWidth);
  const [height, setHeight] = useState(initialConstants.chartHeight);

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
      <Rnd
        className="chart-container"
        default={{ x, y, width, height }}
        bounds="parent"
        onResizeStop={resizeHandler}
      >
        <Chart currentChart={currentChart} width={width} height={height} />
      </Rnd>
    </>
  );
};

ChartWidget.propTypes = {
  currentChart: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  })
};

export default ChartWidget;
