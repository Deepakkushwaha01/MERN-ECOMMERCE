

import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom"

import Form from "./components/helper/Form"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import LoginForm from "./components/helper/LoginForm"
import Dashboard from "./components/Dashboard/Dashboard"
import ProtectedRoute from "./components/Dashboard/ProtectedRoute"
import { useDispatch, useSelector } from "react-redux"
import { hiddenNav, viewNav } from "./components/Redux/Slices/HelperSlice"
import PopUp from "./components/helper/PopUp"

import Store from "./components/Page/Store"

import Navbar2 from "./components/Page/Navbar2"
import { GetData } from "./components/Redux/Slices/AllProductSlice"
import SingleProduct from "./components/Page/SingleProduct"
import Footer from "./components/Footer"
import Cart from "./components/Page/Cart"
import { CheckUser } from "./components/Axios/AxiosRegister"
import { delete_User } from "./components/Redux/Slices/UserSlice"
import UpdateProduct from "./components/Dashboard/Product/UpdateProduct/UpdateProduct"





function App() {
  const [stateChange,newstateChange]=useState(false);

const dispatch=useDispatch();

  const callData=async()=>{
const res=await dispatch(GetData());

  }


useEffect(()=>{
  callData();
  check(); 
},[])



const check=async()=>{
const res=await CheckUser();
if(res){
  if(res.data.requireSign===false){
    await dispatch(delete_User());
  }
}
}

/* useEffect(()=>{
 

},[]) */




  useEffect(() => {
    const handleVisibilityChange = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';

      if (document.hidden) {
        link.href = '/favi2.png'; // Replace with the path to your inactive favicon
      } else {
        link.href = '/favi.png'; // Replace with the path to your active favicon
      }

      document.getElementsByTagName('head')[0].appendChild(link);
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);



    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


/* -------------------------------------------- For Navbar ----------------------------------------------------  */


const navView=useSelector(state=>state.helper)

/* -------------- For Browser Buttons -------------------------------- */
  useEffect(() => {
    const handleURLChange = () => {
      // Check the current URL and perform an action based on the path
      const currentPath = window.location.pathname;

      if (currentPath === '/dashboard') {
        // Do something when the URL is '/login'
        dispatch(hiddenNav());
      } else {
        // Do something for other URLs
        dispatch(viewNav());
      }
    };

    window.addEventListener('popstate', handleURLChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleURLChange);
    };
  }, []);

/* -------------------------------------------------------------- */

  useEffect(()=>{
    newstateChange(navView.nav)
    },[navView.nav])
    
/* ---------------------------------------------------------------------------------------------------------------- */




  return (
    <>
    <BrowserRouter scrollRestoration="auto">
  
   {/*  {window.location.pathname !='/dashboard' && <Navbar2/>}  */}  {/* Getting Navbar location and render it */}
 {
  stateChange==true && <Navbar2/>
} 
<PopUp/>

    <Routes>
   
      <Route path="/" element={<Home/>} />
      <Route path='/store' element={<Store/>} />
      
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<Form/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/single/:id" element={<SingleProduct/>} />
      <Route path="/dashboard" element={<ProtectedRoute/>} > 
        <Route path='' element={<Dashboard/>} />
        <Route path="update/:id" element={<UpdateProduct/>}/>
      </Route>
    </Routes>
<Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
