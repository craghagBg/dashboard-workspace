import React from "react";
import PropTypes from "prop-types";
import { createChart } from "lightweight-charts";

class Chart extends React.Component {
  chart = {};
  candleSeries = {};

  componentDidMount() {
    const { width, height, currentChart } = this.props;
    this.chart = createChart(document.getElementById("chart"), {
      width,
      height,
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
    this.candleSeries = this.chart.addCandlestickSeries({
      title: currentChart.title
    });
    this.candleSeries.setData(currentChart.data);
  }

  componentDidUpdate() {
    this.chart.resize(this.props.height, this.props.width);
    this.candleSeries.setData(this.props.currentChart.data);
    this.candleSeries.applyOptions({
      title: this.props.currentChart.title
    });
  }

  render() {
    return <div id="chart" />;
  }
}

Chart.propTypes = {
  currentChart: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Chart;
