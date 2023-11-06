import { Divider, IconButton } from '@mui/material'
import { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const SearchMenu = ({val}) => {

    const navigate=useNavigate();


const allData=useSelector(state=>state.allproduct)

const [data,newdata]=useState(null);

useEffect(()=>{
    if(val.invalue != ''){
        const r=allData.filter((vala,index)=>{
return vala.model.toLowerCase().includes(val.invalue)
        })
        
console.log(r)
      newdata(r);
    }
    else if(val.invalue == ''){
        newdata(null)
    }
},[val.invalue])


const route=()=>{
    const {newinvalue,newsearch}=val;
   /*  navigate(`/single/${val._id}`); */
    newsearch(false);
    newinvalue('');
}

  return (
    <Div  className={`${val.search?'translate-y-[0.5rem] opacity-100 visible':" invisible opacity-0 translate-y-[-0.5rem] "}
    bg-white w-[20rem]  z-40 h-auto absolute top-[100%] duration-[1s] ease-in-out left-[0%] md:right-0 md:left-auto
    flex flex-col justify-center items-center gap-6 py-4 px-3 rounded-md`}>
      {
        data ? data.map((val,index)=>{
            return <div className='w-full'><NavLink to={`/single/${val._id}`}><div key={index} onClick={()=>route()} className='w-full h-[3rem] flex gap-1  border-b'>

<div className='w-fit h-full'>
    <img src={`${import.meta.env.VITE_BACKEND_URL}/${val.images[0].path}`} alt="" className=' w-fit  h-full'/>
</div>
                <div className='w-[90%] h-full '>
                    <h1 className='text-sm'>{val.model.slice(0,30)} .....</h1>
                </div>

<div className='w-[10%]'>
    <IconButton>
<SearchIcon/>
    </IconButton>
</div>
            </div>  </NavLink> </div>     
            })
:
<div>
    <h1>Search anything....</h1>
</div>          
      }
    </Div>
  )
}
const Div=styled.section`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default SearchMenu 
