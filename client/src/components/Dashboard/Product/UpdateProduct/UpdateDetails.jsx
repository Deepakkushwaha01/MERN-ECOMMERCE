import { IconButton } from '@mui/material';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { GetCategory } from '../../../Axios/AxiosRegister';
import { useSelector } from 'react-redux';

const UpdateDetails = ({form}) => {
    const {addData,newaddData}=form;


    const [cat,newcat]=useState();
    
    
    const id= useSelector(state=>state.user);
    const {exsitingUser}=id.user;
    
    const getCet=async()=>{
      const res = await GetCategory({sellerID:exsitingUser._id});
    
      if(res){
        newcat(res.data.allData)
      }
    }
    
      useEffect(()=>{
        getCet();
      },[])
    
    
      const set=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    
        if(name=='main'){
          
          newaddData({
            ...addData,
        [name]:!addData.main
          })
        }
        else if(name=='category'){
          if(value=='null'){
    
            newaddData({
              ...addData,
          [name]:null
            })
    
          }
          else{
    
            newaddData({
              ...addData,
          [name]:value
            })
          }
    
        }
    
        else{
    
          newaddData({
            ...addData,
        [name]:value
          })
    
        }
        
       
        }
    
    const set2=({index,e})=>{
    let value=e.target.value;
    let name=e.target.name;
    
    const updatebullet=[...addData.bullet];
    
    
      updatebullet[index]=value;
    
      newaddData({
        ...addData,
      bullet:[...updatebullet]
      })  
    
    }
    
    const bulletChange=(obj)=>{
    
      const {indicator,e}=obj;
    
    e.preventDefault();
    
    const updatebullet=[...addData.bullet];  
    
    if(indicator=='add'){
      updatebullet.push('');
      newaddData({
        ...addData,
      bullet:[...updatebullet]
      })
    }
    
    if(indicator=='remove'){
      
      if(updatebullet.length>1){
        updatebullet.pop();
        newaddData({
          ...addData,
        bullet:[...updatebullet]
        })
      }
    }
    }

    
  return (
    <Div className='bg-white h-auto rounded-3xl pt-[5vh]'>
    <div className='flex justify-center  '>
      <h1 className='text-black font-neo text-4xl'>Add Details</h1>
    </div>

  
    <div className='grid place-items-center  w-full h-full'>

<form className='w-[80%] my-[7vh]  h-auto flex flex-col gap-y-7'>


<div>
<select name='category' value={addData.category} onChange={set} className='border w-[10vw] min-w-[10rem] h-[2.5rem] flex'>
  <option value={'null'}>Select Category</option>
  {
    cat && cat.map((val,index)=>{
return <option key={index} value={val.category}>{val.category}</option>
    })
  }
</select>
</div>


<div>
<input type="checkbox" name="main" id="" value={addData.main} checked={addData.main}  onChange={set}  />
<label htmlFor="">Main Display</label>
</div>


<div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='name'
         value={addData.name}
        onChange={set}
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
          Name
        </label>
      </div>


      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='price'
          value={addData.price}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
          Price
        </label>
      </div>

      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='brand'
          value={addData.brand}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
          Brand
        </label>
      </div>


      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='model'
          value={addData.model}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
          Model Name
        </label>
      </div>


      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='network'
          value={addData.network}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
          Network Service Provider
        </label>
      </div>


      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='oprating'
          value={addData.oprating}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
        Operating System
        </label>
      </div>
      

      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='cellular'
          value={addData.cellular}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
       Cellular Technology
        </label>
      </div>


      <div className='flex flex-col gap-3'>
<h1 className='text-lg'>Bullet Points</h1>

<div className='w-full h-auto flex flex-col gap-3'>
{
  addData.bullet.map((val,index)=>{

return <div className='flex gap-1' key={index}>

<input type="text" name="input" id="" value={val} className=" w-full h-9  rounded-md border
lg:h-12 px-3 py-2
" onChange={(e)=>set2({index,e})} />



</div>
  })
}
</div> 

<div className='flex  gap-4'>
  <button onClick={(e)=>bulletChange({indicator:'add',e})}>Add New</button>
  <button className='' onClick={(e)=>bulletChange({indicator:'remove',e})}>Remove Last</button>
</div>
</div>

      
      <div className="relative border rounded-md ">
        <textarea
          rows={6}
          placeholder=" "
          name='discription'
          value={addData.discription}
         onChange={set}
        
          className=" w-full   rounded-md 
  px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
       Discription
        </label>
      </div>
      
      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='color'
          value={addData.color}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
      Color
        </label>
      </div>
     
      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='ram'
          value={addData.ram}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
     Ram
        </label>
      </div>


      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='storage'
          value={addData.storage}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
     Storage
        </label>
      </div>

     
    

      <div className="relative border rounded-md ">
        <input
          type="text"
          placeholder=" "
          name='stock'
          value={addData.stock}
         onChange={set}
        
          className=" w-full h-9  rounded-md 
  lg:h-12 px-3 py-2
  "
        />
        <label
          htmlFor=""
          className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s]  px-1 lg:top-3"
        >
     Stock
        </label>
      </div>

</form>



</div>


  </Div>
  )
}
const Div=styled.section`
  textarea, input {
    &:focus{
    
        outline: #FFAE00;
     
    }
    &:focus ~ label {
       
       
      top: -0.75rem;
      opacity: 1;
      color: black;
      padding: 0 0.5rem;
      background-color: white;
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.75rem;
      opacity: 1;
      padding: 0 0.5rem;
      background-color: white;
    }
  }
`
export default UpdateDetails
