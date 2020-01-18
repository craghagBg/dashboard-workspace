import React from "react";
import PropTypes from "prop-types";
import { createChart } from "lightweight-charts";

class Chart extends React.Component {
  chart = {};
  candleSeries = {};

  componentDidMount() {
    const { width, height, asset } = this.props;
    this.chart = createChart(document.getElementById(asset.id), {
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
      title: asset.chart.title
    });
    this.candleSeries.setData(asset.chart.data);
  }

  componentDidUpdate() {
    debugger;
    const { width, height, asset } = this.props;
    this.chart.resize(height, width);
    this.candleSeries.setData(asset.chart.data);
    this.candleSeries.applyOptions({
      title: asset.chart.title
    });
  }

  render() {
    return <div id={this.props.asset.id} />;
  }
}

Chart.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pair: PropTypes.string,
    chart: PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.array.isRequired
    })
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Chart;
