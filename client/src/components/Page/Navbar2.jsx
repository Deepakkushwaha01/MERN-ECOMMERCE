import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";



import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DropDown from "../helper/DropDown";
import { hiddenNav, viewNav } from "../Redux/Slices/HelperSlice";
import SearchMenu from "../helper/SearchMenu";


const Navbar2 = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
   
    if(window.location.pathname !=='/dashboard'){
      dispatch(viewNav())
    }

    if(window.location.pathname ==='/dashboard'){
      dispatch(hiddenNav())
    }

  },[window.location.pathname])


  let curr = useRef(0);
  const [statics,newstatics]=useState('static');
   const [navfixed, newnavfixed] = useState(" top-0"); 
    const [backcss, newbackcss] = useState("bg-transparent");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 250) {
        newbackcss("bg-transparent");
        newstatics('static')
      } else {
        newbackcss("bg-[#fff]");
    
        newstatics('fixed')
      }

     if (scrollPosition > 150) {
        if (curr.current < scrollPosition) {
          newnavfixed("-top-full");
        } else {
        newnavfixed("top-0 ");
        }
      } 

      // Update the scrollY state
     curr.current = scrollPosition; 
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


/* _____________________ Search --------------------------- */

const[search,newsearch]=useState(false);

const[invalue,newinvalue]=useState('');

  return (
    <Div
      className={`flex flex-col border items-center ${statics} z-50 ${navfixed} w-[100%] ${backcss}  duration-[1s] ease-in-out 
    py-2
    md:flex-row md:justify-between md:px-20
    
    lg:justify-between
    `}
    >
      <figure
        className={`w-[100%] max-w-[8rem] grid duration-[2s] ease  place-items-center md:min-w-[8rem]`}
      >
        <img
          src="/logo/logo2.png"
          alt=""
          className="w-fit duration-[2s] ease-in-out "
        />
      </figure>

      <ul
        className="flex text-black justify-evenly text-base px-5  w-full items-center h-[7vh]
    
    md:h-[auto] md:gap-x-10 md:w-[auto] 
    
    lg:h-[4rem]
    "
      >
      <li><NavLink to={'/'}>  <button className="cursor-pointer  under">Home</button></NavLink></li>
      <li><NavLink to={'/store'}> <button className="cursor-pointer  under">Store</button></NavLink></li>
     
        
      </ul>





      <ul
        className="flex text-black justify-evenly text-base px-5  w-full items-center h-[7vh]
    
    md:h-[auto] md:gap-x-10 md:w-[auto] 
    
    lg:h-[4rem]
    "
      >
       

     <li className={`flex ${search==false?" w-auto":'w-[14rem] border'}
      w-auto pr-2 h-[2rem]  relative justify-end rounded-2xl duration-[1s] ease-in-out`}>  
     
     <input type="text" name="" id="" value={invalue} onChange={(e)=>newinvalue(e.target.value)} className={`focus:outline-none ${search==false?"invisible w-0":'visible w-[85%]'}
      absolute left-[1%] duration-[0.1s] ease-in-out h-full top-0 px-2  `} />
     
       <button onClick={()=>{newsearch(!search),newinvalue('')}} className="cursor-pointer   ">
      
        <figure className="w-full h-full grid place-items-center">
            <img
              src={search?'/image/icon/close.png':"/image/icon/magnifyingicon.ico"}
              alt=""
              className={search?'w-[1.1rem] h-[1.1rem] ':"w-[1.8rem] h-full"}
            />
          </figure>
        </button> 
        

        <SearchMenu val={{search,invalue,newsearch,newinvalue}}/>
  
        
         </li>


        <li>   <button className="cursor-pointer justify-self-end  relative group ">
        <figure className="w-full h-full ">
            <img
              src="/image/icon/user.ico"
              alt=""
              className="w-[1.5rem] h-full"
            />
          </figure>
          <DropDown/>
        </button> </li>

        <li > <NavLink to={'/cart'}>  <button className="cursor-pointer ease duration-[1s]   ">
          <figure className="w-full h-full ">
            <img
              src="/image/icon/shopicon.ico"
              alt=""
              className="w-[1.5rem] h-full "
            />
          </figure>
        </button></NavLink></li>
      </ul>
    </Div>
  );
};

const Div = styled.section`
  .under {
    position: relative;
    &:hover::after {
      width: 100%;
    }
    &::after {
      content: "";
      width: 0%;
      height: 2px;
      background-color: #FF7717;
      position: absolute;
      bottom: -3px;
      left: 0;
      transition: 0.5s ease-in-out;
    }
  }
`;

export default Navbar2;
