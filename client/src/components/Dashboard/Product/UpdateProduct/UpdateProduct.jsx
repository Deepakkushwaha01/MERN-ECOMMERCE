import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EntryImage, UpdateImage, UpdateProductData, getUpdateSingle } from '../../../Axios/AxiosRegister';
import UpdateDetails from './UpdateDetails';
import UpdateImages from './UpdateImages';
import styled from 'styled-components';
import { GetData } from '../../../Redux/Slices/AllProductSlice';
import { viewPop } from '../../../Redux/Slices/HelperSlice';
import { useDispatch } from 'react-redux';

const UpdateProduct = () => {

const {id}=useParams();

const [data,setdata]=useState(null);

const get=async()=>{
const res=await getUpdateSingle(id);
if(res.data.success==true){
    setdata(res.data.data)
}
}

useEffect(()=>{
  id && get();
},[id])

/* ---------------------------------------------------------------------------------------------------------------------------- */

const[route,setroute]=useState('details');

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
category:null,
bullet:[''],
productID:""
})



useEffect(()=>{

  if(data){
   if(data.ram!=null && data.storage!=null)
  {
    newaddData({
    ...addData,
    sellerID:data.sellerID,
    files:data.images,
  name:data.name,
  price:data.price,
  brand:data.brand,
  model:data.model,
  network:data.network,
  oprating:data.oprating,
  cellular:data.cellular,
  discription:data.discription,
color:data.color.toString(),
ram:data.ram.toString(),
  storage:data.storage.toString(),
  main:data.main,
  stock:data.stock,
  category:data.category,
  bullet:data.bullet,
  productID:id
  })
}
else{
  newaddData({
    ...addData,
    sellerID:data.sellerID,
    files:data.images,
  name:data.name,
  price:data.price,
  brand:data.brand,
  model:data.model,
  network:data.network,
  oprating:data.oprating,
  cellular:data.cellular,
  discription:data.discription,
color:data.color.toString(),
ram:data.ram,
  storage:data.storage,
  main:data.main,
  stock:data.stock,
  category:data.category,
  bullet:data.bullet,
  productID:id
  })
}}
},[data])


console.log(addData)

const dispatch=useDispatch();

const form=new FormData();

const finish=async()=>{


  addData.files.forEach((val,index)=>{
    if(val.name){
      console.log(val.name)
      form.append('image',val)
    }
      
  })


/*   newaddData({
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
     }) */


const res=await UpdateProductData(addData);

console.log(res)

  if(res){

  if(res.data.success==true){

    await form.append('P_id',addData.productID);

     const resImage=await UpdateImage(form);
     console.log(resImage) 
  dispatch(viewPop(resImage.data));
    dispatch(GetData()); 

  }
  else if(res.data.success==false){
      dispatch(viewPop(res.data)); 
  }
}
 
}














  return (
    <Div className='min-h-[100vh] h-auto py-5 px-[2rem]  flex flex-col gap-[5rem]'>
    <div className='grid place-items-center'>
 

<div className='w-full md:w-[70%] lg:w-[50%] border h-[50vh] flex rounded-xl shadow-2xl'>

<div className='w-[50%] h-full'>
{
  !data?<div className='m-3 animate-pulse bg-slate-700'></div>:<img src={`${import.meta.env.VITE_BACKEND_URL}/${data.images[0].path}`} alt="" className='w-[100%] h-full' />
}

</div>

<div className='flex flex-col gap-3 p-3 py-5'>
    <div>
{data && <h1 className='font-bold text-2xl'>{`${data.name.slice(0,40)}...`}</h1>}
    </div>

<div>
    {data && <h1>&#8377;{`${data.price}`}/-</h1>}
</div>

<div>
    {data && <h1>{`${data.model}`}</h1>}
</div>

<div>
    {data && <h1>id: {`${data._id}`}</h1>}
</div>

</div>

</div>

    </div>


<div>
<div className=' flex gap-8 rounded-lg mb-[2rem]'>
    <button onClick={()=>setroute('details')} className={` p-3 px-1   ${route=='details'?'after:w-full text-black after:bg-black':"after:w-0 text-[##97999a] after:bg-[#97999a]"} rounded-md hover:after:w-full`}>Add Details</button>
    <button onClick={()=>setroute('images')} className={` p-3 px-1   ${route=='images'?'after:w-full text-black after:bg-black':"after:w-0 text-[##97999a] after:bg-[#97999a]"} rounded-md hover:after:w-full`}>Add Images</button>
   </div>

  <div>{
  route=='details'?<UpdateDetails form={{addData,newaddData}}/>:<UpdateImages form={{addData,newaddData}}/>
  }</div>

<div className='w-full flex justify-end'>
<button  onClick={()=>finish()} className='bg-[#2B6FFE] p-2 text-white rounded-lg w-[50%] md:w-[15%]'>Update</button>
</div>

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
export default UpdateProduct
