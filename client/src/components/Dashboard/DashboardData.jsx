import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getuserData } from '../Axios/AxiosRegister';
import styled from 'styled-components'


const DashboardData = () => {

  const id=useSelector(state=>state.user.user.exsitingUser._id);
const [data,setdata]=useState(null);


const getData= async()=>{
  const res=await getuserData(id);
  console.log(res)
if(res){
  setdata(res.data)
}
}


useEffect(()=>{
  getData();
},[id])


  return (
    <Div className='p-4 flex flex-col gap-[5vh] min-h-[80vh] h-auto'>
    <h1 className='text-3xl font-bold font-neo tracking-wide'>Dashboard</h1>
      <div className='w-full h-full'>
        {
          data && <div >


<div className='w-full sha1 p-[2rem] min-h-[4rem] h-auto bg-white rounded-xl grid md:grid-cols-2 grid-rows-auto gap-y-[3rem]'>
<h1 className='md:text-xl text-slate-500'><span className='font-neo text-[#2b6ffe]'>Name:</span> {data.userData.name.toUpperCase()}</h1>
  <h1 className='md:text-xl text-slate-500'><span className='font-neo text-[#2b6ffe]'>Email:</span> {data.userData.email.toUpperCase()}</h1>
  <h1 className='md:text-xl text-slate-500'><span className='font-neo text-[#2b6ffe]'>Phone:</span> {data.userData.phone}</h1>
  <h1 className='md:text-xl text-slate-500'><span className='font-neo text-[#2b6ffe]'>Account:</span> {data.userData.account_Type.toUpperCase()}</h1>
  <h1 className='md:text-xl text-slate-500'><span className='font-neo text-[#2b6ffe]'>SellerID:</span> {data.userData._id}</h1>
</div>

<div className='flex flex-col md:flex-row justify-between px-[4.5rem] gap-[5rem] my-[5rem]'>
<div className='bg-white flex flex-wrap flex-col p-3 justify-center items-center w-[10rem] h-[10rem] rounded-full sha1'>
<div className='font-neo'>Total Products</div>
<h1 className='text-4xl text-[#2b6ffe]'>{data.TotalProducts}</h1>
</div>


<div className='bg-white flex flex-wrap flex-col p-3 justify-center items-center w-[10rem] h-[10rem] rounded-full sha1'>
<div className='font-neo'>Total Category</div>
<h1 className='text-4xl text-[#2b6ffe]'>{data.TotalCategory}</h1>
</div>

</div>


          </div>
        }
      </div>
    </Div>
  )
}

const Div=styled.section`

.sha1{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`


export default DashboardData
