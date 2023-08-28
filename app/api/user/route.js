import bcrypt from "bcryptjs"
import User from "@/app/model/User"
import Connect from "@/app/utils/Connect"
import { NextResponse } from "next/server"
Connect()

export async function GET() {
    let data, code
    try {
        data = await User.find({})
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
    let code = 200
    let { name, email, contact, password } = await req.json()
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let userData = new User({ name, contact, email, password: hashedPassword })
    try {
        await userData.save()
        return NextResponse.json(
            {
                userData, "msg": "User register successfully."
            },
            {
                status: code
            }
        )
    } catch (e) {
        code = 400
        return NextResponse.json(
            {
                error: e.message
            },
            {
                status: code
            }
        )
    }
}