import React from 'react'
import icon1 from '../assets/Icons/Frame-4.png'
import icon2 from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

function JobDetailsCard({ job }) {
  const { id, name, logo, title, timing, type, salary, location } = job;
  return (
    <div className='border p-10 rounded-lg my-8'>
      <img src={logo} className='h-10' alt="" />
      <p className='font-bold text-gray-600 pt-6 text-2xl'>{title}</p>
      <p className='text-gray-400 py-4 font-semibold text-xl'>{name}</p>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold me-4'> {type} </button>
        <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold'> {timing} </button>
      </div>
      <div className='flex py-4'>
        <img src={icon1} className='pe-2' alt="" />
        <p className='text-gray-400 font-semibold text-xl'>{location}</p>
        <img src={icon2} className='ps-4 pe-2' alt="" />
        <p className='text-gray-400 font-semibold text-xl'>{salary}</p>
      </div>
      <Link to={`/details/${id}`}>
        <button className='bg-indigo-400 text-white mx-auto font-semibold px-5 py-3 rounded-lg'>View Details</button>
      </Link>
      
    </div>
  )
}

export default JobDetailsCard