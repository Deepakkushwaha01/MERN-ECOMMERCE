import React, { useEffect, useState } from 'react'
import { GetAllCategory } from '../Axios/AxiosRegister'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { loadCatData } from '../Redux/Slices/ProductSlice';
import StoreData from './Store/StoreData';
import { ScrollRestoration } from 'react-router-dom';

const Store = () => {

const CatData=useSelector(state=>state.product)

const photo=[
  {
    name:"All",
    url:"/Product/Category/1 (1).svg"
  },
  {
    name:"mobile",
    url:"/Product/Category/1 (6).svg"
  },
  {
    name:"tablet",
    url:"/Product/Category/1 (7).svg"
  },
  {
    name:"tv & display",
    url:"/Product/Category/1 (8).svg"
  },
  {
    name:"audio",
    url:"/Product/Category/1 (2).svg"
  },
  {
    name:"wearables",
    url:"/Product/Category/1 (9).svg"
  },
  {
    name:"case & protection",
    url:"/Product/Category/1 (4).svg"
  },
  {
    name:"power & cables",
    url:"/Product/Category/1 (3).svg"
  },
  {
    name:"gears",
    url:"/Product/Category/1 (5).svg"
  },
  
  
]


const dispatch=useDispatch();

  useEffect(()=>{

    const getCat=async()=>{
const res=await GetAllCategory();

if(res.data.success==true){
dispatch(loadCatData(res.data.allData));
}

}

getCat();
  },[])


  const [datacat,newdatacat]=useState(null);

  useEffect(()=>{
newdatacat(CatData.Category);
},[CatData.Category])


const [select,newselect]=useState('All');

useEffect(()=>{
  newselect(CatData.selectCat)
},[])

  return (
    <Div className='min-h-[100vh] h-auto w-full'>

{/* ------------------------------------------------ Cat Bar -------------------------------------------------------------- */}
      <div className=' flex gap-4 md:gap-0 w-auto overflow-scroll lg:overflow-hidden  h-[20vh] px-[1rem] md:px-[4rem]'>

      <div onClick={()=>newselect('All')} className={`flex flex-col items-center  ${select=='All'?'after:w-[100%]':"after:w-[0%]"} justify-center gap-3 min-w-[7rem] w-[10rem] hover:after:w-[100%] under`}>
      <div>
         <img src={photo[0].url} className='' />
      </div>
<h1 className='capitalize'>All</h1>
    </div> 

{
  datacat  && datacat.map((val,index)=>{

const setphoto=photo.find((item)=>item.name==val.category);

    return <div onClick={()=>newselect(val.category)} key={index} className={`flex flex-col items-center  ${select==val.category?'after:w-[100%]':"after:w-[0%]"} justify-center gap-3 min-w-[7rem] w-[10rem] hover:after:w-[100%] under`}>
      <div>
        {setphoto && <img src={setphoto.url} className='' />}
      </div>
<h1 className='capitalize'>{val.category}</h1>
    </div>
  })
}
      </div>

{/* -------------------------------------------------------------------------------------------------------------------------- */}

<div>

<div>

</div>
<div>
  <StoreData val={select} />
</div>
</div>




    </Div>
  )
}

const Div=styled.section`

  .under{
    position: relative;
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left:0;
      height: 2%;
     
      background-color: red;
      transition: all 0.5s ease-in-out;
    }
  }

`


export default Store
