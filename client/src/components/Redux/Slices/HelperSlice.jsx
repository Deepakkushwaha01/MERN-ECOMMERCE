import { createSlice } from "@reduxjs/toolkit";


const HelperSlice=createSlice({
    name:'helper',
    initialState:{
        nav:true,
        pop:false,
        popMessage:{}
    },
    reducers:{

/* --------------------------------- Navbar -------------------------------------------------- */
hiddenNav:(state,action)=>{
   
state.nav=false;
},

viewNav:(state,action)=>{
    state.nav=true;
    },
/* ----------------------------------------------------------------------------------------------- */



/* --------------------------------- PopUp -------------------------------------------------- */
hiddenPop:(state,action)=>{
  
    state.pop=false;
    },
    
    viewPop:(state,action)=>{
        console.log(action.payload)
        state.popMessage=action.payload;
        state.pop=true;
        }
    /* ----------------------------------------------------------------------------------------------- */


    }
})


export const {hiddenNav,viewNav,hiddenPop,viewPop}=HelperSlice.actions;
export default HelperSlice.reducer