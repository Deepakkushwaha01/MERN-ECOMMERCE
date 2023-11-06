import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SubjectIcon from "@mui/icons-material/Subject";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { delete_User } from "../Redux/Slices/UserSlice";
import { hiddenNav } from "../Redux/Slices/HelperSlice";
import { CookieClear } from "../Axios/AxiosRegister";
import { delete_cart } from "../Redux/Slices/AddCartSlice";

const DropDown = () => {

  const userData=useSelector(state=>state.user);


  

  const array = [
    {
      val: "Order",
      name: "user",
    },
    {
      val: "Account",
      name: "user",
    },
    {
      val: "Seller Account",
      name: "seller",
    },
  ];

  const navigate=useNavigate()

  /* TO CREATE Visible to hide smooth transition is ke liye hame visibilty hidden and visibilty:visible ke sath opacity bhi laga do 0 se 100 to smooth tranisition ban jati hai  */

const dispatch=useDispatch();

const delUser=()=>{

  dispatch(delete_User());
  dispatch(delete_cart());
const res=CookieClear();

}


const navi=(val)=>{
if(val==='Seller Account'){
  navigate('/dashboard')
  dispatch(hiddenNav());
}
}

  return (
    <Div
      className=" opacity-0 z-40 invisible group-hover:visible translate-y-[-1rem] group-hover:translate-y-0  group-hover:opacity-100 transition-all duration-[0.7s] ease-in-out   absolute top-[150%] right-[-35vw] w-[80vw] max-w-[20rem]  h-auto rounded-2xl bg-white border
    md:w-[40vw]
    md:right-[-100%] lg:w-[20vw] lg:min-w-[20rem]
    "
    >
      <div className="grid-rows-2 divGrid">
        <div className="row-start-1 row-end-3  w-[5rem] grid place-items-center">
          <img src="/image/icon/user2.png" alt="" className="h-[70%] " />
        </div>

        <div className="w-full flex items-end p-1  text-xl">
          <h1>Hello,<span className="text-main">{userData.user==null||userData.user.success==false?'':userData.user.exsitingUser.name}</span></h1>
        </div>

        <ul className=" flex  gap-x-4">
          <li className={`flex gap-1 text-md items-center ${userData.user==null?'block':'hidden'}`}>
            <button onClick={()=>navigate('/login')} className="text-black text-start w-full duration-300 ease-in hover:text-[#FF7717]">
              Sign-In
            </button>

            <div className="">
              <ArrowForwardIosIcon
                sx={{ color: "#7F7F7F", fontSize: "0.8rem" }}
              />
            </div>
          </li>

          <li className={`flex gap-1 text-md items-center ${userData.user==null?'block':'hidden'}`}>
            <button onClick={()=>navigate('/register')} className="text-black text-start w-full duration-300 ease-in hover:text-[#FF7717]">Sign-Up</button>

            <div className="">
              <ArrowForwardIosIcon
                sx={{ color: "#7F7F7F", fontSize: "0.8rem" }}
              />
            </div>
          </li>

          <li className={`flex gap-1 text-md items-center ${userData.user==null?'hidden':'block'} `}>
            <button onClick={()=>delUser()} className="text-black text-start w-full duration-300 ease-in hover:text-[#FF7717]">log-out</button>

            <div className="">
              <PowerSettingsNewIcon
                sx={{ color: "#7F7F7F", fontSize: "1.3rem" }}
              />
            </div>
          </li>
        </ul>
      </div>

      <ul className="py-3">
        {array.map((value, index) => {
          return (
            <li key={index} onClick={()=>navi(value.val)} className={`flex gap-3 items-center  px-3 ${value.name=='seller'?userData.user&&userData.user.success==true&&userData.user.exsitingUser.account_Type=='seller'?"block":"hidden":""}  `}>
              {value.val == "Account" ? (
                <AccountCircleIcon />
              ) : value.val == "Order" ? (
                <SubjectIcon />
              ) : value.val == "Seller Account" ? (
                <DashboardIcon />
              ) : (
                ""
              )}
              <button className="text-black  text-xl py-3 text-start w-full">
                {value.val}
              </button>
              <div className="">
                {" "}
                <ArrowForwardIosIcon
                  sx={{ color: "#7F7F7F", fontSize: "1rem" }}
                />
              </div>
            </li>
          );
        })}
        <li className="w-full grid  pt-3 place-items-center">
          <button className="w-[80%] rounded-2xl py-2 text-xl bg-black text-white">
            Download Our App
          </button>
        </li>
      </ul>
    </Div>
  );
};

const Div = styled.section`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .divGrid {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
  }
`;

export default DropDown;
