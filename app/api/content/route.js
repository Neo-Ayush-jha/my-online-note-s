import Content from "@/app/model/Content";
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server";
Connect()

export async function GET() {
    let data, code
    try {
        data = await Content.find({}).populate("author").populate("topic_id");
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
    let data, newContent, code
    data = await req.json()
    newContent = new Content(data)
    try {
        code = 200
        await newContent.save()
        return NextResponse.json(
            {
                newContent, "msg": "Content is created successfullye..."
            },
            {
                status: code
            }
        )
    } catch (e) {
        code = 400
        return NextResponse.json({ e},{status:code})
    }
}
