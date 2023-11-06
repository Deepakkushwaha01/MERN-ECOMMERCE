import React, { useEffect, useRef, useState } from 'react'
import { viewNav } from './Redux/Slices/HelperSlice';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from './helper/PopUp';
import styled from 'styled-components';
import HomeSlider from './Page/Home/HomeSlider';
import Card from './helper/Card';
import { changeSelect } from './Redux/Slices/ProductSlice';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(viewNav());
  },[])


const data=useSelector(state=>state.allproduct);

const navigate=useNavigate();
const sett=(val)=>{
  dispatch(changeSelect(val));
navigate('/store')
}

  return (
    <Div className=' h-auto  flex flex-col gap-[20vh]'>
<div>
<div className='w-full h-auto '>
  <HomeSlider/>
</div>


</div>

      <div className='px-[2rem]'>
        <div className='flex gap-[2vw] items-center'><h1 className='text-3xl font-neo'>Mobile</h1> 
        <button onClick={()=>sett('mobile')} className='bg-black px-4 text-white text-sm py-3 rounded-xl'>Show More</button></div>
  <div className='flex flex-wrap gap-[3rem] justify-center md:justify-start md:px-[4rem]  w-full mt-[5vh]'>
    {
      data.filter((val)=>{ return val.main==true && val.category=='mobile'}).map((val,index)=>{
        return <Card {...val}/>
      })
    }
  </div>
  </div>



 {/*  <div className='bg-[#fffeeb] p-4 '>
  <div className='w-full h-full flex flex-col gap-[2rem] md:flex-row px-[1rem] md:px-[4rem]'>
    <figure className='w-[100%]  md:w-[60%] overflow-hidden'>
      <img src="/image/homeAdd.webp" alt="" className='w-full h-full hover:scale-[1.1] duration-[1s] ease-in-out' />
    </figure>
    <div className='w-[100%] md:w-[40%] flex flex-col  justify-between'>
<div>
<h1 className='text-black'></h1>
<h1 className='text-4xl text-black'>OnePlus Nord CE 3 Lite 5G</h1>
</div>

<div>
<p className=' text-black text-2xl'>From ₹18 499*</p>
<button className='text-white bg-black py-3 px-6 rounded-lg mt-6'>Buy Now</button>
</div>
    </div>
  </div>
</div> */}

<div className='w-full h-auto'>
  <video muted autoPlay loop src='/image/HomeBanner/v1.mp4' className='w-full  object-fill'>

  </video>
</div>


  <div className='px-[2rem]'>
        <div className='flex gap-[2vw]  items-center'><h1 className='text-3xl font-neo'>Tablets</h1> 
        <button onClick={()=>sett('tablet')} className='bg-black px-4 text-white text-sm py-3 rounded-xl'>Show More</button></div>
  <div className='flex flex-wrap gap-[3rem] justify-center md:justify-start md:px-[4rem]  w-full mt-[5vh]'>
    {
      data.filter((val)=>{ return val.main==true && val.category=='tablet'}).map((val,index)=>{
        return <Card {...val}/>
      })
    }
  </div>
  </div>



  <div className='bg-black md:p-4 py-[4rem] h-auto '>
  <div className='w-full h-full flex flex-col gap-[2rem] md:flex-row px-[1rem] md:px-[4rem]'>
    <div className='w-[100%] md:w-[40%] flex flex-col  justify-between'>
<div>
<h1 className='text-white'>Ready Before You Were</h1>
<h1 className='text-4xl text-white'>Built for 5G</h1>
</div>

<div>
<p className=' text-white'>#OnePlus5GExperience</p>
</div>
    </div>

    <figure className='w-[100%]  md:w-[60%] overflow-hidden'>
      <img src="/image/5g.webp" alt="" className='w-full h-full hover:scale-[1.1] duration-[1s] ease-in-out'/>
    </figure>

  </div>
</div>



  <div className='px-[2rem]'>
        <div className='flex gap-[2vw] items-center'><h1 className='text-3xl font-neo'>Audio</h1> 
        <button onClick={()=>sett('audio')} className='bg-black px-4 text-white text-sm py-3 rounded-xl'>Show More</button></div>
  <div className='flex flex-wrap gap-[3rem] justify-center md:justify-start md:px-[4rem]  w-full mt-[5vh]'>
    {
      data.filter((val)=>{ return val.main==true && val.category=='audio'}).map((val,index)=>{
        return <Card {...val}/>
      })
    }
  </div>
  </div>


<div className='bg-black p-4 '>
  <div className='w-full h-full flex flex-col gap-[2rem] md:flex-row px-[1rem] md:px-[4rem]'>
    <figure className='w-[100%]  md:w-[60%] overflow-hidden'>
      <img src="/image/key.webp" alt="" className='w-full h-full hover:scale-[1.1] duration-[1s] ease-in-out' />
    </figure>
    <div className='w-[100%] md:w-[40%] flex flex-col  justify-between'>
<div>
<h1 className='text-white'>Rewrite the Rules</h1>
<h1 className='text-4xl text-white'>Keyboard 81 Pro</h1>
</div>

<div>
<p className=' text-white'>Power by OnePlus Design | Co-Created Switches | The First Bouncy but Durable Keycap</p>
</div>
    </div>
  </div>
</div>




  <div className='px-[2rem]'>
        <div className='flex gap-[2vw] items-center'><h1 className='text-3xl font-neo'>TV & Display</h1> 
        <button onClick={()=>sett('tv & display')} className='bg-black px-4 text-white text-sm py-3 rounded-xl'>Show More</button></div>
  <div className='flex flex-wrap gap-[3rem] justify-center md:justify-start md:px-[4rem]  w-full mt-[5vh]'>
    {
      data.filter((val)=>{ return val.main==true && val.category=='tv & display'}).map((val,index)=>{
        return <Card {...val}/>
      })
    }
  </div>
  </div>


  <div className='bg-black p-4 '>
  <div className='w-full h-full flex flex-col gap-[2rem] md:flex-row px-[1rem] md:px-[4rem]'>
    <div className='w-[100%] md:w-[40%] flex flex-col  justify-between'>
<div>
<h1 className='text-white'>Rewrite the Rules</h1>
<h1 className='text-4xl text-white'>One community, limitless passion</h1>
</div>

<div>
<p className=' text-white'>United by one common belief - 'Great happens when we're all wired together'.</p>
</div>
    </div>

    <figure className='w-[100%]  md:w-[60%] overflow-hidden'>
      <img src="/image/RCC.webp" alt="" className='w-full h-full hover:scale-[1.1] duration-[1s] ease-in-out'/>
    </figure>

  </div>
</div>


    </Div>
  )
}
const Div=styled.section`
  
.manage{
  background-position: center;
  background-size: cover;
}  
`
export default Home
