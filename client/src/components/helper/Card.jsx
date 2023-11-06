import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { clearSingle } from "../Redux/Slices/ProductSlice";

const Card = (val) => {

  const [animate, newanimate] = useState(false);
  const navigate=useNavigate();


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


  const dispatch=useDispatch();

  return (
   <NavLink to={`/single/${val._id}`} onClick={()=>dispatch(clearSingle())}  target="_blank">
    
     <Div className="w-[17rem] h-auto py-3 flex flex-col gap-4 shad bg-[#f8f8f8] rounded-md duration-[0.3s] 
    group ease-in hover:scale-[1.02]
    md:w-[18rem]

    ">
      <figure className="w-full h-[15rem] group-hover:scale-[1.1] duration-300 ease-in-out  ">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${val.images[0].path}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>

      <div className=" flex flex-col gap-2 px-4">
        <h1 className=" text-xl">{val.model}</h1>
        <p className="text-lg">
          <span className="text-red-500">&#8377;</span>{val.price}/-
        </p>
      </div>

      <div className="grid place-items-center">
        <button
          onClick={() => set()}
          className={`bg-black border w-[55%] h-[2.2rem] flex overflow-hidden py-1
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
            className={`text-[1rem] text-white w-fit h-auto ${
              animate == true ? "hidden" : ""
            }  `}
          >
            Add to Cart
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
    </Div></NavLink>
  );
};

const hid = keyframes`
  0%{
opacity: 1;

  }
  100%{
opacity: 0;
display: none;
  }
`;

const mo = keyframes`
  0%{

   transform: translateX(0%);
  }
  100%{

    transform: translateX(600%);
    display: none;
  }
`;

const Div = styled.section`
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .shad {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

 

  .move {
   
    animation: ${mo} 2s ease-in-out forwards;
  }
`;

export default Card;
