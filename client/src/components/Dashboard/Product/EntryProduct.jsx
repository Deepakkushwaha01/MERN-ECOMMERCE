import React, { useEffect, useState } from 'react'
import AddDetails from './EntryProduct/AddDetails';
import AddImages from './EntryProduct/AddImages';
import styled from 'styled-components';
import { Entry, EntryImage,  } from '../../Axios/AxiosRegister';
import { useSelector, useDispatch } from 'react-redux'
import { viewPop } from '../../Redux/Slices/HelperSlice';
import { GetData } from '../../Redux/Slices/AllProductSlice';

const EntryProduct = () => {
    const [route,newroute]=useState('details');


const [addData,newaddData]=useState({
    sellerID:'',
    files:[],
name:null,
  price:null,
  brand:null,
  model:null,
  network:null,
  oprating:null,
  cellular:null,
  discription:null,
  color:null,
  ram:null,
  storage:null,
  main:false,
  stock:null,
  bullet:['']
})
 

const id=useSelector(state=>state.user);
const {exsitingUser}=id.user;

useEffect(()=>{

exsitingUser && newaddData({
    ...addData,
    sellerID:exsitingUser._id
})
},[id])


const path=(name)=>{
if(name=='details'){
    
    newroute('details')
}else{
    newroute('images')
}
}


const dispatch=useDispatch();

const form=new FormData();


const finish=async()=>{


    addData.files.forEach((val,index)=>{
        form.append('image',val)
    })


    newaddData({
        ...addData,
        files:[],
    name:null,
      price:null,
      brand:null,
      model:null,
      network:null,
      oprating:null,
      cellular:null,
      discription:null,
      color:null,
      ram:null,
      storage:null,
      stock:null,
      category:null,
      bullet:['']
       })


const res=await Entry(addData);

console.log(res)

if(res){

    if(res.data.success==true){

       await form.append('P_id',res.data.productID);

       const resImage=await EntryImage(form);
       dispatch(viewPop(resImage.data));
      dispatch(GetData());

    }
    else if(res.data.success==false){
        dispatch(viewPop(res.data));
    }
}


}

console.log(addData)

  return (
    <Div className='flex flex-col gap-[8vh]'>
        <div className='flex   items-center'>
        <div className=' flex gap-8 rounded-lg'>
    <button onClick={()=>path('details')} className={` p-3 px-1   ${route=='details'?'after:w-full text-black after:bg-black':"after:w-0 text-[##97999a] after:bg-[#97999a]"} rounded-md hover:after:w-full`}>Add Details</button>
    <button onClick={()=>path('images')} className={` p-3 px-1   ${route=='images'?'after:w-full text-black after:bg-black':"after:w-0 text-[##97999a] after:bg-[#97999a]"} rounded-md hover:after:w-full`}>Add Images</button>
   </div>
        </div>
   
<div>
{
    route=='details'?<AddDetails form={{addData,newaddData}}/>:<AddImages form={{addData,newaddData}}/>
}
</div>
<div className='w-full flex justify-end'>
<button onClick={()=>finish()} className='bg-[#2B6FFE] p-2 text-white rounded-lg w-[50%] md:w-[15%]'>Finish</button>
</div>
    </Div>
  )
}

const Div=styled.section`
    button{
        position: relative;
        &::after{
            content: '';
            position: absolute;
        
            height: 7%;
        
            bottom: 0;
            left: 0;
            transition: all 1s ease-in-out;
        }
    }
`


export default EntryProduct
