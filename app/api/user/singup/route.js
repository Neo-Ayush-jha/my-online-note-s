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
    try {
        let records = await req.json()
        const { name, email, contact, password } = records
        const user = await User.findOne({ email })
        console.log(records)
        if (user) {
            return NextResponse.json({ error: "User is alredy exist." }, { status: 400 })
        }
        else {
            const salt = await bcrypt.genSalt(6);
            const hashedPassword = await bcrypt.hash(password, salt)
            let newUser = new User({ name, email, contact, password: hashedPassword })
            const saveUser = await newUser.save()
            return NextResponse.json(
                {
                    saveUser,
                    message: "User register successfully."
                },
                {
                    status: 200
                }
            )
        }
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 400 })
    }
}