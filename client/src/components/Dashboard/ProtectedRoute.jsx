import React, { useEffect, useState } from 'react'
import { SellerCheck } from '../Axios/AxiosRegister';
import Dashboard from './Dashboard';
import styled from 'styled-components';
import Spinner from '../helper/Spinner';
import {Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { hiddenNav } from '../Redux/Slices/HelperSlice';
import Loader from '../helper/Loader';


const ProtectedRoute = () => {
    const [state,newstate]=useState(null);

    const dispatch=useDispatch();

const callData=async()=>{
  const call=await SellerCheck();

  if(call.data.success==true){
    newstate(true)
  }
  if(call.data.success==false){
    newstate(false);
  
    
  }
}




useEffect(()=>{
callData();

dispatch(hiddenNav());
},[])



  return (
    <Div>
 {
  state==true?<Outlet/>
  :
  state==false?<Spinner/>:<Loader/>
} 


    </Div>
  )
}

const Div=styled.section`
 
 
`
export default ProtectedRoute
