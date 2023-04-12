import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getShoppingCart } from '../utilities/fakedb'
import AppliedJobsCard from './AppliedJobsCard'

function AppliedJobs() {
    let data = useLoaderData()
    const appliedJobID = getShoppingCart()

    const [allJobs, setAllJobs] = useState([])
    const [onSite, setOnSite] = useState([])
    let newJobs = [...allJobs]

    useEffect(() => {
        fetch("/Jobdetails.json")
          .then(res => res.json())
          .then(data => setOnSite(data))
      }, [])

    useEffect(() => {
        for (const id in appliedJobID) {
            data.map(jobs => {
                if (id == jobs.id) {
                    newJobs.push(jobs)
                    setAllJobs(newJobs)
                }
            })
        }
    }, [data])

    function handleOnsite() {
        data = []
        for (const id in appliedJobID) {
            onSite.map(jobs => {
                if (id == jobs.id) {
                    if (jobs.type == 'Onsite') {
                        data.push(jobs)
                        console.log(data)
                    }
                }
            })
        }
    }

    return (
        <>
            <div className='bg-indigo-50 bg-opacity-50 pb-28 pt-12 text-center'>
                <h3 className='font-bold text-3xl'>Applied Jobs</h3>
            </div>
            <div className='px-48 py-28 grid grid-cols-1'>
                <div className='flex mb-6 ms-auto'>
                    <button className='border px-5 py-2 rounded-lg text-gray-500 font-bold me-4' onClick={handleOnsite}> Onsite </button>
                    <button className='border px-5 py-2 rounded-lg text-gray-500 font-bold'> Remote </button>
                </div>
                {
                    allJobs.map(jobs => (
                        <AppliedJobsCard key={jobs.id} jobs={jobs}></AppliedJobsCard>
                    ))
                }
            </div>
        </>
    )
}

export default AppliedJobs