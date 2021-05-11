import React, { useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

const DashboardBarGraph = ({ height, stats }) => {
  useEffect(() => {
    console.log(stats);
  }, []);
  return (
    <div style={{ height: height }}>
      <ResponsiveLine
        data={stats}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 10,
          tickPadding: 6,
          // tickRotation: -42,
          legend: "",
          legendOffset: -23,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: 2,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        // linearScale=[2,4,6,8,10]
        enablePoints={false}
        pointSize={9}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "color", modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
};

export default DashboardBarGraph;
