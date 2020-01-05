import React from "react";
import PropTypes from "prop-types";
import { createChart } from "lightweight-charts";

class Chart extends React.Component {
  chart = {};

  componentDidMount() {
    this.chart = createChart(document.getElementById("chart"), {
      width: this.props.width,
      height: this.props.height,
      layout: {
        backgroundColor: "#000000",
        textColor: "rgba(255, 255, 255, 0.9)"
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.5)"
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.5)"
        }
      }
    });
    const candleSeries = this.chart.addCandlestickSeries({
      title: "BTC/USD"
    });
    candleSeries.setData(this.props.data);
  }

  componentDidUpdate() {
    this.chart.resize(this.props.height, this.props.width);
  }

  render() {
    return <div id="chart" />;
  }
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Chart;
