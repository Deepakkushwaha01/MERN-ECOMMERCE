import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hiddenPop } from '../Redux/Slices/HelperSlice';


const PopUp = () => {

/* -------------------------------------------- Handle PopUp ------------------------------------------------------- */
const [pop,newpop]=useState(false);
const [back,newback]=useState(false);

const popval=useSelector(state=>state.helper.pop);
const popMess=useSelector(state=>state.helper.popMessage);

console.log(popMess)

const dispatch=useDispatch();

useEffect(()=>{

    newpop(popval)
newback(popMess.success)

let time;

if(popval==true){
     time =setTimeout(()=>{
        dispatch(hiddenPop());
        newpop(false)
    },2000)

}

return ()=>{
    clearTimeout(time)
}

},[popval,back])


/* ----------------------------------------------------------------------------------------------------------------- */
  return (
    <div className={`fixed w-[80%] max-w-[70rem] h-[5rem] border p-1 rounded-l-lg bg-white grid place-items-center top-[20vh] duration-[1s] ease-in 
    
    ${pop==true?"translate-x-[0%]":"translate-x-[100%]"} right-0 z-50
    md:w-[40%]
    lg:w-[20%]
    `}>
    <div className='flex w-full h-full gap-4 justify-center items-center'>
      <figure className='w-fit h-[1.7rem] '>
        <img src={back==true?"/image/seen.png":"/image/close.png"} alt="" className='w-full h-full' />
      </figure>
    <h1 className='text-black text-xl tracking-wider'>{popMess.message}</h1>
    </div>
    </div>
  )
}

export default PopUp
