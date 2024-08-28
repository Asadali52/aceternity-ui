'use client'
import React from "react";
import Chart from "react-apexcharts";

const SingleLineChart = () => {
  const data = [85, 100, 40, 18, 99, 70];
  const revenues = [7825, 9000, 6750, 8200, 7400, 5600]; 
  const categories = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
  ];
  const headings = [
    "Monthly Revenue",
    "Orders",
    "Visitors",
    "Vendors",
    "Admin",
    "Team"
  ];

  const colors = ["#026AFF", "#FF392B", "#279F51", "#FFA000", "#1A9DD6", "#7655ED"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((value, index) => (
        <div key={index} className="bg-white authlayout-shadow rounded grid grid-cols-2 px-6">
          <div className="my-auto">
            <h1 className="text-[#8E95A9] text-[15px] font-[600]">{headings[index]}</h1>
            <h3 className="text-[24px] font-[600] leading-[24px] text-[#1C2A53]">${revenues[index].toLocaleString()}</h3>
          </div>
          <div className="my-auto">
            <h4 className="text-center text-[20px] relative top-8 font-[700] leading-[24px]" style={{ color: colors[index] }}>
              {`${value}%`}
            </h4>
            <Chart
              options={{
                chart: {
                  height: 150,
                  type: "line",
                  toolbar: {
                    show: false
                  }
                },
                stroke: {
                  width: 7,
                  curve: "smooth",
                  colors: [colors[index]]
                },
                xaxis: {
                  categories: ["Start", categories[index]], 
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  }
                },
                yaxis: {
                  labels: {
                    show: false
                  },
                  axisBorder: {
                    show: false
                  },
                  min: 0,
                  max: Math.max(...data) + 10
                },
                grid: {
                  show: false
                },
                markers: {
                  size: 4,
                  colors: [colors[index]],
                  strokeColors: "#fff",
                  strokeWidth: 2,
                  hover: {
                    size: 7
                  }
                }
              }}
              series={[
                {
                  name: `Point ${index + 1}`,
                  data: [0, value]
                }
              ]}
              type="line"
              height={150}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleLineChart;
