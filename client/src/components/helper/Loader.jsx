import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Div className='h-screen w-full grid place-items-center'>
<div className='flex flex-col gap-16'>
      <div className='w-[10rem] animate-spin grid place-items-center relative h-[10rem] spinner rounded-full'>

      </div>
<h1>Loading.....................</h1>
</div>
    </Div>
  )
}

const Div=styled.section`
 
 .spinner{
  border-width: 4px;
  border-color: red;
border-top:4px solid transparent;
 }
 
 `


export default Loader
