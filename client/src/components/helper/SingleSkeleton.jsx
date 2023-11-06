import React from 'react'

const SingleSkeleton = () => {
  return (
    <div className='w-full h-[90vh] border flex flex-col md:flex-row'>
      
      <div className='border w-full h-full p-3 py-[5vh] flex flex-col justify-between'>

<div className='w-full h-[4rem] border rounded-lg animate-pulse bg-sky-50'></div>

<div className='w-full h-[70%] border rounded-md animate-pulse bg-sky-50'></div>

      </div>
      
      <div className='w-full h-full py-[6vh] px-6'>
<div className='w-full h-full border animate-pulse bg-sky-50 rounded-3xl'>

</div>
      </div>
    </div>
  )
}

export default SingleSkeleton
