// import { products } from "@/lib/products";
import { connectDB } from "@/lib/db";
import { productModel } from "@/model/productModel";

export let GET = async(_,{params}) =>{
    try{
        await connectDB();
        const product = await productModel.findById(params.id);
        if(!product)
            return Response.json({status:"Wrong request",message:"Please check your id"},{status:400});
        return Response.json({
            status:"Success",
            data:{
                product
            }
        },{status:200})
    }
    catch(err){
        return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
    }
}
export let PATCH = async(req,{params}) => {
    try{
        await connectDB();
        const data = await req.json();
        let product=await productModel.findByIdAndUpdate(params.id,data);
        if(!product)
            return Response.json({status:"Wrong request",message:"Please check your id"},{status:400});
        return Response.json({status:"updated Successlly"},{status:200});
    }
    catch(err){
         return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
    }
}

export let DELETE = async(_,{params}) => {
    try{
        await connectDB();
        let product= await productModel.findByIdAndDelete(params.id);
        if(!product)
            return Response.json({status:"Wrong request",message:"Please check your id"},{status:400});
        return Response.json({status:"Deleted Success"},{status:200});
    }
    catch(err){
        return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
    }
}