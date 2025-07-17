import { connectDb } from "@/lib/db";
import { ProductModel } from "@/model/productmodel";
// import { products } from "@/lib/products";

export let GET = async (req) => {
  try {
    await connectDb();
    const products = await ProductModel.find();
    return Response.json(
      {
        status: "Success",
        data: { products },
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
  }
};

export let POST = async (req) => {
  try {
    await connectDb();
    const product = await req.json();
    const newProduct = await ProductModel.create(product);
    return Response.json(
      {
        status: "Success",
        length:newProduct.length,
        data: {
          newProduct,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
  }
};


// export let PUT = async(req)=>{
//   await connectDb();
//     try{
//     const data= await req.json();
//     if(!data){
//         return Response.json(
//             {
//                 status:"fail" ,
//                 message:"No data is sent"
//             },
//             {status:400}
//         )
//     }
//     return Response.json(
//         {
//             status:"success",
//             message:"Data is added successfully",
//             value:{
//                 products
//             }
//         },
//         {status:200}
//     )
// }
// catch(err){
//     return Response.json(
//         {
//             status:"success",
//             message:err
//         },
//         {status:400}
//     )
// }
// }








// export let POST = async(req)=>{
//     try{
//     let data= await req.body();
//     return Response.json({message:"post request on string",value:{...data}},{status:200});
// }catch(err){
//     return Response.json({message:"post wont work in string"},{status:400});
// }



// }

// in next js we dont have respnce as arguments
// 





// import { products } from "@/lib/products";
// import { connectDb } from "@/lib/db";
// import { ProductModel } from "@/models/productModel";

