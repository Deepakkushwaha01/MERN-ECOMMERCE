import React, { useState } from 'react'
import Allproduct from './Product/Allproduct'
import EntryProduct from './Product/EntryProduct';

const Products = () => {
    const [change,newchange]=useState('all');

const navi=()=>{
if(change=='all'){
    newchange('entry')
}else{
    newchange('all')
}
}

  return (
    <div className='p-4 flex flex-col gap-[5vh]'>
      <h1 className='text-3xl font-bold font-neo tracking-wide'>Products</h1>

<div>
    <button onClick={()=>navi()} className='border-2 rounded-lg duration-[1s] ease-in-out border-dashed border-sky-500 p-2 px-3'>{change=='all'?"Add New":"All Products"}</button>
</div>

<div>
    {change=='all'?<Allproduct/>:change=='entry'?<EntryProduct/>:""}
</div>

    </div>
  )
}

export default Products
