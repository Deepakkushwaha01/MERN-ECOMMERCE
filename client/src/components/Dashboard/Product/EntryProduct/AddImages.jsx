import React, { useState } from 'react'
import styled from 'styled-components';

const AddImages = ({form}) => {

  const {addData,newaddData}=form


const setmain=(e)=>{
const arr=Array.from(e.target.files);
 
newaddData({
...addData,
files:[...addData.files,...arr]
})
}




const deleteIm=(deleteIndex)=>{
  console.log(deleteIndex)
const newarr=addData.files.filter((ele,index)=>{
  return index != deleteIndex;
  })

  newaddData({
    ...addData,
    files:newarr
  })
}

/* const saveImage=()=>{
  newaddData({
    ...addData,
    files:images
  })
} */


  return (
    <Div>
      <form action="">
        <div className='w-fit'>
          <label htmlFor="image" className='w-fit' >
       <div className='w-fit '>
        <figure className='w-[10rem] '>
          <img src="/image/upload.png" alt="" className='w-full h-full'/>
        </figure>
       </div>
          </label>
          <input type="file" name="" id="image" className='hidden w-fit' multiple onChange={setmain} />
        </div>
      </form>

<div className='w-full h-auto rounded-2xl bg-white flex flex-wrap p-5 gap-3'>
 
 {addData.files.length>0 ? 

<div className='w-full h-auto rounded-2xl bg-white flex flex-col gap-[4vh]  p-5 '>
<div className='flex flex-wrap gap-5'>
{addData.files.map((val,index)=>{
  return <div className='w-[10rem] p-1.5 border relative' key={index}>
    <img src={addData.files.length>0 ? URL.createObjectURL(val):""} alt="" className='w-full h-full'/>
    <div className='absolute group w-full h-[10%] grid place-items-center  bottom-0 left-0 duration-300 ease-in hover:h-[40%] custom'>
<h1 onClick={()=>deleteIm(index)} className='font-semibold cursor-pointer tracking-wide group-hover:bg-red-600 group-hover:p-1  group-hover:px-4 group-hover:text-white rounded-lg duration-[0.6s] ease-in-out '>Delete</h1>
    </div>
   
  </div>
})}
</div>

 </div>  

  
:
  <div className='w-full h-[30vh] grid place-items-center'>
<div className='border-2 border-dashed grid place-items-center border-black w-[98%] h-[95%] rounded-lg'>
<div>
  <h1 className='font-neo font-bold text-2xl'>Upload Images <span className='text-lg'>(Click on Icon)</span></h1>
</div>
</div>
  </div>
  
  }
</div>

    </Div>
  )
}

const Div=styled.section`
 .custom{
  background-color: rgb(255,255,255,0.5);
 } 
`

export default AddImages
