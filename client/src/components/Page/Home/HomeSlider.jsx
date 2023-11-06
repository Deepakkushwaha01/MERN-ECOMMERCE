import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomeSlider = () => {

  const banner=[
    {
      name:"open",
      url:"/image/HomeBanner/1.webp",
      mob:'/image/HomeBanner/rough.jpg'
      
    },
    {name:"all",
      url:"/image/HomeBanner/2.webp",
      mob:'/image/HomeBanner/2_copy.webp'
    },
    {name:"all",
      url:"/image/HomeBanner/3.webp",
      mob:'/image/HomeBanner/3.webp'
    },
    
  ] 

  const [counter,newcounter]=useState(0);

  const moveleft=()=>{
    if(counter!=0){
      newcounter(per=>per+1)
    }
  }

  const moveright=()=>{
    const max=-banner.length;
    /* console.log(max) */
    if(counter>max+1){
      newcounter(per=>per-1)
    }
  }







/* ----------- For Style inline responsive ----------------------------- */
  
const isMobile = window.innerWidth <= 768;

  return (
    <Div className='w-full h-full grid place-items-center '>
     
      <div className='w-[100%] h-[70vh] md:h-[70vh] lg:h-[90vh] flex  relative overflow-hidden '>
<div style={{transform: `translateX(${counter * 100}vw)`,}} className={` duration-[1s]  ease-in-out absolute top-0 flex  w-auto h-full manage`}>
{
  banner && banner.map((val,index)=>{
    return <div  style={isMobile?{backgroundImage:`url(${val.mob})`}:{backgroundImage:`url(${val.url})`}} 
     className={`  duration-[1s] ease-in-out bg-left bg-cover md:bg-center md:bg-cover  w-[100vw] h-full manage`}>

{/* <div className={`${val.name=='open'?"block":"hidden"} w-full h-full`}>
    <div className=' w-full h-full'>
    <h1 className='text-[#c7c2c2] tracking-wide'>Open for Everthing</h1>
<h1 className='text-white text-4xl '>Oneplus Open</h1>
    </div>
   </div>

   <div className={`${val.name=='all'?"block":"hidden"}`}>
<div className=' w-full h-full'>
    <h1 className='text-[#fff] tracking-wide'>Open for Everthing</h1>
<h1 className='text-black text-4xl '># Celebration</h1>
    </div>
   </div> */}
    </div>
  })
}
</div>
<button onClick={()=>moveleft()} className='absolute top-[50%] left-[1vw] bg-white rounded-full'>
  <IconButton><ArrowBackIcon/></IconButton> 
  </button>


<button onClick={()=>moveright()} className='absolute top-[50%] right-[1vw] bg-white rounded-full'><IconButton><ArrowForwardIcon/></IconButton></button>
    
    <div className='absolute bottom-[2vh] left-[50%] translate-x-[-50%] gap-2 flex justify-between h-[0.2rem] '>


{
  banner && banner.map((val,index)=>{
    return <div className={`${Math.abs(counter)==index?"bg-white w-[15px]":"bg-[#bbbbbb] w-[5px]"    } duration-[0.5s] ease-in-out h-[5px] rounded-full  `}></div>
  })
}

    </div>
    
      </div>
      
    </Div>
  )
}
const Div=styled.section`
  .manage{
   /*  background-position: center;
    background-size: cover; */
  }
`
export default HomeSlider
