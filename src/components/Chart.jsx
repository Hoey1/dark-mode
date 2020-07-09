import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect } from "react";

const Chart = ({ sparklineData, darkMode }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter((data) => data);

  if (darkMode === true) {
    return (
      <LineChart width={1100} height={300} data={formattedData}>
        <Line type="monotone" dataKey="value" stroke="#FF4500" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={3} />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  } else {
    return (
      <LineChart width={1100} height={300} data={formattedData}>
        <Line type="monotone" dataKey="value" stroke="#663399" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={3} />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
};

export default Chart;
