import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getShoppingCart } from '../utilities/fakedb'
import AppliedJobsCard from './AppliedJobsCard'

function AppliedJobs() {
    const allJobs = [];

    const data = useLoaderData()
    const appliedJobID = getShoppingCart()

    for(const id in appliedJobID){
        data.map(jobs => {
            if(id == jobs.id){
                allJobs.push(jobs)
            // <AppliedJobsCard key={jobs.id} jobs={jobs}></AppliedJobsCard>
        }
        })
    }

    return (
        <>
            <div className='bg-indigo-50 bg-opacity-50 pb-28 pt-12 text-center'>
                <h3 className='font-bold text-3xl'>Applied Jobs</h3>
            </div>
            <div className='px-48 py-28 grid grid-cols-1'>
                {
                    allJobs.map(jobs=> (
                        <AppliedJobsCard key={jobs.id} jobs={jobs}></AppliedJobsCard>
                    ))
                }
            </div>
        </>
    )
}

export default AppliedJobs