import { Product } from "../../../Model/ProductModel.js";
import fs from 'fs';

export const UpdateProduct=async(req,res)=>{
try {
  
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
    sellerID,
    main,
    category,
    stock,
    files,
    productID
  } = req.body;


  const colors=req.body.color;
  const rams=req.body.ram;
  const storages=req.body.storage;
  
  
  const colorarr=colors && colors.split(/\W+/);
  
  const ramArr=rams && rams.split(/\W+/);
  
  const storageArr=storages && storages.split(/\W+/);

  if (!color) {
    return res.status(200).send({
      success: false,
      message: "Product color is required",
    });
  }
  
  if (!sellerID) {
    return res.status(200).send({
      success: false,
      message: "Seller ID are required",
    });
  }

  if (!productID) {
    return res.status(200).send({
      success: false,
      message: "product ID are required",
    });
  }



const olddata=await Product.findOne({_id:productID});

const newImagesval=await olddata.images.map((val,index)=>{
  return files.filter(element => {
    return element.filename ==val.filename
  }); 
 
}).flat();

const newImagesvalDel=await olddata.images.filter(val=> !files.some(ele=>ele.filename==val.filename))


if(newImagesvalDel.length>0){
newImagesvalDel.forEach(element => {
const filePath = 'uploads/' + element.filename;
console.log(filePath)  

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    return;
  }
});
});
}



 const update=await Product.findOneAndUpdate({_id:productID},{
$set:{
  images:newImagesval,
  sellerID,
name,
price,
brand,
model,
network,
oprating,
cellular,
discription,
color:colorarr,
ram:ramArr,
storage:storageArr,
bullet,
main,
stock,
category
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

return res.status(200).send({
success: true,
message: "Product is Updated",

});

  
} catch (error) {
  console.log(error)
  res.status(500).send("error while Product Updating");
 
}

}