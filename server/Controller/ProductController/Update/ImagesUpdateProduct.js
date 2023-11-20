import { response } from "express"
import { Product } from "../../../Model/ProductModel.js";



export const UpdateImages=async(req,res)=>{
   try {
    const {P_id}=req.body;
  const images=req.files;

  if (!images) {
    return res.status(200).send({
      success: false,
      message: "Product Images is required",
    });
  }

  if (!P_id) {
    return res.status(200).send({
      success: false,
      message: "Product  is required",
    });
  }

  const olddata=await Product.findOne({_id:P_id});
if(images.length>0){
 const update=await Product.findOneAndUpdate({_id:P_id},{
    $set:{
        images:[...olddata.images,...images]
    }
   
}, {
    new:true
}) 


 if(!update){
    return res.status(200).send({
        success: false,
        message: "Product is not Saved",
      });
  } 



}

return res.status(200).send({
  success: true,
  message: "Product is Updated",
  
});
   }
    catch (error) {
        console.log(error)
        res.status(500).send(error); 
   } 
   

}