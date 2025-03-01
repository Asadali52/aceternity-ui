'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false 
});

const BarChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: 'Approved Products',
        data: [
          { x: 'Category A', y: 300 },
          { x: 'Category B', y: 400 },
          { x: 'Category C', y: 500 },
          { x: 'Category D', y: 1000 },
          { x: 'Category E', y: 800 },
          { x: 'Category F', y: 810 },
          { x: 'Category G', y: 535 },
          { x: 'Category H', y: 345 },
          { x: 'Category I', y: 870 },
          { x: 'Category J', y: 980 },
          { x: 'Category K', y: 800 },
          { x: 'Category L', y: 555 },
        ]
      },
      {
        name: 'Unapproved Products',
        data: [
          { x: 'Category A', y: 200 },
          { x: 'Category B', y: 300 },
          { x: 'Category C', y: 330 },
          { x: 'Category D', y: 1000 },
          { x: 'Category E', y: 700 },
          { x: 'Category F', y: 610 },
          { x: 'Category G', y: 535 },
          { x: 'Category H', y: 345 },
          { x: 'Category I', y: 670 },
          { x: 'Category J', y: 980 },
          { x: 'Category K', y: 700 },
          { x: 'Category L', y: 555 },
        ]
      }
    ],
    colors: ['#007bff', '#FF0000'],
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        borderRadius: 6,
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'jan', 'feb', 'march', 'april', 
        'may', 'june', 'july', 'Aug', 
        'Sep', 'Oct', 'Nov', 'Dec'
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#8E95A9',
          fontSize: '14px',
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value: any) => `${value}`,
        style: {
          colors: '#8E95A9',
          fontSize: '14px',
        },
        offsetX: 0,
      },
      min: 0,
      max: 2000,
      tickAmount: 4,
    },
    legend: {
      show: false,
    }
  };

  return (
    <div className='p-4 bg-white w-full'>
      <div className='flex justify-between px-4'>
        <h2 className='text-[20px] font-[500]'>Vendor Status</h2>
        <div className='flex gap-10'>
          <p className='text-[#1C2A53] text-[15px]'>
            <span className='mr-2 h-[18px] w-[18px] bg-[#0A96D4] relative top-1 rounded-full inline-block' />
            Approved Products
          </p>
          <p className='text-[#1C2A53] text-[15px]'>
            <span className='mr-2 h-[18px] w-[18px] bg-[#FF392B] relative top-1 rounded-full inline-block' />
            Unapproved Products
          </p>
        </div>
        <span></span>
      </div>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={282} />
      </div>
    </div>
  );
};

export default BarChart;
