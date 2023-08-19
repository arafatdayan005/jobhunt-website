import React from 'react'

function CategoryCard({ categories, handleCategory }) {
    const {name, img, jobs, category} = categories;
    return (
        <div onClick={() => handleCategory(category)} className='bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] p-10 rounded-lg text-center hover:scale-110 duration-300 hover:cursor-pointer'>
            <img src={img} className='bg-gradient-to-r from-[#7e8ffe1a] to-[#9873ff1a] rounded-lg p-2 mx-auto' alt="" />
            <p className='font-bold text-lg text-gray-600 pt-6'>{name}</p>
            <p className='text-gray-400 pt-2'>{jobs} Jobs Available</p>
        </div>  
    )
}

export default CategoryCard