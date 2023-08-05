import React, { useState } from 'react'
import icon1 from '../assets/Icons/Frame-4.png'
import icon2 from '../assets/Icons/Frame.png'
import { addToDb } from '../utilities/fakedb';
import Swal from 'sweetalert2'
import { TiTick } from "react-icons/ti";

function JobDetailsCard({ job }) {
  const { id, name, logo, title, timing, type, salary, location } = job;
  const [applied, setApplied] = useState(false)

  function handleAddDB(id) {
    addToDb(id)
    Swal.fire(
      'Applied!',
      'You successfully applied to this job!',
      'success'
    )
    setApplied(true)
  }

  return (
    <div className='border border-indigo-200 p-10 rounded-lg'>
      <img src={logo} className='h-12' alt="" />
      <p className='font-bold text-gray-600 pt-6 text-2xl'>{title}</p>
      <p className='text-gray-400 py-4 font-semibold text-xl'>{name}</p>
      <div className='flex'>
        <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold me-4'> {type} </button>
        <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold'> {timing} </button>
      </div>
      <div className='flex py-4'>
        <img src={icon1} className='pe-2' alt="" />
        <p className='text-gray-400 font-semibold text-xl'>{location}</p>
        <img src={icon2} className='ps-4 pe-2' alt="" />
        <p className='text-gray-400 font-semibold text-xl'>{salary}</p>
      </div>
      <button onClick={() => handleAddDB(id)} disabled={applied} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ms-auto font-semibold w-28 py-3 rounded-lg'> {applied ? <TiTick className='w-full text-2xl' /> : "Apply"} </button>
    </div>
  )
}

export default JobDetailsCard