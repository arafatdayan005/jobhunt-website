import React from 'react'

function CategoryCard({ category }) {
    const {name, img, jobs} = category;
    return (
        <div className='bg-indigo-50 bg-opacity-50 p-10 rounded-lg text-center my-8'>
            <img src={img} className='bg-indigo-100 bg-opacity-70 rounded-lg p-2 mx-auto' alt="" />
            <p className='font-bold text-gray-600 pt-6'>{name}</p>
            <p className='text-gray-400 pt-2'>{jobs} Jobs Available</p>
        </div>  
    )
}

export default CategoryCard