import React, { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCatData } from "../../Redux/Slices/AddCartSlice";
import { viewPop } from "../../Redux/Slices/HelperSlice";
import { AddToCart } from "../../Axios/AxiosRegister";

const DataSingle = ({ val }) => {
  const {
    name,
    price,
    brand, 
    model,
    network,
    oprating,
    cellular,
    discription,
    color,
    ram,
    storage,
    bullet,
    main,
    stock,
    category,
  } = val[0];

  
  const [animate, newanimate] = useState(false);
  


  const set = () => {
    newanimate(true);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      newanimate(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [animate == true]);


 /* -------------------------------------- Add to Cart ------------------------------------------------------ */ 
  const [quat,newquat]=useState(1);   // To Add qunatity

  const [cartItems,newcartItems]=useState({
    selectedItem:null,
selectedQunatity:quat,
selectedRam:null,
selectedStorage:null,
selectedColor:null    
  })

useEffect(()=>{       // to update quantitys
  newcartItems({
    ...cartItems,
    selectedQunatity:quat
  })
},[quat])








{
  ram ==null && storage ==null ? useEffect(()=>{     // To select first color,ram etc ki wo khali backend m data nahi jaye

    newcartItems({
      ...cartItems,
      selectedItem:{...val[0]},
      selectedColor:val[0].color[0],
      selectedRam:null,
selectedStorage:null,
    })
  
  
  },[color])
  :
  useEffect(()=>{     // To select first color,ram etc ki wo khali backend m data nahi jaye

       newcartItems({
         ...cartItems,
         selectedItem:{...val[0]},
         selectedColor:val[0].color[0],
         selectedRam:val[0].ram[0],
         selectedStorage:val[0].storage[0], 
       })
     
   
   
   },[val])
}


const setval=({color,name,ram,storage})=>{   // to update thier value
console.log(name,ram,storage)
  if(name=='color'){
  newcartItems({
...cartItems,
selectedColor:color
  })
}

 else if(name=='rom'){

  newcartItems({
    ...cartItems,
    selectedRam:ram,
    selectedStorage:storage,
      })

} 

}

const navigate=useNavigate();
const dispatch=useDispatch();

const userid=useSelector(state=>state.user.user);

console.log(userid)
const updateCart=async()=>{
  if(userid){

  }
  const res=await AddToCart(cartItems);
  console.log(res)
if(res.data){
   dispatch(viewPop(res.data))
   
   if(res.data.requireSign==false){
    navigate('/login')
   }

   
}
}


 
 
  return <Div className="my-12 px-[2vw] flex flex-col gap-[4vh] 
   md:gap-[7vh]
  ">
   <div>
   {
            name && <div className={`${name?'block':"hidden"} w-full `}>
            <h1 className="text-4xl font-semibold">{name}</h1> 
        
        <div>
        {
            oprating && <div>{oprating}</div>
        }
    </div>
        </div>   
    }
    </div> 
   
  

<div className="flex flex-col gap-6">
<div className={`${price?'block':"hidden"}`}>
        {
            price && <h2 className="text-3xl"><span className="text-red-500">&#8377;</span>{price}/-</h2>
        }
    </div>
<Divider/>
<div className="flex gap-2">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4 11.5999C19.4 15.6868 16.0869 18.9999 12 18.9999V18.9997H11.9455C7.88368 18.9704 4.6 15.6686 4.6 11.5999C4.6 7.51295 7.91309 4.19985 12 4.19985C16.0869 4.19985 19.4 7.51295 19.4 11.5999ZM12 20.5999L11.9399 20.5997H3V18.9997H6.87579C4.53366 17.3747 3 14.6664 3 11.5999C3 6.62929 7.02944 2.59985 12 2.59985C16.9706 2.59985 21 6.62929 21 11.5999C21 16.5704 16.9706 20.5999 12 20.5999ZM16.4 11.5C16.4 13.9301 14.4301 15.9 12 15.9C9.56995 15.9 7.6 13.9301 7.6 11.5C7.6 9.06999 9.56995 7.10005 12 7.10005C14.4301 7.10005 16.4 9.06999 16.4 11.5ZM18 11.5C18 14.8138 15.3137 17.5 12 17.5C8.68629 17.5 6 14.8138 6 11.5C6 8.18634 8.68629 5.50005 12 5.50005C15.3137 5.50005 18 8.18634 18 11.5Z" fill="black"/>
</svg>
<h1>Exclusive Membership Benefits</h1>
</div>
<Divider/>
</div>





<div className={`${bullet?'block':"hidden"}`}>
    <div>
        {
            bullet && <h1 className="text-3xl font-semibold">Key Points</h1>
        }
    </div>
   <div  className="px-[1rem] mt-6">
   {
        bullet && <ul className="list-disc text-justify">
            {
                bullet.map((val,index)=>{
                    return <li key={index}>{val}</li>
                })
            }
        </ul>
    }
   </div>
</div>




<div className={`${brand?'block':"hidden"}`}>
{
    brand && <h1 className="text-3xl font-semibold mb-6">Specifications</h1>
}
<table className="text-xl">
  
  {brand && <tr>
    
    <td>Brand:</td>
    <td>{brand}</td>

  </tr>
}  
{model && <tr className="">
    
    <td className="">Model Name:</td>
    <td className=""> {model}</td>

  </tr>
} 
{network && <tr className="">
    
    <td className="">Network:</td>
    <td className=""> {network}</td>

  </tr>
}

{cellular && <tr className="">
    
    <td className="">Cellular:</td>
    <td className=""> {cellular}</td>

  </tr>
}

{category && <tr className="">
    
    <td className="">Category:</td>
    <td className=""> {category}</td>

  </tr>
}


</table>
</div>




<div className={`${discription?'block':"hidden"}`}>
    <div>
        {
            discription && <h1 className="text-3xl font-semibold">Description</h1>
        }
    </div>
   <div className="px-[1rem] text-justify mt-6">
   {
        discription && <p>{discription}</p>
    }
   </div>

</div>

<div className={`flex flex-col gap-[2vh] ${color?"block":"hidden"} `}>
    <h1 className="text-3xl font-semibold">Color :</h1>
<div className="flex gap-3">
    {
        color && color.map((val,index)=>{
            return <div key={index} onClick={()=>setval({color:val,name:'color'})} 
            className={`border w-[3rem] h-[3rem] p-1 rounded-full ${cartItems.selectedColor==val?'outline  outline-sky-500':""} `}>
                
                <div style={{backgroundColor:`${val}`}} className="w-full h-full border rounded-full">

                </div>

            </div>
        })
    }
</div>
</div>

<div className={`flex flex-col gap-[2vh] ${ram?"block":"hidden"} `}>
   {ram && <h1 className="text-3xl font-semibold">ROM :</h1>}
<div className="flex w-full gap-2">
    {
        ram && ram.map((val,index)=>{
            const storages=storage && storage[index];
return <div onClick={()=>setval({name:'rom',storage:storages,ram:val})} 

className={`border ${ cartItems.selectedRam==val && cartItems.selectedStorage==storages?'outline scale-[1.01] outline-sky-500':""} flex w-full justify-center h-[4rem] items-center text-sm md:text-base`}>

<p>{val} GB RAM</p>
<p>+</p>
<p>{storages} GB Storage</p>
</div>
        })
    }
</div>
</div>

<div className={`${stock>0 || stock ?"block":"hidden"} w-full flex flex-col  `}>
    <h1 className="text-3xl font-semibold">Quntity:</h1>
<div className="flex gap-4 mt-6 ml-4 ">
    <div onClick={()=>quat>1 && newquat((per)=>per-1)} className="w-[3rem] h-[3rem] border text-4xl flex items-center justify-center p-[10px] rounded-md">
<img src="/image/icon/minus.png" alt="" className="w-full h-full" />
    </div>

    <div className="w-[3rem] h-[3rem] border text-4xl flex items-center justify-center  rounded-md">
<input type="text" name="" id="" value={quat} onChange={(e)=>newquat(e.target.value)} className="w-full h-full text-base grid place-items-center px-3"/>
    </div>

    <div onClick={()=>stock>quat && newquat((per)=>per+1)} className="w-[3rem] h-[3rem] border text-4xl flex items-center justify-center p-[10px] rounded-md">
<img src="/image/icon/plus.png" alt="" className="w-full h-full" />
    </div>
</div>
</div>


<div className="grid place-items-center w-full ">
<button
  onClick={() => {set(),updateCart()}}
 className={`bg-black border w-[45%] h-[4rem] flex overflow-hidden py-1
           ${animate == true ? "justify-start" : "justify-center"} 
    relative gap-2 items-center  rounded-lg shad`}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            className={`${
              animate == true
                ? "translate-x-[650%] duration-[2s] ease-in-out"
                : ""
            } w-fit border-red-500 justify-self-start  h-full`}
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                className="group-hover:rotate-12 duration-100 ease"
                d="M63 5034 c-31 -15 -63 -65 -63 -98 0 -32 29 -85 56 -103 25 -16 58
-19 289 -23 245 -5 262 -6 302 -28 57 -30 108 -83 136 -140 13 -26 192 -555
397 -1176 l374 -1128 -18 -47 c-73 -190 -70 -180 -71 -301 0 -94 4 -127 23
-182 62 -180 210 -315 397 -363 87 -22 2431 -23 2474 -1 82 43 81 161 -2 209
-17 9 -293 13 -1232 17 l-1210 5 -54 30 c-55 30 -104 83 -137 145 -13 26 -18
58 -19 125 0 77 4 100 28 156 28 65 30 67 70 73 23 3 584 62 1247 131 663 69
1230 130 1260 136 120 23 245 86 334 168 65 60 132 167 166 266 37 107 312
1285 306 1310 -7 29 -41 63 -76 77 -16 6 -742 20 -1962 37 -1066 15 -1939 29
-1942 32 -2 2 -27 76 -56 164 -74 223 -101 276 -185 361 -77 78 -175 133 -273
153 -30 6 -156 11 -290 11 -195 0 -243 -3 -269 -16z m3207 -945 c866 -12 1576
-23 1578 -25 2 -1 -55 -244 -127 -541 -136 -558 -157 -623 -221 -692 -51 -54
-123 -97 -191 -115 -56 -14 -2435 -266 -2517 -266 l-31 0 -152 463 c-84 254
-207 630 -275 836 l-123 374 242 -6 c133 -4 951 -16 1817 -28z"
              />
              <path
                d="M1520 1124 c-192 -41 -360 -205 -405 -395 -43 -184 9 -365 143 -499
137 -137 315 -188 501 -145 93 22 176 71 252 147 119 119 174 280 151 442 -25
175 -137 329 -297 406 -118 58 -221 71 -345 44z m244 -258 c105 -51 160 -144
161 -266 0 -59 -5 -84 -23 -120 -36 -68 -99 -127 -160 -150 -243 -91 -473 139
-382 382 29 78 108 149 200 179 46 15 147 3 204 -25z"
              />
              <path
                d="M3780 1124 c-102 -22 -185 -68 -265 -148 -108 -108 -155 -220 -155
-371 0 -152 49 -272 157 -379 208 -208 538 -208 746 0 108 107 157 225 157
373 0 158 -45 267 -155 377 -81 81 -163 126 -270 149 -85 18 -130 18 -215 -1z
m232 -251 c60 -27 115 -84 146 -151 65 -142 5 -311 -135 -382 -69 -36 -197
-36 -266 0 -164 83 -210 284 -101 442 73 105 231 146 356 91z"
              />
            </g>
          </svg>
          <h1
            className={`text-[1.3rem] text-white w-fit h-auto ${
              animate == true ? "hidden" : ""
            }  `}
          >
            Add To Cart
          </h1>

          <div
            className={`absolute w-full ${
              animate == true
                ? "top-0 delay-[1.2s] duration-300 ease-in-out"
                : "top-[-100%]"
            }  h-full  flex items-center gap-2 justify-center`}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              className="w-[13%] "
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M4473 4540 c-126 -26 -51 43 -1423 -1326 l-1275 -1274 -480 480
c-518 518 -529 527 -657 551 -51 9 -79 9 -124 1 -113 -23 -158 -53 -306 -200
-114 -115 -142 -149 -170 -207 -30 -64 -33 -78 -33 -165 0 -83 4 -103 29 -160
28 -61 77 -113 799 -837 556 -557 784 -779 821 -800 71 -39 168 -39 241 -1 38
20 432 409 1606 1585 1481 1483 1557 1561 1585 1623 25 57 29 77 29 160 0 137
-27 191 -176 345 -126 130 -187 179 -257 205 -59 22 -154 31 -209 20z"
                />
              </g>
            </svg>
            <h1 className="text-white font-semibold">Saved</h1>
          </div>
        </button>
</div>

  </Div>;
};

const mo = keyframes`
  0%{

   transform: translateX(0%);
  }
  100%{

    transform: translateX(600%);
    display: none;
  }
`;

const Div=styled.section`
 table {
    border-collapse: collapse;
  }
   tr,th, td{
      
        padding: 10px;
    }

    .move {
   
   animation: ${mo} 2s ease-in-out forwards;
 }

`

export default DataSingle;
