import mongoose from "mongoose";
// import { unique } from "next/dist/build/utils";

const productSchema = mongoose.Schema({
    name : {
        type : String,
        unique:[true,"name should be unique"],
        required : [true,"Schema must have a name"]
    },
    price : {
        type:Number,
        required : [true,"Price is missing"],
        // we can use required or default
        // default:3000,
        min : 3000
    }
});

// now we have created schema .Now create model below

export const ProductModel = mongoose.model.Product || mongoose.model("Product",productSchema)