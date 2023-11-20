import { Category } from "../../Model/CategoryModel.js";
import { Product } from "../../Model/ProductModel.js";
import auth from "../../Model/UserModel.js";

export const GetSellerData=async(req,res)=>{
try {

    const id=req.query.id;

    if(!id){
        return res.status(403).send({
            success: false,
            message: "seller ID is required",
          });
    }

const TotalProducts=await Product.countDocuments({sellerID:id})
const TotalCategory=await Category.countDocuments({sellerID:id})
const userData=await auth.findOne({_id:id})




    res.status(200).send({TotalProducts,TotalCategory,userData:{...userData._doc,password:"",cpassword:"",token:""}})
} catch (error) {
    res.send(error)
}





}