import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server"
import Content from "@/app/model/Content";


export async function GET(req,{params}) {
    await Connect()
    let data,code
    let {topicid}=params
    try{
        code = 200
        data = await Content.find({topic_id:topicid})
        return NextResponse.json({data})
    }catch(e){
        code=404
        return NextResponse.json({"msg":e.message},{status:code})
    }
}
