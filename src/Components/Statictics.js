import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

function Statictics() {
  const resultArr = [
    {
      name: '1',
      uv: 57
    },
    {
      name: ' 2',
      uv: 57
    },
    {
      name: '3',
      uv: 60
    },
    {
      name: '4',
      uv: 53
    },
    {
      name: '5',
      uv: 51
    },
    {
      name: '6',
      uv: 57
    },
    {
      name: '7',
      uv: 60
    },
    {
      name: '8',
      uv: 60
    },
  ];
  return (
    <>
      <div className='bg-indigo-50 bg-opacity-50 pb-28 pt-12 text-center'>
        <h3 className='font-bold text-3xl'>Statictics</h3>
      </div>
      <div className='px-48 py-16 flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-xl mb-12'>My Assignment Marks</h1>
        <AreaChart
          width={1200}
          height={400}
          data={resultArr}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <p className='font-medium text-xl'>Avg: 56.88</p>
      </div>
    </>
  )
}

export default Statictics