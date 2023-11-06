import axios from 'axios';


axios.defaults.withCredentials=true;


/* -------------------------------------------------- User Register ------------------------------------------- */
export const registerUser=async(data)=>{
    const res= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`,data);
    console.log(res)
}
/* ------------------------------------------------------------------------------------------------------------ */





/* -------------------------------------- Product ------------------------------------------------------------- */
export const Entry=async(data)=>{
 const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/p`,data);
    return res;
}

export const EntryImage=async(data)=>{
    const res=await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/p/image`,data);
       return res;
   }

   export const GetProduct=async(data)=>{
    const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pGet`,data);
       return res;
   }
/* ------------------------------------------------------------------------------------------------------------ */






/* ------------------------------------------ Add Category ------------------------------------------------------- */
export const EntryCategory=async(data)=>{
const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/AddCat`,data);
return res;
}

export const GetCategory=async(data)=>{
        const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/GetCat`,data);
        return res;
}

export const DeleteCategory=async(id)=>{
/* console.log(`${import.meta.env.VITE_BACKEND_URL}/deleteCat/${id}`) */
    const res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteCat/${id}`);
    return res;
}

export const UpdateCategory=async(data)=>{
    const res=await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/updateCat`,data);
    return res;
}


export const GetAllCategory=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/GetCatData`);
    return res;
}


/* ---------------------------------------------------------------------------------------------------------------- */





/* -------------------------------------- Check Seller ------------------------------------------------------- */
export const SellerCheck=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/checkSeller`);
       return res;
     
   }
/* ----------------------------------------------------------------------------------------------------------- */




/* ---------------------------------------------- Cookie Clear ----------------------------------------------- */

   export const CookieClear=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/clearCookie`);
       return res;
     
   }
   /* --------------------------------------------------------------------------------------------------------- */





/* -------------------------------------------------- Single Product ------------------------------------------- */
export const SingleProduct_Get=async(data)=>{
    const res= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/single_product`,data);
    return res;
}
/* ------------------------------------------------------------------------------------------------------------ */   






/* ----------------------------------------------------- Add to Cart ------------------------------------------- */
export const AddToCart=async(data)=>{
const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/addcart`,data);
return res;

}


export const DeleteCartItem=async(id)=>{
    const res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/deleteCartProduct/${id}`);
    return res; 
}


export const UpdateCartQuat=async(data)=>{
    const res=await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/updateCartItem`,data);
    return res; 
}

/* ------------------------------------------------------------------------------------------------------------- */





/* --------------------------------------------- Required Sign --------------------------------------------------- */

export const CheckUser=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/checkUser`);
    return res;
}
