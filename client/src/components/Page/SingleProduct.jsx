import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleProduct_Get } from '../Axios/AxiosRegister';
import { useDispatch, useSelector } from 'react-redux'
import { getSingle } from '../Redux/Slices/ProductSlice';
import ImageSection from './SingleProduct/ImageSection';
import DataSingle from './SingleProduct/DataSingle';
import SingleSkeleton from '../helper/SingleSkeleton';

const SingleProduct = () => {

const {id}=useParams();
const dispatch=useDispatch();

const singleData=useSelector(state=>state.product.SingleProduct);


const data=async()=>{
  const res=await SingleProduct_Get({id});
 
  if(res.data.success==true){
    dispatch(getSingle(res.data.exsit));
  }
}

useEffect(()=>{
  data();
},[id])


  return (
    <div>
  {singleData ?  <div className=' w-full h-auto  flex flex-col  md:grid  md:grid-cols-2'>
     
      <div className=' relative '>
        <div className=' w-full h-auto md:sticky top-0 left-[0%] '>
    {  singleData &&  <ImageSection val={singleData[0].images}/>}
        </div>

      </div>
{singleData && <DataSingle val={singleData} />}
      <div>

      </div> 
  
    </div>
    : <SingleSkeleton/>}
    
    </div>
  )
}

export default SingleProduct
