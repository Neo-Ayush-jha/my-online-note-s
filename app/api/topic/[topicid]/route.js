import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server"
import Topic from "@/app/model/Topic";


export async function GET(req,{params}) {
    await Connect()
    let data,code
    try{
        code = 200
        data = await Topic.findById(params.topicid)
        return NextResponse.json({data},{status:code})
    }catch(e){
        code=404
        return NextResponse.json({"msg":e.message},{status:code})
    }
}

export async function DELETE(req,{params}){
    await Connect()
    let code,data
    try{
        data= await Topic.findByIdAndDelete(params.topicid)
        code=200
        return NextResponse.json({"msg":"Topic is delete successfuly.."},{status:code})
    }catch(e){
        code = 401
        return NextResponse.json({"msg":e.message},{status:code})
    }
}