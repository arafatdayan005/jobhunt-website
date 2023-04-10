import React from 'react'
import img from '../assets/All Images/P3OLGJ1 copy 1.png'

function Home() {
  return (
    <>
      <section className='bg-indigo-50 ps-48 pe-28 py-8 pb-0 bg-opacity-50 grid grid-cols-1 lg:grid-cols-2 absolute'>
        <div className='my-auto'>
          <h1 className='text-6xl font-bold'>One Step</h1>
          <h1 className='text-6xl font-bold my-3'>Closer To Your</h1>
          <h1 className='text-6xl font-bold text-indigo-400'>Dream Job</h1>
          <p className='text-gray-500 my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='bg-indigo-400 text-white font-semibold px-5 py-3 rounded-lg'>Get Started</button>
        </div>
        <img src={img} className='mt-3 h-full' alt="" />
      </section>
    </>
  )
}

export default Home