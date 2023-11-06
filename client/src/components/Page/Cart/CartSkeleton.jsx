import React from 'react'
import styled from 'styled-components'

const CartSkeleton = () => {
    let arr=['s','s','s'];
  
  return (
    <Div className='w-full h-[90vh] grid place-items-center'>

      <div className='w-[80%] h-[80%] flex flex-col gap-[10%] px-2 py-8 md:px-12 md:py-[4rem] shadow rounded-md'>
 {
    arr.map((val,index)=>{
        
        return  <div className='w-full h-[4rem] flex gap-[2%] '>

        <div className='w-[4rem] h-[4rem] rounded-lg bg-[#dfdedf] animate-pulse'>
        
        </div>
        
        <div className='w-full flex flex-col gap-[20%] justify-center h-full'>
            <div className='w-[50%] h-[1rem] rounded-full bg-[#dfdedf] animate-pulse'></div>
        
            <div className='w-[80%] h-[1rem] rounded-full bg-[#dfdedf] animate-pulse'></div>
        </div>
        
        
                </div>
    })
 }



      </div>
    
    </Div>
  )
}

const Div=styled.section`
    .shadow{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`

export default CartSkeleton
