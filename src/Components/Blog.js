import React from 'react'

function Blog() {
  return (
    <>
      <div className='bg-indigo-50 bg-opacity-50 pb-28 pt-12 text-center'>
        <h3 className='font-bold text-3xl'>Blog</h3>
      </div>
      <div className='px-48 py-16'>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">1. When should you use Context API?</h3>
          <p className='py-4 text-lg'>
            Ans: Context API allows react to share data between components without props drilling. To reduce the overuse of data sharing from every component Context API is used. If the dataflow of an application is complex and hard to maintain, Context API can be a better way to use.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">2. What is custom hook in react?</h3>
          <p className='py-4 text-lg'>
            Ans: Custom hooks allow react to extract common code from multiple components and reduce it in a single function, which can be used in any component that needs. It makes the code less repeated and components more reusable and maintainable.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">3. What is useRef in react?</h3>
          <p className='py-4 text-lg'>
            Ans: useRef() can be used to store and retrieve other mutable values inside a component without reloading the browser DOM. Also, it provides a way to create a mutable reference that shares across re-renders of a component.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">4. What is useMemo in react?</h3>
          <p className='py-4 text-lg'>
            Ans: useMemo() is used to optimize performance by reducing the number of times a component has to re-compute a value. If the code has a complex or expensive calculations that depends on some props or state values, useMemo() can avoid re-computing it on every render.
          </p>
        </div>
      </div>
    </>
  )
}

export default Blog