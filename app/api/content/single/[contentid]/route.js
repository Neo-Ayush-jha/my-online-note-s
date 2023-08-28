import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server"
import Content from "@/app/model/Content";


export async function DELETE(req,{params}){
    await Connect()
    let code,data
    try{
        data= await Content.findByIdAndDelete(params.contentid)
        code=200
        return NextResponse.json({"msg":"Content is delete successfuly.."},{status:code})
    }catch(e){
        code = 401
        return NextResponse.json({"msg":e.message},{status:code})
    }
}


export const GET = async (req, {params}) => {
    await Connect();
    let data;
    try{
        data = await Content.findById(params.contentid).populate("author").populate("topic_id");
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":"something went wrong"});
    }
}