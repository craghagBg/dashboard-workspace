import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Chart from "./Chart";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";
import CloseButton from "../common/CloseButton";

const ChartWidget = ({ asset, focusWidgetHandler, closeHandler }) => {
  const [x] = useState(initialConstants.chartPosition_x + 50 * asset.num);
  const [y] = useState(initialConstants.chartPosition_y + 60 * asset.num);
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
    <Rnd
      className={`chart-container ${asset.active && "active-chart"}`}
      default={{ x, y, width, height }}
      bounds=".dashboard-container"
      onResizeStop={resizeHandler}
      onClick={focusWidgetHandler}
    >
      <Chart asset={asset} width={width} height={height} />
      <CloseButton closeHandler={closeHandler} />
    </Rnd>
  );
};

ChartWidget.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    pair: PropTypes.string,
    chart: PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.array.isRequired
    })
  }),
  closeHandler: PropTypes.func.isRequired,
  focusWidgetHandler: PropTypes.func.isRequired
};

export default ChartWidget;
