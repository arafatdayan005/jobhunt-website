import React, { useEffect, useState } from 'react'
import img from '../assets/All Images/P3OLGJ1 copy 1.png'
import CategoryCard from './CategoryCard'
import JobDetailsCard from './JobDetailsCard'

function Home() {
  const [categoryList, setCategoryList] = useState([])
  const [jobList, setJobList] = useState([])
  const [filterCategory, setFilterCategory] = useState("")
  const [seeAll, setSeeAll] = useState(false)

  function seeAllCard() {
    setSeeAll(true)
  }

  useEffect(() => {
    fetch("CategoryList.json")
      .then(res => res.json())
      .then(data => setCategoryList(data))
  }, [])

  useEffect(() => {
    fetch("JobDetails.json")
      .then(res => res.json())
      .then(data => {
        if (filterCategory === "") {
          setJobList(data)
        }
        else {
          const filterJobs = data.filter(job => job.category === filterCategory)
          setJobList(filterJobs)
        }
      })
  }, [filterCategory])

  const handleCategory = (category) => {
    setFilterCategory(category)
  }
  return (
    <>
      <section className='bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] pb-0 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[75%] mx-auto space-x-16'>
          <div data-aos="fade-right" data-aos-duration="1000" className='my-auto'>
            <h1 className='text-7xl font-bold'>One Step</h1>
            <h1 className='text-7xl font-bold my-3'>Closer To Your</h1>
            <h1 className='text-7xl font-bold bg-gradient-to-r from-[#7e8ffe] to-[#9873ff] bg-clip-text text-transparent'>Dream Job</h1>
            <p className='text-gray-500 my-6'>Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. Manage all your job <br /> application from start to finish.</p>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold px-5 py-3 rounded-lg'>Get Started</button>
          </div>
          <img data-aos="fade-left" data-aos-duration="1000" src={img} className='h-full' alt="" />
        </div>

      </section>
      <section className='w-[75%] mx-auto my-28'>
        <div>
          <h1 data-aos="fade-up" className='text-5xl font-bold text-center'>Job Category List</h1>
          <p data-aos="fade-up" data-aos-duration="1000" className='text-gray-500 my-6 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 my-16 gap-8'>
            {
              categoryList.map(categories => (
                <CategoryCard key={categories.id} categories={categories} handleCategory={handleCategory}></CategoryCard>
              ))
            }
          </div>
        </div>
      </section>
      <section className='w-[75%] mx-auto'>
        <div>
          <h1 data-aos="fade-up" className='text-5xl font-bold text-center'>Featured Job</h1>
          <div className='grid lg:grid-cols-2 gap-4 my-8'>
            {
              jobList.slice(0, seeAll ? jobList.length : 6).map(job => (
                <JobDetailsCard key={job.id} job={job}></JobDetailsCard>
              ))
            }
          </div>
        </div>
      </section>
      <div className='w-full flex justify-center'>
        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mx-auto font-semibold px-5 py-3 rounded-lg' onClick={seeAllCard}>See All Jobs</button>
      </div>
    </>
  )
}

export default Home