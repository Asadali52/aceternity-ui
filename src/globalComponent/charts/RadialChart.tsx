'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions

const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false 
});

const RadialBarChart = () => {
  // Define chart options with proper type
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    series: [85],
    labels: ['Progress'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        track: {
          background: '#FF392B',
          strokeWidth: '100%',
        },
        startAngle: 0,
        endAngle: 360,
      },
    },
  };

  return (
    <div className='flex flex-col items-center bg-white border py-3 w-full'>
      <h2 className='text-[20px]'>Vendor Product Status</h2>
      <div id="chart" className='drop-shadow-2xl'>
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={350} />
      </div>
      <div className='flex flex-col justify-start'>
        <p className='text-[#849AA9] text-[15px]'>
          <span className='mr-2 h-[8px] w-[8px] bg-[#0A96D4] rounded-full inline-block' />Approved Products
        </p>
        <p className='text-[#849AA9] text-[15px]'>
          <span className='mr-2 h-[8px] w-[8px] bg-[#FF392B] rounded-full inline-block' />Unapproved Products
        </p>
      </div>
    </div>
  );
};

export default RadialBarChart;
