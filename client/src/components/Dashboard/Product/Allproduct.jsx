import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { GetProduct } from '../../Axios/AxiosRegister';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Allproduct = () => {

  const id=useSelector(state=>state.user);
const dispatch=useDispatch();

const {exsitingUser}=id.user;

const [Getpro,newGetpro]=useState(null);

const GetData=async()=>{
const res=await GetProduct({sellerID:exsitingUser._id});
console.log(res)
if(res.data.success==true){
  newGetpro(res.data.exsit)
}
}

useEffect(()=>{

  GetData();

},[id])

console.log(Getpro)
  return (
    <Div className={`w-full min-h-[30vh] ${Getpro==null?'h-1':'h-auto'} max-h-auto bg-white rounded-3xl py-4 px-2`}>


 
 <div className='w-full h-full  flex flex-col gap-4'>
  {
    Getpro==null ?
   <div className='w-full h-[100%] flex gap-4 border-2 rounded-3xl border-dashed justify-center items-center'>
      <div className=' rounded-full    w-12 h-12 animate-spin spinner'>

</div>
    <h1 className='font-neo tracking-widest text-[0.6rem] md:text-[1.1rem]'>Loading Products</h1> 
    </div>
    :
    Getpro.map((val,index)=>{
      return <div key={index} className='w-full gridView gap-x-3 h-auto overflow-hidden p-1.5 border-[3px] rounded-xl'>
<figure className='w-full h-[5rem] '>
  <img src={`${import.meta.env.VITE_BACKEND_URL}/${val.images[0].path}`} alt="" className='w-full h-full object-fill rounded-md' />
</figure>

<div className=''>
  <h1>{val.name}</h1>
</div>

<div className=' w-full h-full'>
<IconButton >
  <EditIcon/>
    </IconButton>
</div>
      </div>
    })
  }
 </div> 
    </Div>
  )
}
const Div=styled.section`
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

   .gridView{
    display: grid;
    grid-template-columns: 0.1fr 1fr 0.05fr;

   }

   .spinner{
  border-width: 4px;
border-top:4px solid #2B6FFE;
 }

 @media only screen and (max-width: 768px) {
  .gridView{
    
    grid-template-columns: 0.4fr 1fr 0.05fr;

   }
 }
`
export default Allproduct
