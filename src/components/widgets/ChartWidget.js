import React, { useEffect } from "react";
import { Rnd } from "react-rnd";
import { createChart } from "lightweight-charts";

const ChartWidget = () => {
  useEffect(() => {
    const chart = createChart(document.getElementById("chart"), {
      width: 400,
      height: 300
    });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
  }, []);
  return (
    <Rnd
      size={{ width: 320, height: 200 }}
      position={{ x: 100, y: 400 }}
      onDragStop={() => {
        //   this.setState({ x: d.x, y: d.y });
      }}
      onResize={() => {
        //   this.setState({
        //     width: ref.offsetWidth,
        //     height: ref.offsetHeight,
        //     ...position
        //   });
      }}
    >
      <div id="chart"></div>
    </Rnd>
  );
};

export default ChartWidget;
