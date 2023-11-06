import { createSlice } from "@reduxjs/toolkit";


const ProductSlice=createSlice({
    name:"product",
    initialState:{
        loading: false,
        error: false,
    
        FilterProduct:[],
        Category:[],
        SingleProduct:null,
        selectCat:"All"
    },
reducers:{

    loadCatData:(state,action)=>{
        state.Category=action.payload;
    },

    datafilter:(state,action)=>{
const {val,allpro}=action.payload;

if(val=='All'){
    state.FilterProduct=allpro
}else{
    state.FilterProduct=allpro.filter((item,index)=>{
        return item.category==val
    })
}

    },


getSingle:(state,action)=>{
state.SingleProduct=action.payload;
},

changeSelect:(state,action)=>{
 state.selectCat=action.payload;   
},

clearSingle:(state,action)=>{
    state.SingleProduct=null
}

},




})


export const {loadCatData,datafilter,getSingle,changeSelect,clearSingle} = ProductSlice.actions;

export default ProductSlice.reducer;