import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Guide } from "bizcharts";

class Series extends React.Component {
  render() {
    const releaseInfo = [
      {
        month: "Feb",
        platform: "sun",
        status: "success",
        info: "Release successfull"
      },
      {
        month: "Sep",
        platform: "times",
        status: "canceled",
        info: "Release canceled"
      }
    ];
    const data = [
      {
        month: "Jan",
        city: "London",
        revenue: 7
      },
      { month: "Feb", city: "London", revenue: 6.9 },
      {
        month: "Mar",
        city: "London",
        revenue: 9.5
      },
      {
        month: "Apr",
        city: "London",
        revenue: 14.5
      },
      {
        month: "May",
        city: "London",
        revenue: 18.4
      },
      {
        month: "Jun",
        city: "London",
        revenue: 21.5
      },
      {
        month: "Jul",
        city: "London",
        revenue: 25.2
      },
      {
        month: "Aug",
        city: "London",
        revenue: 26.5
      },
      {
        month: "Sep",
        city: "London",
        revenue: 23.3
      },
      {
        month: "Oct",
        city: "London",
        revenue: 18.3
      },
      {
        month: "Nov",
        city: "London",
        revenue: 13.9
      },
      {
        month: "Dec",
        city: "London",
        revenue: 9.6
      }
    ];
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    const { Html } = Guide;
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Legend />
          <Axis name="month" />
          <Axis
            name="revenue"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="month*revenue" size={2} color={"city"} />

          <Geom
            type="point"
            position="month*revenue"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />

          <Guide>
            {/* // use filter on release info for toggle functionality  */}
            {releaseInfo.map(({ platform, status, info, month }) => {
              return (
                <Html
                  position={{ month, revenue: 10 }}
                  html={data => {
                    return `<div class='releaseInfo'> ${platform} <br> ${status} <br> ${info}</div>`;
                  }}
                />
              );
            })}
          </Guide>
        </Chart>
      </div>
    );
  }
}

export default Series;
