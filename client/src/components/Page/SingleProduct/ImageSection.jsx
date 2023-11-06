import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const ImageSection = ({val}) => {


const [mainImage,newmainImage]=useState('');

useEffect(()=>{
  newmainImage(val[0].path)
},[val])


  return (
    <Div className='w-[100%] h-auto  md:h-[90vh] flex flex-col gap-[1vw] md:flex-row px-4 py-4  '>
      <div className=' order-2 md:order-1 w-full md:w-[10%]   flex md:flex-col items-center justify-center gap-[3vw] md:gap-[3vh] '>
{
  val.map((value,index)=>{
    return <div  onClick={()=>newmainImage(value.path)} key={index} className='w-[3.5rem] h-[3.5rem] md:w-[5rem] md:h-[5rem]  rounded-md bg-[#f8f8f8]'>
      <figure className=''>
    <img src={`${import.meta.env.VITE_BACKEND_URL}/${value.path}`} alt="" />
  </figure>
    </div>
  })
}
      </div>

<div className='order-1 md:order-2 w-full h-fit min-h-[20rem] md:h-full '>
<figure>
  <img src={`${import.meta.env.VITE_BACKEND_URL}/${mainImage}`} alt="" />
</figure>
</div>
    </Div>
  )
}
const Div=styled.section`

/*   display: grid;
  grid-template-columns: 0.15fr 1fr;

  @media only screen and (max-width: 768px){
    grid-template-columns:  1fr;
    grid-template-rows: 1fr 0.15fr;
  } */
`
export default ImageSection
