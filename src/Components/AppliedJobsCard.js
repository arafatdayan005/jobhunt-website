import React from 'react'
import icon1 from '../assets/Icons/Frame-4.png'
import icon2 from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

function AppliedJobsCard({ jobs }) {
    const { id, name, logo, title, timing, type, salary, location } = jobs;
    return (
        <>
            <div className='border border-indigo-200 rounded-lg p-8 flex mb-8'>
                <div className='bg-indigo-50 bg-opacity-50 w-[25%] rounded-lg flex items-center justify-center px-12'>
                    <img src={logo} className='h-16' alt="" />
                </div>
                <div className='flex justify-between items-center w-full px-6'>
                    <div>
                        <p className='font-bold text-gray-600 pt-6 text-2xl'>{title}</p>
                        <p className='text-gray-400 py-4 font-semibold text-xl'>{name}</p>
                        <div className='grid grid-cols-1 md:grid-cols-4'>
                            <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold me-4'> {type} </button>
                            <button className='border border-indigo-400 px-5 py-2 rounded-lg text-indigo-400 font-bold'> {timing} </button>
                        </div>
                        <div className='flex py-4'>
                            <img src={icon1} className='pe-2' alt="" />
                            <p className='text-gray-400 font-semibold text-lg'>{location}</p>
                            <img src={icon2} className='ps-4 pe-2' alt="" />
                            <p className='text-gray-400 font-semibold text-lg'>{salary}</p>
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mx-auto font-semibold px-5 py-3 rounded-lg'>View Details</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AppliedJobsCard