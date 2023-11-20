import { Product } from "../../../Model/ProductModel.js";


export const GetSingleProduct =async(req,res)=>{
 try {
     const {id}=req.params;
    
     if(!id){
        return res.status(400).send({
            success:false,
            message:"Error "
        })
    }

const data=await Product.findOne({_id:id});

if(data){

    return res.status(200).send({
        success:true,
        message:"Product Found",
        data
    })

}

return res.status(200).send({
    success:false,
    message:"Product Not Found"
})

 } catch (error) {
    
 }



}