import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] px-48 py-8 flex flex-wrap items-center justify-between">
            <h2 className='bg-gradient-to-r from-[#7e8ffe] to-[#9873ff] bg-clip-text text-transparent font-bold text-2xl'>JobHuntBD</h2>
            <div className='flex flex-wrap space-x-6'>
                <Link to={'/home'} className='font-semibold text-gray-500 hover:text-indigo-600'>Home</Link>
                <Link to={'/appliedjobs'} className='font-semibold text-gray-500 hover:text-indigo-600'>Applied Jobs</Link>
                <Link to={'/blog'} className='font-semibold text-gray-500 hover:text-indigo-600'>Blog</Link>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold px-5 py-3 rounded-lg'>
                Start Applying
            </button>
        </nav>
    )
}

export default Nav