import React, { useEffect } from 'react'
import Card from '../../helper/Card'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../../helper/Skeleton'
import { datafilter } from '../../Redux/Slices/ProductSlice'

const StoreData = ({val}) => {
  const allpro=useSelector(state=>state.allproduct);
  const data=useSelector(state=>state.product);


const dispatch=useDispatch();
  
useEffect(()=>{

 dispatch(datafilter({val,allpro}));

  
  },[val])

  useEffect(()=>{

   val && dispatch(datafilter({val,allpro}));
      
      
      },[])

  
  return (
    <div className='w-full h-auto '>
    {
data.loading==true || data.FilterProduct<=0 ?      <Skeleton/> 
:
<div className='w-full h-auto grid grid-cols-1 place-items-center gap-[4vw] p-[5vh]
md:grid-cols-2
lg:grid-cols-4
'>
{
  data.FilterProduct.map((val,index)=>{
    return <Card key={index} {...val} />
  })
} 
</div>
      } 
 
{/*    <Card/> */}
    </div>
  )
}

export default StoreData
