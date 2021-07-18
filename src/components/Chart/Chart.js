import React from "react";

// Importing Components
import ChartBar from "../Chart/ChartBar";

// Importing Styles
import "../../scss/Chart.scss";
import { data } from "browserslist";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
