import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-indigo-50 bg-opacity-50 px-48 py-8 flex items-center justify-between">
            <h2 className='d font-bold text-2xl'>JobHunt</h2>
            <div>
                <Link className='font-semibold text-gray-500'>Statictics</Link>
                <Link className='font-semibold text-gray-500 mx-8'>Applied Jobs</Link>
                <Link className='font-semibold text-gray-500'>Blog</Link>
            </div>
            <button className='bg-indigo-400 text-white font-semibold px-5 py-3 rounded-lg'>
                Start Applying
            </button>
        </nav>
    )
}

export default Nav