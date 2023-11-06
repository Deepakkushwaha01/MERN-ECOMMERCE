import React, { useState } from "react";
import styled from "styled-components";
import { registerUser } from "../Axios/AxiosRegister";

const Form = () => {

  const [RegisterData,newRegisterData]=useState({
    name:"",
    phone:"",
    account_Type:"user",
    email:"",
    password:"",
    cpassword:""
  })
  
  
  const setvalue=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  newRegisterData({...RegisterData,
  [name]:value
  })
  }
  
const sumbitfunc=()=>{

  registerUser(RegisterData)

}
console.log(RegisterData)
  return (
    <div className="w-full h-screen grid place-items-center">
    <Div className=" w-[100%] border  min-w-[2rem] max-w-[25rem] h-auto max-h-auto  px-4 py-7 rounded-md bg-white
    
    
    md:w-[30%] md:max-w-[40%]  md:min-w-[30rem]
    ">
      <div className="w-full grid place-items-center">
        <h1 className="text-xl">
          <span className="text-main font-bold tracking-wide text-2xl">Create <span className="text-[#D0D4CA]">Account</span></span>  
        </h1>
      </div>

      <form className="flex flex-col gap-y-5  mt-7 h-full">
       

      <div className="flex">
      
        <input type="radio" name="account_Type" value='user'  onChange={setvalue} checked={RegisterData.account_Type === 'user'} />
        <label htmlFor="user" className="ml-1">User</label> <br />
        <input type="radio" name="account_Type" value='seller'  className="ml-6"  onChange={setvalue} checked={RegisterData.account_Type === 'seller'} />
        <label htmlFor="seller" className="ml-1">Seller</label>
      
        
       </div>


        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            name="name"
            value={RegisterData.name}
            onChange={setvalue}
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Name
          </label>
        </div>

        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            name="phone"
            value={RegisterData.phone}
            onChange={setvalue}
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Phone No.
          </label>
        </div>

        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            name="email"
            value={RegisterData.email}
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
            placeholder=" "
            name="password"
            value={RegisterData.password}
            onChange={setvalue}
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


        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            name="cpassword"
            value={RegisterData.cpassword}
            onChange={setvalue}
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Confirm Password
          </label>
        </div>

       

        <div className="w-full  grid place-items-center">
          <input
            type="button"
            value="Sumbit"
            onClick={()=>sumbitfunc()}
            className="w-[40%] bg-main hover:scale-105 duration-300 ease-in-out transition-scale h-10 rounded-md text-white "
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
    
        outline: #FFAE00;
    }
    &:focus ~ label {
       
       
      top: -0.75rem;
      opacity: 1;
      color: #FFAE00;
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.75rem;
      opacity: 1;
      color: #FF7717;
    }
  }
`;

export default Form;
