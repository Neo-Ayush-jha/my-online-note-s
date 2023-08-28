import Topic from "@/app/model/Topic";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";
Connect()

export async function GET() {
    let data, code
    try {
        data = await Topic.find({})
        code = 200
        return NextResponse.json({ data }, { status: code })
    } catch (e) {
        code = 201
        return NextResponse.json({
                "msg": "Some this is wrong..."
            }
                , {
                    status: code
        })
    }
}
export async function POST(req) {
    let data, newTopic, code = 200
    data = await req.json()
    console.log(data)
    newTopic = new Topic(data)
    try {
        await newTopic.save()
        return NextResponse.json(
            {
                newTopic, "msg": "Topic is created successfullye..."
            },
            {
                status: code
            }
        )
    } catch (e) {
        code = 400
        return NextResponse.json({ "msg": "Some thing i wrong..." })
    }
}
