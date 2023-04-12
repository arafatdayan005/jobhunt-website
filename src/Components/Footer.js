import React from 'react'
import icon from '../assets/Icons/Group 9969.png'

function Footer() {
  return (
    <div className='bg-black mt-8 px-48 py-28'>
      <div className='grid grid-cols-6 gap-8'>
        <div className='col-span-2 text-white'>
          <h3 className='mb-6 text-3xl font-semibold'>Job Hunt</h3>
          <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
          <img src={icon} className='mt-4' alt="" />
        </div>
        <div className='col-span-1 text-white'>
          <h3 className='mb-6 font-medium text-xl'>Company</h3>
          <p>About us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Career</p>
        </div>
        <div className='col-span-1 text-white'>
          <h3 className='mb-6 font-medium text-xl'>Product</h3>
          <p>Prototype</p>
          <p>Plan & Pricing</p>
          <p>Customer</p>
          <p>Integration</p>
        </div>
        <div className='col-span-1 text-white'>
          <h3 className='mb-6 font-medium text-xl'>Support</h3>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div className='col-span-1 text-white'>
          <h3 className='mb-6 font-medium text-xl'>Contact</h3>
          <p>524 Broadway, NYCk</p>
          <p>+880 11111111</p>
        </div>
      </div>
      <hr className='border-t border-gray-50 border-opacity-40 my-14'></hr>
      <div className='flex justify-between text-gray-500'>
        <p>@2023 JobHunt. All Rights Reserved</p>
        <p>Powered by JobHunt</p>
      </div>
    </div>
  )
}

export default Footer