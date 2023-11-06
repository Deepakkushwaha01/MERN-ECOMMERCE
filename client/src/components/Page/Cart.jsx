import React, { useEffect } from 'react'
import CartLoader from './Cart/CartLoader'
import CartData from './Cart/CartData'
import { useDispatch, useSelector } from 'react-redux';
import CartSkeleton from './Cart/CartSkeleton';
import axios from 'axios';
import { getCatData } from '../Redux/Slices/AddCartSlice';
import { viewPop } from '../Redux/Slices/HelperSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const data=useSelector(state=>state.addCart);
console.log(data)

const dispatch=useDispatch();

const navigate=useNavigate();

const getdata=async()=>{
  const res= await dispatch(getCatData());
  console.log(res)
 
  if(res.payload.data.success==false){
 
     dispatch(viewPop(res.payload.data));

   setTimeout(()=>{
      navigate('/login')
    },2000)


  }


}



useEffect(()=>{
  getdata()

},[])



  return (
    <div>
    {
      data==null ? <CartSkeleton/> : data.length==0 ? <CartLoader/> : <CartData val={data}/> 
        
      }
   
    
    </div>
  )
}

export default Cart

  