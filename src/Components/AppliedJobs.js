import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getShoppingCart } from '../utilities/fakedb'
import AppliedJobsCard from './AppliedJobsCard'

function AppliedJobs() {
    let data = useLoaderData()
    const appliedJobID = getShoppingCart()

    let [allJobs, setAllJobs] = useState([])
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
                if (id === jobs.id) {
                    newJobs.push(jobs)
                    setAllJobs(newJobs)
                }
                return newJobs;
            })
        }
    }, [data])
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    function handleOnsite() {
        data = []
        allJobs = []
        for (const id in appliedJobID) {
            onSite.map(jobs => {
                if (id === jobs.id) {
                    if (jobs.type === 'Onsite') {
                        data.push(jobs)
                    }
                }
            })
        }
        setAllJobs(data)
    }

    function handleRemote() {
        data = []
        allJobs = []
        for (const id in appliedJobID) {
            onSite.map(jobs => {
                if (id === jobs.id) {
                    if (jobs.type === 'Remote') {
                        data.push(jobs)

                    }
                }
            })
        }
        setAllJobs(data)
    }

    return (
        <>
            <div className='bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] pb-28 pt-12 text-center'>
                <h3 className='font-bold text-3xl'>Applied Jobs</h3>
            </div>
            <div className='px-48 py-28 grid grid-cols-1'>
                <div className='flex mb-6 ms-auto space-x-4'>
                    <button className='border border-indigo-200 px-5 py-2 rounded-lg text-gray-500 font-bold' onClick={handleOnsite}> Onsite </button>
                    <button className='border border-indigo-200 px-5 py-2 rounded-lg text-gray-500 font-bold' onClick={handleRemote}> Remote </button>
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