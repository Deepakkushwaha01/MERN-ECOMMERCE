import { Divider, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteCartItem, UpdateCartQuat } from '../../Axios/AxiosRegister';
import { getCatData } from '../../Redux/Slices/AddCartSlice';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';



const CartData = ({val}) => {
console.log(val)

const dispatch=useDispatch();
const navigate=useNavigate();


const deleteItem=async(id)=>{
const res=await DeleteCartItem(id);
console.log(res)
if(res.data.success==true){
    const res= await dispatch(getCatData());
}
}





const updateQuat=async({id,operator,currentvalue,stock})=>{

const res=await UpdateCartQuat({id,operator,currentvalue,stock});
console.log(res)
if(res.data.success==true){
    const res= await dispatch(getCatData());
}
}




  return (
    <Div className='w-full min-h-screen h-auto'>
      
<div className='w-full flex justify-center'>
    <h1 className='text-3xl font-neo my-12'>Your Cart</h1>
</div>

<div className='flex flex-col md:flex-row w-full h-full px-[1rem] md:px-[4rem] '>

    <div className=' w-full h-full md:p-4 flex flex-col gap-[2vh]'>
{
   val && val.map((item,index)=>{
return <div key={index}  className='flex shad w-full min-h-[6rem] h-auto gap-1 md:gap-8   border px-3 py-3 rounded-xl'>

<NavLink to={`/single/${item.selectedItem._id}`} onClick={()=>dispatch(clearSingle())}  target="_blank">
<div /* onClick={()=>{navigate(`/single/${item.selectedItem._id}`),dispatch(clearSingle())}} */ className='w-fit flex justify-center'>
    <img src={`${import.meta.env.VITE_BACKEND_URL}/${item.selectedItem.images[0].path}`} alt="" className='w-full max-w-[10rem]  md:min-w-[5rem] h-full' />
</div></NavLink>

<div className='w-full h-full flex gap-8 flex-col md:flex-row '>
   
   <div className='w-full md:w-[50%]  h-full flex flex-col items-center md:items-start gap-2'>  
    
     <h1>{item.selectedItem.model.substring(0,15 )}</h1>
    
    <div className='flex flex-col md:flex-row gap-4 w-full  justify-center md:justify-start  items-center '>
    <div style={{backgroundColor:item.selectedColor}} className={`rounded-full border-2  w-[1.2rem] h-[1.2rem] `}>
  
    </div>
    { item.selectedRam && item.selectedStorage && <div className='flex'>
       {/*  <span>(</span> */}
        <h1>({item.selectedRam} ram  +  {item.selectedStorage} GB)</h1>
        {/* <span>)</span> */}
    </div>}
    </div>
 
    </div>
    
<div>

<div className='flex w-full items-center h-full  justify-center'>
    <div className='flex w-fit h-fit '>
    <div onClick={()=>updateQuat({id:item._id,operator:"minus",currentvalue:item.selectedQunatity ,stock:item.selectedItem.stock})} className='border w-fit grid place-items-center rounded-l-lg h-fit'>
<IconButton>
<RemoveIcon/>
</IconButton>
    </div>
    <input type="text" name="" id="" value={item.selectedQunatity} disabled className='w-[2rem] min-h-[2rem] max-h-full  text-center border'/>

    <div onClick={()=>updateQuat({id:item._id,operator:"plus",currentvalue:item.selectedQunatity ,stock:item.selectedItem.stock})} className='border w-fit rounded-r-lg h-fit'>
    <IconButton>
<AddIcon/>
</IconButton>
</div>
</div>
</div>

</div>
   
</div>


<div onClick={()=>deleteItem(item._id)} className='h-full flex   items-center'>
    <IconButton>
 <DeleteIcon/>
    </IconButton>
</div>

</div>
    })
}
    </div>

    
    <div className='w-full min-h-[2rem] max-h-full   flex  justify-center relative'>
    
    <div className='w-[100%] md:w-[70%] h-fit border flex flex-col gap-[1.5rem] my-4 sticky top-[2%] bg-[#f8f9fa] p-4 rounded-3xl'>

<h1 className='text-4xl font-neo w-full text-center mb-4'>Total</h1>

<div className='flex w-full'>
    <h2 className='text-2xl font-neo w-full'>Total Quantity:</h2>
    <div className='text-2xl w-full flex justify-end'>
        {
           val && val.reduce((total,item,index)=>{
                return total+item.selectedQunatity
            },0)
        } Items
    </div>
</div>



<div className='w-full flex'>
    <h2 className='text-2xl font-neo w-[70%] '>Total Price:</h2>
    <div  className='text-2xl w-full flex justify-end '>
    <span className="text-red-500">&#8377;</span>{
         val && val.reduce((total,item,index)=>{
            return total+item.selectedQunatity*parseInt(item.selectedItem.price)
        },0)   
        }/-
    </div>
</div>

<Divider/>

<div className='grid place-items-center'>
<button className='w-[80%] text-center bg-sky-500 text-white h-[3rem] rounded-2xl'>CheckOut Now</button>
</div>
    </div>
    
    
    </div>
</div>

    </Div>
  )
}

const Div=styled.section`
   .shad{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   } 
`

export default CartData
