import React, { useEffect, useState } from 'react'
import img from '../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import JobDetailsCard from './JobDetailsCard'

function Home() {
  const jobDetails = useLoaderData()
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    fetch("CategoryList.json")
      .then(res => res.json())
      .then(data => setCategoryList(data))
  }, [])
  return (
    <>
      <section className='bg-indigo-50 bg-opacity-50 ps-48 pe-28 pb-0  grid grid-cols-1 lg:grid-cols-2'>
        <div className='my-auto'>
          <h1 className='text-7xl font-bold'>One Step</h1>
          <h1 className='text-7xl font-bold my-3'>Closer To Your</h1>
          <h1 className='text-7xl font-bold text-indigo-400'>Dream Job</h1>
          <p className='text-gray-500 my-6'>Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. Manage all your job <br /> application from start to finish.</p>
          <button className='bg-indigo-400 text-white font-semibold px-5 py-3 rounded-lg'>Get Started</button>
        </div>
        <img src={img} className='h-full' alt="" />
      </section>
      <section className='px-48 py-28'>
        <div>
          <h1 className='text-5xl font-bold text-center'>Job Category List</h1>
          <p className='text-gray-500 my-6 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
              categoryList.map(category => (
                <CategoryCard key={category.id} category={category}></CategoryCard>
              ))
            }
          </div>
        </div>
      </section>
      <section className='px-48'>
        <div>
          <h1 className='text-5xl font-bold text-center'>Featured Job</h1>
          <div className='grid lg:grid-cols-2 gap-4'>
            {
              jobDetails.map(job => (
                <JobDetailsCard key={job.id} job={job}></JobDetailsCard>
              ))
            }
          </div>
        </div>
      </section>
      <div className='w-full flex justify-center'>
        <button className='bg-indigo-400 text-white mx-auto font-semibold px-5 py-3 rounded-lg'>See All Jobs</button>
      </div>
    </>
  )
}

export default Home