import React, { useEffect } from 'react'
import icon1 from '../assets/Icons/Frame-1.png'
import icon2 from '../assets/Icons/Frame.png'
import icon3 from '../assets/Icons/Frame-2.png'
import icon4 from '../assets/Icons/Frame-3.png'
import icon5 from '../assets/Icons/Frame-4.png'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { addToDb } from '../utilities/fakedb'

function Details() {
    const data = useLoaderData()
    const jobId = useParams()

    const details = data.find(data => data.id === jobId.id)
    const { id, title, salary, location, description, responsibility, requirements, experiences, phone, email } = details;

    function handleAddDB(id) {
        addToDb(id)
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <div className='bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] pb-28 pt-12 text-center'>
                <h3 className='font-bold text-3xl'>Job Details</h3>
            </div>
            <div className='px-48 py-28 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <p><span className='font-bold'>Job Description:</span> <span className='text-gray-500 font-medium'> {description} </span></p>
                    <p className='my-6'><span className='font-bold'>Job Responsibility:</span> <span className='text-gray-500 font-medium'> {responsibility} </span></p>
                    <p className='font-bold'>Educational Requirement:</p>
                    <p className='text-gray-500 font-medium my-6'> {requirements} </p>
                    <p className='font-bold'>Experiences:</p>
                    <p className='text-gray-500 font-medium my-6'> {experiences} </p>
                </div>
                <div className='col-span-1'>
                    <div className='bg-gradient-to-r from-[#7e8ffe30] to-[#9873ff30] p-8 rounded-lg'>
                        <h1 className='font-bold'>Job Details</h1>
                        <hr className='border-t border-indigo-200 border-opacity-70 my-4'></hr>
                        <div className='flex'>
                            <img src={icon2} alt="" />
                            <p><span className='ps-2 font-medium'>Salary:</span><span className='text-gray-500'> {salary} (Per Month)</span></p>
                        </div>
                        <div className='flex mt-4 my-4'>
                            <img src={icon1} alt="" />
                            <p><span className='ps-2 font-medium'>Job Title:</span><span className='text-gray-500'> {title}</span></p>
                        </div>
                        <h1 className='font-bold pt-2'>Contact Information</h1>
                        <hr className='border-t border-indigo-200 border-opacity-80 my-4'></hr>
                        <div className='flex mt-4 my-4'>
                            <img src={icon3} alt="" />
                            <p><span className='ps-2 font-medium'>Phone:</span><span className='text-gray-500'> {phone}</span></p>
                        </div>
                        <div className='flex mt-4 my-4'>
                            <img src={icon4} alt="" />
                            <p><span className='ps-2 font-medium'>Email:</span><span className='text-gray-500'> {email}</span></p>
                        </div>
                        <div className='flex mt-4 my-4'>
                            <img src={icon5} alt="" />
                            <p><span className='ps-2 font-medium'>Address:</span><span className='text-gray-500'> {location}</span></p>
                        </div>
                    </div>
                    <Link to={'/appliedjobs'}>
                        <button className='bg-gradient-to-r from-[#7e8ffe] to-[#9873ff] text-white font-semibold px-5 py-3 rounded-lg w-full my-6' onClick={() => handleAddDB(id)}>Apply Now</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Details