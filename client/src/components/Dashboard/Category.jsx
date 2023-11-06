import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { DeleteCategory, EntryCategory, GetCategory, UpdateCategory } from '../Axios/AxiosRegister';
import { useDispatch, useSelector } from 'react-redux';
import { viewPop } from '../Redux/Slices/HelperSlice';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';


const Category = () => {

  const id=useSelector(state=>state.user);
const dispatch=useDispatch();

const {exsitingUser}=id.user;



const [catData,newcatData]=useState({
  sellerID:"",
  category:""
});



/* ----------------------------------------- Get Category Data of seller ---------------------------------------------- */
const[CatgoryData,newCatgoryData]=useState(null);

const getData=async()=>{
  const res=await GetCategory({sellerID:exsitingUser._id});
 if(res){
  newCatgoryData(res.data.allData)
 }
}


useEffect( ()=>{
  getData();
},[])



/* ---------------------------------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------- Edit Category -------------------------------------------------- */
const[editCat,neweditCat]=useState();
const[cate,newcate]=useState('');


const Edit =({index,val})=>{
neweditCat(index);
newcate(val.category);
}


const UpdateCat=async({cat_id})=>{

  const res=await UpdateCategory({cat_id,category:cate});
  console.log(res)
  if(res){
    if(res.data.success==true){
      neweditCat();
    }
    getData();
  }
}

/* ----------------------------------------------------------------------------------------------------------------------- */


/* ----------------------------------------------------- Delete Category ------------------------------------------------ */
const del=async(id)=>{

 const res=await DeleteCategory(id);
if(res){
  getData();
}
}
/* ------------------------------------------------------------------------------------------------------------------------ */

useEffect(()=>{
  newcatData({
    ...catData,
    sellerID:exsitingUser._id
  })
},[id.user.exsitingUser])



const data=(e)=>{
const val=e.target.value;

const newval=val.toLowerCase();

newcatData({
  ...catData,
  category:newval
})

}


const backDataSend=async()=>{
  const res=await EntryCategory(catData);
  if(res){
    await getData();
    dispatch(viewPop(res.data));
  }

}


const handle=(e)=>{
if(e.key=='Enter'){
  backDataSend()
}
}






return (
    <Div className='p-4 flex flex-col gap-[5vh]'>
    <h1 className='text-3xl font-bold font-neo tracking-wide'>Category</h1>


<div className='grid place-items-center'>

<div className='w-[100%] lg:w-[40%] flex bg-white rounded-full h-[2.8rem] pl-4 pr-0.5  overflow-hidden'>

    <input type="text" name="" id="" placeholder='Add Category.....' value={catData.category}  className='w-full h-full outline-none text-lg' onChange={data} onKeyUp={handle}/>
   <div onClick={()=>backDataSend()}>
   <IconButton >
       <AddIcon sx={{color:"#2B6FFE",}}/> 
    </IconButton>
   </div>
</div>

</div>

<div className='bg-white min-h-[30vh] p-5 max-h-auto rounded-3xl grid place-items-center shad'>

<div className='w-[90%] md:w-[70%] h-[100%] flex flex-col  gap-4'>
  {
    CatgoryData==null ?  
    <div className='w-full h-[100%] flex gap-4 border-2 rounded-3xl border-dashed justify-center items-center'>
    <div className=' rounded-full    w-12 h-12 animate-spin spinner'>

</div>
  <h1 className='font-neo tracking-widest text-[0.6rem] md:text-[1.1rem]'>Loading Category</h1> 
  </div>
    :
    CatgoryData.map((val,index)=>{
      return  <div key={index} className='w-full h-[3rem]  flex rounded-xl justify-between border-[3px] items-center px-4'>
{/* <h1>{val.category}</h1> */}
<input type="text" name="" id="input" value={editCat==index? cate:val.category} onChange={(e)=>newcate(e.target.value)} disabled={editCat==index?false:true} className='w-full h-full bg-trasnparent disabled:bg-transparent' />

<div>
  {
    editCat == index ? 
    <div className='flex'>
    <IconButton onClick={()=>UpdateCat({cat_id:val._id})} >
  <DoneIcon/>
    </IconButton>

  </div> 
    
    :
    
    <div className='flex'>
    <IconButton onClick={()=>Edit({index,val})}>
  <EditIcon/>
    </IconButton>
  
    <IconButton onClick={()=>del(val._id)}>
    <CloseIcon/>
    </IconButton>
  </div> 
  }
</div>


      </div>
    })
  }


</div>


</div>




    </Div>
  )
}

const Div=styled.section`
 .spinner{
  border-width: 4px;
border-top:4px solid #2B6FFE;
 }
  .shad{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export default Category
