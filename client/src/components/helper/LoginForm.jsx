import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { userDetail } from "../Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { viewPop } from "../Redux/Slices/HelperSlice";



const LoginForm = () => {

  const dispatch=useDispatch();

const [loginData,newloginData]=useState({
  email:"",
  password:""
})


const setvalue=(e)=>{
const name=e.target.name;
const value=e.target.value;
newloginData({...loginData,
[name]:value
})
}

const navigate=useNavigate();

const getuser=async()=>{

const res=await dispatch(userDetail(loginData));

newloginData({
  email:"",
  password:""
})
navigate('/')
dispatch(viewPop(res.payload.data));
}

  return (
    <div className="w-full h-screen grid place-items-center">
    <Div className=" w-[100%]  h-auto min-h-[30vh] md:w-[30%] px-4 py-7 rounded-md border bg-white">
      <div className="w-full grid place-items-center">
        <h1 className="text-xl">
          <span className="text-main font-bold tracking-wide text-2xl">Login</span>  
        </h1>
      </div>

      <form className="flex flex-col gap-y-5 justify-evenly  mt-7 h-full">
       
       

        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            name="email"
            value={loginData.email}
            onChange={setvalue}
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Email
          </label>
        </div>

       


        <div className="relative border rounded-md ">
          <input
            type="text"
            name="password"
            value={loginData.password}
            onChange={setvalue}
            placeholder=" "
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Password
          </label>
        </div>


       

        <div className="w-full  grid place-items-center">
          <input
            type="button"
            value="Sumbit"
            onClick={()=>getuser()}
            className="w-[40%] bg-main hover:scale-105 duration-200 ease-linear h-10 rounded-md text-white "
          />
        </div>
      </form>
    </Div>
    </div>
  );
};

const Div = styled.section`
 textarea, input {
    &:focus{
    
        outline: #FF7717;
    }
    &:focus ~ label {
       
       
      top: -0.75rem;
      opacity: 1;
      color: #FF7717;
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.75rem;
      opacity: 1;
      color: #FF7717;
    }
  }
`;

export default LoginForm;
