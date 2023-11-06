import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from './Dashboard/SideBar'
import Products from './Products'
import DashboardData from './DashboardData'
import Category from './Category'

const Dashboard = () => {

  const [route,newroute]=useState('dashboard');


  return (
    <Div className='bg-[#F5F6F8] h-auto min-h-screen'>
      <div className='relative border '>
<SideBar val={{route,newroute}}/>
      </div>

      <div className='px-[2vw]'>
        {
          route=='dashboard'?<DashboardData/>:route=='product'?<Products/>:route=='category'?<Category/>:''
        }

      </div>
    </Div>
  )
}

const Div=styled.section`
   display :grid ;
   grid-template-columns: 0.2fr 1fr;
`

export default Dashboard
