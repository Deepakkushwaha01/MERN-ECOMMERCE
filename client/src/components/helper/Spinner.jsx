import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import { delete_User } from '../Redux/Slices/UserSlice';






const Spinner = () => {
    const [countDown,newCountDown]=useState(3);


  const navigate=useNavigate();
const dispatch=useDispatch();

  useEffect(()=>{

const interval=setInterval(()=>{
newCountDown((per)=>--per)
},1000)


if(countDown==0){
  clearInterval(interval) ;
dispatch(delete_User());
window.location.href='http://localhost:5173/login'
}


return ()=>{
    clearInterval(interval)
}

},[countDown])




  return (
   
      <Div className='h-screen w-full grid place-items-center'>

<div className='flex flex-col gap-[4vh] items-center'>

<div className=' rounded-full  w-32 h-32 animate-spin spinner'>

</div>

<h1 className='  text-[1.3rem] '>Redirecting To Home Page.....</h1>
<p className='text-5xl'>{countDown}</p>
</div>

  </Div>

  )
}
const Div=styled.section`
 
 .spinner{
  border-width: 4px;
border-top:4px solid red;
 }
 
 `
export default Spinner
