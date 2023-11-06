import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from "react-router-dom";

const SideBar = ({val}) => {

const {route,newroute}=val


  const navigate=useNavigate();

  return (
    <div className='w-full h-[98vh] sticky top-[0] left-[0.5vw] grid place-items-center p-2'>
    <div className='bg-[#2B6FFE] w-[15vw] rounded-3xl  p-1 lg:p-4 h-full flex flex-col gap-3   '>
        <figure className='w-[100%] lg:w-[50%] pt-[5vh] lg:pt-[2vh] '>
            <img src="/logo/logo.png" alt="" className='w-full h-full'/>
        </figure>

        <div className='flex flex-col gap-4 lg:gap-2 py-[5vh] lg:py-[10vh]  w-full h-[100%] '>
     <div onClick={()=>newroute('dashboard')} className=' flex w-[100%] p-2 px-3 gap-3 justify-center lg:justify-start rounded-xl hover:bg-[#195dec]'>
        <DashboardIcon sx={{color:"#f8fafe"}}/>
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Dashboard</h1>
      </div>

      <div onClick={()=>newroute('product')} className=' flex w-[100%] p-2 px-3 gap-3 justify-center lg:justify-start rounded-xl hover:bg-[#195dec]'>
        <InventoryIcon sx={{color:"#f8fafe"}}/>
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Products</h1>
      </div>

      <div onClick={()=>newroute('category')} className=' flex w-[100%] p-2 px-3 gap-3 justify-center lg:justify-start rounded-xl hover:bg-[#195dec]'>
        <CategoryIcon sx={{color:"#f8fafe"}}/>
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Category</h1>
      </div>

      <div className=' flex w-[100%] p-2 px-3 gap-3 rounded-xl justify-center lg:justify-start hover:bg-[#195dec]'>
        <WidgetsIcon sx={{color:"#f8fafe"}} />
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Orders</h1>
      </div>

      <div onClick={()=>navigate('/')} className=' flex w-[100%] p-2 px-3 gap-3 justify-center lg:justify-start rounded-xl hover:bg-[#195dec]'>
        <KeyboardReturnIcon sx={{color:"#f8fafe"}}/>
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Returns</h1>
      </div>

      </div>

<div>
<div className=' flex w-[100%] p-2 px-3 gap-3 rounded-xl hover:bg-[#195dec]'>
        <SettingsIcon sx={{color:"#f8fafe"}}/>
        <h1 className='text-[#f8fafe] hidden lg:block text-base'>Settings</h1>
      </div>
</div>

</div>
    </div>
  )
}

export default SideBar
