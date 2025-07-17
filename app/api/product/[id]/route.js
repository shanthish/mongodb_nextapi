// import { products } from "@/lib/products";
import { connectDb } from "@/lib/db";
import { ProductModel } from "@/model/productmodel";

export let GET = async (_, { params }) => {
    try {
        await connectDb();
        const {id} = await params;
        const product = await ProductModel.findById(id);
        if (!product)
            return Response.json({ status: "Wrong request", message: "Please check your id" }, { status: 400 });
        return Response.json({
            status: "Success",
            data: {
                product
            }
        }, { status: 200 })
    }
    catch (err) {
        return Response.json(
            {
                status: "Fail",
                message: err,
            },
            { status: 500 }
        );
    }
}


export let PATCH = async (req, { params }) => {
    try {
        await connectDb();
        const data = await req.json();
        const product = await ProductModel.findByIdAndUpdate(params.id, data, {
            new: true,
            runValidators: true
        });

        if (!product)
            return Response.json({ status: "Wrong request", message: "Please check your id" }, { status: 400 });
        return Response.json({ status: "updated Successlly" }, { status: 200 });
    }
    catch (err) {
        return Response.json(
            {
                status: "Fail",
                message: err,
            },
            { status: 500 }
        );
    }
}

export let DELETE = async (_, { params }) => {
    try {
        await connectDb();
        let product = await ProductModel.findByIdAndDelete(params.id);
        if (!product)
            return Response.json({ status: "Wrong request", message: "Please check your id" }, { status: 400 });
        return Response.json({ status: "Deleted Success" }, { status: 200 });
    }
    catch (err) {
        return Response.json(
            {
                status: "Fail",
                message: err,
            },
            { status: 500 }
        );
    }
}